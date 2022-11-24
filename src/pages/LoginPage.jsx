import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}>
      <div className="container2">
        <div className="header-h2">
          <h2>Login User</h2>
        </div>
        <div className="username">
          <input
            className="username-inp"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            className="password-inp"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-2">
          <button
            className="btn-login"
            onClick={() => login(username, password)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
