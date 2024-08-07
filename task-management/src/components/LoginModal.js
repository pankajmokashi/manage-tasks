import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import RegisterModal from "./RegisterModal";

function LoginModal({ onClose, onSignupClick }) {
  const [showRegister, setShowRegister] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login(credentials));
    onClose();
  };

  return (
    <div className="modal">
      <div className="container">
        <h2>Login</h2>
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
          <button onClick={handleLogin}>Login</button>
          <button onClick={onClose}>Cancel</button>
        </div>
        <div>
          Don't have account{" "}
          <span className="login-link" onClick={onSignupClick}>
            Register
          </span>
          {showRegister && <RegisterModal onClose={setShowRegister(false)} />}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
