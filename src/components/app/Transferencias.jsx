import { Button, TextField } from "@mui/material";
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

    e.currentTarget.reset();

    console.log("entro");
  };

  return (
    <form onSubmit={handleClick} className={styles.contenedorPrincipal} data-aos="fade-up" data-aos-delay="400">
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
      <Button
        variant="outlined"
        className="btn w-100 my-3"
        sx={{ background: "#1A1D58", color: "white" }}
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </form>
  );

};

export default Transferencias;
