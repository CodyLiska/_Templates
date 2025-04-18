// components/UserForm.js
import React, { useState } from "react";
import axios from "axios";

function UserForm({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/users", {
        name,
        email,
      }); // Replace with your backend URL
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
