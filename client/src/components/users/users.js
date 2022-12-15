import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import './users.css';
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    Api.get("/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteUser = (e) => {
    const id = e.target.value;
    Api.delete(`/users/${id}`)
      .then(({ data }) => {
        setUsers(users.filter((user) => user._id !== id));
      }
      )
      .catch((e) => console.log(e));      
  };

  return (

    <div className="container">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">AccountIds</th>
            <th scope="col">Total Cash</th>     
            <th scope="col"> button </th>     
            <th scope="col">delete</th>  
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.accountIds}</td>
              <td>{user.totalCash}</td>
              <td>
                <Link to={`/users/${user._id}`}>Details</Link>
              </td>
              <td>
                <button value={user._id} onClick={deleteUser}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




  );
};
