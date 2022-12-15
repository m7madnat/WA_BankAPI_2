import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";

export const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    Api.get("/accounts")
      .then(({ data }) => {
        setAccounts(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (

    <div className="container">
      <h1>accounts</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">credit</th>
            <th scope="col">usersIds</th>
            <th scope="col">Total Cash</th>     
            <th scope="col"> button </th>       
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account._id}</td>
              <td>{account.credit}</td>
              <td>{account.usersIds.map((usr)=>{
                return(<p>{usr}</p>)
              })}</td>
              <td>{account.cash}</td>
              <td>
                <Link to={`/accounts/${account._id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




  );
};
