import React from "react";
import styles from "../../styles/Transferencias.module.css";

const Transferencias = () => {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorSecundario}>
        <h3>Transferencias</h3>
        <br />
        <h6>Ingrese el CBU o Alias:</h6>
        <input type="text" />
        <br />
        <h6>Monto:</h6>
        <input type="text" />
        <br />
        <h6>Concepto:</h6>
        <input type="text" name="" id="" />
        <br />
        <button>Enviar</button>
      </div>
    </div>
  );
  /* los valores del input en un estado
      setUser({...user, movimientos[...user.movimientos, {
        nombre: input.value,
        descripcion: input.value,
        fecha: input.value,
        monto: input.value
      }]})

      saveUser({...user, movimientos[...user.movimientos, {
        nombre: input.value,
        descripcion: input.value,
        fecha: input.value,
        monto: input.value
      }]})


  
  
  */
};

export default Transferencias;
