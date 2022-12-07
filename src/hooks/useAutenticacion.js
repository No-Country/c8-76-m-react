import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, validateUserExists } from "../firebase/firebase";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const useAutenticacion = () => {
  const { user, setUser } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);

        setUser({
          id: res.user.uid,
          name: res.user.displayName,
          saldo: 1000,
          photo: res.user.photoURL,
          email: res.user.email,
          movimientos: [],
        });
        validateUserExists({
          id: res.user.uid,
          name: res.user.displayName,
          saldo: 1000,
          photo: res.user.photoURL,
          email: res.user.email,
          movimientos: [],
        });
      } catch (error) {
        console.log(error);
      }
    };
    await signInWithGoogle(googleProvider);

    navigate("/Wallet");
  };

  return { handleClick };
};
