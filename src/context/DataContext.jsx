import { createContext, useState } from "react";

export const DataContext = createContext();

export const initialState = {
  name: "",
  saldo: "",
  email: "",
  photo: "",
  movimientos: [],
};

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};
