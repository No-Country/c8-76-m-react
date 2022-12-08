import React from "react";
import style from "../../styles/FooterLandingPage.module.css";
import logo from "../../assets/logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Box } from "@mui/material";

export const FooterLandingPage = () => {
  return (
    <footer className={style.general}>
      <Box className={style.container} data-aos="fade-up">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Quienes Somos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Somos un grupo de desarrolladores FrontEnd con mucha pasión por lo
              que hacemos, con muchas ganas de aprender y demostrar nuestras
              habilidades. Somos: Diego, Mariana, Melany y Jaime.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Que es Country Wallet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Country Wallet es una de las billeteras virtuales más fáciles de
              utilizar, es la billetera perfecta para las personas que necesiten
              realizar transacciones de manera rápida, inmediata, sencilla y
              sobre todo sin coste alguno.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Como obtengo Country Wallet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ingresa desde donde quieras, de cualquier dispositivo, en
              cualquier lugar, a nuestra página de Country Wallet e ingresa con
              tu usuario de Google para que empieces a disfrutar de los
              beneficios de tu Country Wallet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Grid container>
        <Grid item xs={6}>
          {/* En xs se mostraran 12 columnas */}
          <img src={logo} alt="logo" className={style.logo} />
        </Grid>
        <Grid item xs={6} className={style.flex}>
          <p className={style.textFooter}>
            Hecho con ❤ por: Jaime, Mariana, Melany y Diego.
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterLandingPage;
