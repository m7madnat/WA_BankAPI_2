import React, { useState } from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [accountIds, setAccountIds] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    const user = { name, accountIds };
    if (accountIds === "") {
      user.accountIds = [];
    } else {
      user.accountIds = accountIds.split(",");
    }
    try {
      Api.post("/users/add", user)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Account Ids</label>

        <input
          type="text"
          value={accountIds}
          onChange={(e) => setAccountIds(e.target.value)}
        />
        <button onClick={addUser}>Create</button>
        <h1>
          <Link to="/users">Check all users</Link>
        </h1>
      </form>
    </div>
  );
};
