import axios from "axios";
import React, { useState } from "react";

export const CreateUser = () => {

    const [name, setName] = useState('');
    const [accountIds, setAccountIds] =  useState('');




    const addUser = (e) => {
        e.preventDefault();
        const user = { name ,accountIds };    
        if(accountIds === ""){
            user.accountIds = [];
        }
        else{
            user.accountIds = accountIds.split(',');
        }
        try{
            axios.post('http://localhost:5001/api/users/add', user);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Create User</h1>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Account Ids</label>

                <input type="text" value={accountIds} onChange={(e) => setAccountIds(e.target.value)} />
                <button onClick={addUser}>Create</button>
            </form>
        </div>
    )
}








