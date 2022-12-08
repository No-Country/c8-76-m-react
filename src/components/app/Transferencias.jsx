import React from "react";
import styles from "../../styles/Transferencias.module.css";


const Transferencias = () => {
  return <div className={styles.contenedorPrincipal} data-aos="fade-up" >

    <div className={styles.contenedorSecundario} >

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

  </div>;
};

export default Transferencias;
