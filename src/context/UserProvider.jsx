import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cargando, setCargando] = useState(true);

  //*Esta funcion sirve para mostrar los datos del usuario solo cuando ya inicio sesion, nos regresa el objeto user donde se encuentra toda la informacion del usuario
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, photoURL, uid, displayName } = user;
        setUser({ email, photoURL, uid, displayName });
      } else {
        setUser(null);
      }
      setCargando(false);
    });
    unSubscribe();
  }, []);

  //*Registrar nuevo usuario
  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //*Logear usuario ya registrado
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //*Cerrar sesion
  const signOutUser = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{ user, cargando, registerUser, loginUser, signOutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
