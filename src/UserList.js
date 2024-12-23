import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'; 

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUsers(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="container">
        <h1 className="error">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <ul className="list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="listItem">
           <strong> Name: </strong>{user.name} 
           <br />
           <strong> Email: </strong> {user.email}
           <br />
           <strong> City: </strong> {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
