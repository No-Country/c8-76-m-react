import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function MiPerfil() {
  const { user } = useContext(DataContext);
  console.log(user);
  return (
    <div className="container text-center">
      <h2 className="py-3">Mi perfil</h2>

      <img
        className="img-fluid"
        src={user.photo}
        alt="user"
        width={400}
        height={400}
      />

      <h3 className="mt-4">Mi CBU y Alias</h3>

      <p>{user.id}</p>
    </div>
  );
}

export default MiPerfil;
