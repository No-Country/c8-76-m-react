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

  const handleClick = (e) => {
    e.preventDefault();
    const aux = {
      ...user,
      saldo: user.saldo - values.monto,
      movimientos: [
        ...movimientosActuales,

        { ...values, fecha: new Date().toLocaleDateString() },
      ],
    };

    setUser(aux);

    updateUser(aux);
    console.log("entrooo");
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleClick}
      className={styles.contenedorPrincipal}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2>Transferencias</h2>
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
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default Transferencias;
