import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from '../../styles/Servicios.module.css'
import logo1 from '../../assets/logo1.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Servicios() {
  return (
  <div className={styles.principal} data-aos="fade-up" data-aos-delay="400">
    <h3>Servicios</h3>
    <div className={styles.secundario}>
      
      <br />
      <h3>Recarga de celulares:</h3>
      <div className={styles.iconos}>
        
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
      </div>

      <h3>Pagar servicios:</h3>
      <div className={styles.iconos}>
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
        <img src={logo1} alt="" />
      </div>
    </div>

  
</div>
  );
}