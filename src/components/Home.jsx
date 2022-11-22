import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

export const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (user) {
        console.log(user.displayName);
        setUser(user);
      } else {
        console.log("no hay nadie autenticado");
      }
    });
  }, []);

  /*   const handleUserStateChanged = (user) => {
    if (user) {
      console.log(user.displayName);
      setUser(user);
    } else {
      console.log("no hay nadie autenticado");
    }
  }; */

  const handleClick = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    const signInWithGoogle = async (googleProvider) => {
      try {
        const resp = await signInWithPopup(auth, googleProvider);
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    };
  };

  return (
    <div>
      {user ? (
        <h1>hola {user.displayName}</h1>
      ) : (
        <>
          <h1>Ingresa con google</h1>
          <button onClick={handleClick}>Sign in with Google</button>
        </>
      )}
    </div>
  );
};
