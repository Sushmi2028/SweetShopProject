const express = require('express');
const router = express.Router();
const Sweet = require('../models/Sweet');
const auth = require('../middleware/authMiddleware');

// Add a new sweet
router.post('/', auth, async (req, res) => {
  const sweet = new Sweet(req.body);
  await sweet.save();
  res.json(sweet);
});

// Get all sweets
router.get('/', auth, async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// Search sweets by name/category
router.get('/search', auth, async (req, res) => {
  const { name, category } = req.query;
  const query = {};
  if (name) query.name = new RegExp(name, 'i');
  if (category) query.category = category;
  res.json(await Sweet.find(query));
});

// Purchase sweet (reduce quantity)
router.post('/:id/purchase', auth, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet || sweet.quantity <= 0)
    return res.status(400).json({ message: 'Out of stock' });
  sweet.quantity -= 1;
  await sweet.save();
  res.json(sweet);
});

module.exports = router;
