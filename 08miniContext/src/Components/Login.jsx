import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        
        onClick={(e) => {
          e.preventDefault();
          console.log({ username, password });
            setUser({ username, password });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
