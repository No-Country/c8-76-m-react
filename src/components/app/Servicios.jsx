import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ImageListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { DataContext } from "../../context/DataContext";
import { updateUser } from "../../firebase/firebase";
import styles from "../../styles/Transferencias.module.css";

const itemCelular = [
  {
    img: "https://logodownload.org/wp-content/uploads/2014/02/claro-logo-8.png",
    title: "Claro",
  },
  {
    img: "https://seeklogo.com/images/P/personal-logo-87FDFA9A11-seeklogo.com.png",
    title: "Personal",
  },
  {
    img: "https://logodownload.org/wp-content/uploads/2018/12/movistar-logo.png",
    title: "Movistar",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Nuevo_Logo_Tuenti.svg",
    title: "Tuenti",
  },
];

const itemServicios = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Edesur_company_logo.png",
    title: "Edesur",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Metrogas_logo.svg",
    title: "Metrogas",
  },
  {
    img: "https://www.exentia.com.ar/img/clientes_16_aysa.svg",
    title: "Aysa",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Fibertel.svg",
    title: "Fibertel",
  },
];

export default function Servicios() {
  const [values, setValues] = useState("");
  const [servicio, setServicio] = useState("");

  const { user, setUser } = useContext(DataContext);

  const movimientosActuales = user.movimientos;

  const handleSubmit = (e) => {
    setServicio(e.currentTarget.alt);
    const aux = {
      ...user,
      saldo: user.saldo - values,
      movimientos: [
        ...movimientosActuales,

        {
          nombre: servicio,
          concepto: "Servicios",
          monto: values,
          fecha: new Date().toLocaleDateString(),
        },
      ],
    };

    setUser(aux);

    updateUser(aux);

 /*    e.currentTarget.reset();  */
    setValues("");

    console.log(typeof values);
  };

  const handleInputChange = (e) => {
    setValues(Number(e.currentTarget.value));
  };

  const handleClick = (e) => {
    setServicio(e.currentTarget.alt);
  };

  return (
    <form
      className={styles.contenedorPrincipal}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="pt-5">Servicios</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Recarga de Celulares
        </Typography>
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, md: 12 }}
        >
          {itemCelular.map((item) => (
            <Grid item xs={4.5} md={3} key={crypto.randomUUID()}>
              <ImageListItem>
                <img
                  className="img-header img-fluid m-2 img-servicios"
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={handleClick}
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h6"
          sx={{
           
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Pagar Servicios
        </Typography>
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, md: 12 }}
        >
          {itemServicios.map((item) => (
            <Grid item xs={4.5} md={3} key={crypto.randomUUID()}>
              <ImageListItem>
                <img
                  className="img-header img-fluid m-2 img-servicios"
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={handleClick}
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" className="py-3" height={255}>
          <FormControl fullWidth onSubmit={handleSubmit}>
            <StepLabel className="py-3">
              <h5>Servicio: {servicio}</h5>{" "}
            </StepLabel>
            <TextField
              value={values}
              label="Monto"
              type="number"
              onChange={handleInputChange}
            />
            <Button
              variant="outlined"
              className="btn w-100 my-3"
              sx={{ background: "#1A1D58", color: "white" }}
              onClick={handleSubmit}
            >
              Pagar Servicio
            </Button>
          </FormControl>
        </Grid>
      </Box>
    </form>
  );
}
