import React, { useState } from "react";
import API from "../Api";

const AddSweet = () => {
  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setSweet({ ...sweet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/sweets", sweet);
      setMessage(`✅ Sweet added: ${res.data.name}`);
      setSweet({ name: "", category: "", price: "", quantity: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to add sweet ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Sweet</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Sweet Name"
          value={sweet.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="category"
          placeholder="Category"
          value={sweet.category}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={sweet.price}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={sweet.quantity}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Sweet</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "30px" },
  form: { display: "inline-block", flexDirection: "column" },
  input: { display: "block", margin: "10px auto", padding: "8px", width: "200px" },
  button: { padding: "8px 20px", cursor: "pointer" },
};

export default AddSweet;
