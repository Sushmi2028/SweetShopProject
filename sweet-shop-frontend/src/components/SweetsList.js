import React, { useEffect, useState } from "react";
import API from "../Api";

const SweetsList = () => {
  const [sweets, setSweets] = useState([]);
  const [message, setMessage] = useState("");

  const fetchSweets = async () => {
    try {
      const res = await API.get("/sweets");
      setSweets(res.data);
    } catch (err) {
      setMessage("Failed to load sweets ❌ (Please login first)");
    }
  };

  const purchaseSweet = async (id) => {
    try {
      const res = await API.post(`/sweets/${id}/purchase`);
      setMessage(`You purchased: ${res.data.name} 🎉`);
      fetchSweets(); // refresh list
    } catch (err) {
      setMessage(err.response?.data?.message || "Purchase failed");
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Available Sweets</h2>
      <button onClick={fetchSweets} style={styles.refreshBtn}>🔄 Refresh</button>
      {message && <p>{message}</p>}
      <div style={styles.grid}>
        {sweets.length === 0 ? (
          <p>No sweets found.</p>
        ) : (
          sweets.map((sweet) => (
            <div key={sweet._id} style={styles.card}>
              <h3>{sweet.name}</h3>
              <p>Category: {sweet.category}</p>
              <p>Price: ₹{sweet.price}</p>
              <p>Stock: {sweet.quantity}</p>
              <button
                onClick={() => purchaseSweet(sweet._id)}
                disabled={sweet.quantity <= 0}
                style={styles.button}
              >
                {sweet.quantity > 0 ? "Buy Now" : "Out of Stock"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "30px" },
  refreshBtn: { padding: "6px 12px", marginBottom: "10px", cursor: "pointer" },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    background: "#f9f9f9",
  },
  button: { padding: "8px", cursor: "pointer", marginTop: "5px" },
};

export default SweetsList;
