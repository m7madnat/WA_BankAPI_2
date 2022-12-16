import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import { useParams,Link } from "react-router-dom";

export const User = (props) => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Api.get(`/users/${id}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <div className="container">
      <h1>User</h1>
      <h2> <Link to={`/users`}> back to users</Link></h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">AccountIds</th>
            <th scope="col">Total Cash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.accountIds}</td>
            <td>{user.totalCash}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
