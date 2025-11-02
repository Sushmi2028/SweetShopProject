import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import SweetsList from "./components/SweetsList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🍬 Sweet Shop</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <SweetsList />
    </div>
  );
}

export default App;
