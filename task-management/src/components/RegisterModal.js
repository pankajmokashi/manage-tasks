import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";

function RegisterModal({ onClose, onLoginClick }) {
  const [showLogin, setShowLogin] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(register(credentials));
    onClose();
  };

  return (
    <div className="modal">
      <div className="container">
        <h2>Register</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <div>
          Already have an account{" "}
          <span className="login-link" onClick={onLoginClick}>
            Login
          </span>
          {showLogin && <RegisterModal onClose={setShowLogin(false)} />}
        </div>
        <div>
          <button onClick={handleSignup}>Signup</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
