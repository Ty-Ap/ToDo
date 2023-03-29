import { AuthContext } from "../../Context/Auth";
import { useContext, useState } from "react";

const AuthMethod =()=>{
  const {login, logout, isLoggedIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthSubmit = (e)=>{
    e.preventDefault();
    login(username, password);

    e.target.reset();
  }

  return (
    <>
    <div>
      <form onSubmit={handleAuthSubmit}>
        <label>username: 
          <input onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label >password: 
          <input onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <button type='submit'>Login</button>
        
      </form>

      <button onCLick={logout}>Logout</button>
    </div>
    </>
  )
}


export default AuthMethod;