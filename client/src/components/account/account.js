import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import { useParams, Link } from "react-router-dom";

export const Account = (props) => {
  const [account, setAccount] = useState({});
  const [credit, setCredit] = useState({});
  const [deposit, setDeposit] = useState({});
  const [withdraw, setWithdraw] = useState({});
  const [transfer, setTransfer] = useState({});
  const [to, setTo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Api.get(`/accounts/${id}`)
      .then(({ data }) => {
        setAccount(data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <div className="container">
      <h1>Account</h1>
      <h2>
        {" "}
        <Link to={`/`}> back to Accounts</Link>
      </h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">credit</th>
            <th scope="col">usersIds</th>
            <th scope="col">Total Cash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{account._id}</td>
            <td>{account.credit}</td>
            <td>{account.usersIds}</td>
            <td>{account.cash}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h1>Update Credit</h1>
        <form>
          <input type="text" onChange={(e) => setCredit(e.target.value)} />
          <button
            onClick={(e) => {
              e.preventDefault();
              Api.put(`/accounts/credit/${id}`, { credit: credit })
                .then(({ data }) => {
                  setAccount(data);
                })
                .catch((e) => console.log(e));
            }}
          >
            Update
          </button>
        </form>
      </div>
      <div>
        <h1>Deposit</h1>
        <form>
          <input type="text" onChange={(e) => setDeposit(e.target.value)} />
          <button
            onClick={(e) => {
              e.preventDefault();
              Api.put(`/accounts/deposit/${id}`, { amount: deposit })
                .then(({ data }) => {
                  setAccount(data);
                })
                .catch((e) => console.log(e));
            }}
          >
            Deposit
          </button>
        </form>
      </div>
      <div>
        <h1>Withdraw</h1>
        <form>
          <input type="text" onChange={(e) => setWithdraw(e.target.value)} />
          <button
            onClick={(e) => {
              e.preventDefault();
              Api.put(`/accounts/withdraw/${id}`, { amount: withdraw })
                .then(({ data }) => {
                  setAccount(data);
                })
                .catch((e) => console.log(e));
            }}
          >
            Withdraw
          </button>
        </form>
      </div>
      <div>
        <h1>Transfer</h1>
        <form>
          <input type="text" onChange={(e) => setTransfer(e.target.value)} />
          <input type="text" onChange={(e) => setTo(e.target.value)} />

          <button
            onClick={(e) => {
              e.preventDefault();
              Api.put(`/accounts/transfer/${id}`, {
                amount: transfer,
                to: to,
              })
                .then(({ data }) => {
                  setAccount(data);
                })
                .catch((e) => console.log(e));
            }}
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};
