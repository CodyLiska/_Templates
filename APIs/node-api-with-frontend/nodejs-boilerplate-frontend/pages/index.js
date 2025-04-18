// pages/index.js
import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/api/users"); // Replace with your backend URL
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserList users={users} />
      <UserForm setUsers={setUsers} />
    </div>
  );
}

export default Home;
