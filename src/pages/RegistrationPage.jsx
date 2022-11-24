import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/registrationPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}>
      <div className="container">
        <div id="h2">
          <h2>RegistrationPage</h2>
        </div>
        <div className="username">
          <input
            id="username-inp"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            id="password-inp"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button
            id="register-btn"
            onClick={() => register(username, password)}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
