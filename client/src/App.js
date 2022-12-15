import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import { Users } from './components/users/users';
import {User} from './components/user/user';
import { Accounts } from './components/accounts/accounts';
import {Account} from './components/account/account'
import { CreateUser } from './components/createUser/createuser';


function App() {
  return (
    <div className="App">
      <Routes>      
        <Route path="/" element={
          <div>
            <h1>Home</h1>
            <h1><Link to="/users">Users</Link></h1>            
            <h1><Link to="/accounts">accounts</Link></h1>
            <h1><Link to="/createuser">Create User</Link></h1>
          </div>
        } />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/:id" element={<Account />} />        
        <Route path="/createuser" element={<CreateUser />} />

      </Routes>
    </div>
  );
}

export default App;
