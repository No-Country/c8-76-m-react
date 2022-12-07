import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, getInfoUser, searchUserById } from "../firebase/firebase";

export const DataContext = createContext();

const initialState = {
  name: "",
  saldo: "",
  email: "",
  photo: "",
  movimientos: [],
};

export const DataProvider = ({ children }) => {
  useEffect(() => {
    //Verifica cada vez que se recarga el componente, que el usuario este autenticado, si lo esta, vuelve a llenar el context con la informacion
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUser = await searchUserById(user.uid);
        setUser(currentUser[0]);
      } else {
        console.log("no hay nadie autenticado");
      }
    });
  }, []);

  getInfoUser();

  const [user, setUser] = useState(initialState);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};
