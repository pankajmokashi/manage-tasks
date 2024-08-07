import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "../redux/actions/authActions";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={openLoginModal}>Login</button>
      )}
      {showLoginModal && (
        <LoginModal onClose={closeModal} onSignupClick={openSignupModal} />
      )}

      {showSignupModal && (
        <RegisterModal onClose={closeModal} onLoginClick={openLoginModal} />
      )}
    </nav>
  );
}

export default Header;
