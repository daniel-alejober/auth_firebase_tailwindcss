import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const NavBar = () => {
  const { signOutUser, user } = useUser();

  const handleSingOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <header>
      {user ? (
        <nav>
          <Link to="/">Inicio</Link>
          <button type="button" onClick={handleSingOut}>
            Cerrar Sesión
          </button>
        </nav>
      ) : (
        <nav>
          <Link to="/register">Register</Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
