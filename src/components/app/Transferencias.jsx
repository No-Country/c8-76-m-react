import { TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { saveUser, updateUser } from "../../firebase/firebase";
import useForm from "../../hooks/useForm";
import styles from "../../styles/Transferencias.module.css";

const Transferencias = () => {
  const { values, handleInputChange } = useForm();

  const { user, setUser } = useContext(DataContext);

  const movimientosActuales = user.movimientos;

  const handleClick = () => {
    const aux = {
      ...user,
      saldo: user.saldo - values.monto,
      movimientos: [
        ...movimientosActuales,

        { ...values, fecha: new Date().toLocaleDateString() },
      ],
    };


    setUser(aux);

    updateUser(user.id, aux);

    console.log("entro");
  };

  return (
    <div className={styles.contenedorPrincipal} data-aos="fade-up" data-aos-delay="400">
      <TextField
        name="nombre"
        onChange={handleInputChange}
        id="outlined-basic"
        fullWidth
        label="CBU o Alias"
        variant="outlined"
      />
      <TextField
        name="monto"
        onChange={handleInputChange}
        type={"number"}
        id="outlined-basic"
        fullWidth
        label="monto"
        variant="outlined"
      />
      <TextField
        name="concepto"
        onChange={handleInputChange}
        id="outlined-basic"
        fullWidth
        label="concepto"
        variant="outlined"
      />
      <button onClick={handleClick} className={styles.button}>
        Enviar
      </button>
    </div>
  );

};

export default Transferencias;
