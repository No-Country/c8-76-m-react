import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from '../../styles/Servicios.module.css'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/personal.png'
import logo3 from '../../assets/movistar.png'
import logo4 from '../../assets/tuenti.png'
import logo5 from '../../assets/edesur.png'
import logo6 from '../../assets/metrogas.png'
import logo7 from '../../assets/aysaaa.svg'
import logo8 from '../../assets/fibertel.png'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Servicios() {
  return (
  <div className={styles.principal}>
    <h3>Servicios</h3>
    <div className={styles.secundario}>
      
      <br />
      <h3>Recarga de celulares:</h3>
      <div className={styles.iconos}>
        
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>

      <h3>Pagar servicios:</h3>
      <div className={styles.iconos}>
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img className={styles.aysa} src={logo7} alt="" />
        <img src={logo8} alt="" />
      </div>
      <h6>Servicio:</h6>
      <h6>Monto:</h6>
      <input type="" />
      <br />
      <button>Pagar Servicio</button>
      <br /><br /><br />
    </div>

  
</div>
  );
}