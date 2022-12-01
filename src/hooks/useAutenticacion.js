import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../helpers/DbFunctions";

export const useAutenticacion = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //Ejecutar esta funcion al iniciar el componente para verificar que este autenticado:
    onAuthStateChanged(auth, handleUserStateChanged);
  }, []);

  const handleUserStateChanged = (user) => {
    if (user) {
      console.log(user.displayName);
    } else {
      console.log("nadie esta autenticado...");
    }
  };

  const handleClick = async () => {
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);

        setUser(res.user);
      } catch (error) {
        console.log(error);
      }
    };
    await signInWithGoogle(googleProvider);

    /* saveUser(user.displayName); */

    navigate("/Wallet");
  };

  return { user, handleClick };
};
