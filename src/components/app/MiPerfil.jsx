import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function MiPerfil() {
  const { user } = useContext(DataContext);
  console.log(user);
  return (
    <div className="container text-center" data-aos="fade-up" data-aos-delay="400">
      <h2 className="py-3">Mi perfil</h2>

      <img
        className="img-fluid"
        src={user.photo} //https://cdn-icons-png.flaticon.com/512/149/149071.png
        alt="user"
        width={400}
        height={400}
        onError={() =>
          (document.querySelector("img").src =
            "https://cdn-icons-png.flaticon.com/512/149/149071.png")
        }
      />
      <h3 className="mt-2">{user.name}</h3>
      <h3 className="mt-2">Mi CBU y Alias</h3>

      <p>{user.id}</p>
    </div>
  );
}

export default MiPerfil;
