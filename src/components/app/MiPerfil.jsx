import React from "react";

function MiPerfil() {
  return   <div className="container text-center">
  <h2 className="py-3">Mi perfil</h2>

  <img
    className="img-fluid"
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    alt="user"
    width={400}
    height={400}
  />

  <h3 className="mt-4">Mi CBU y Alias</h3>

  <p>{crypto.randomUUID()}</p>
</div>;
}

export default MiPerfil;
