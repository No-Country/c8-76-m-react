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
  <div className={styles.principal}>
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

    {/* <Box sx={{ flexGrow: 1}}>   
      <Grid container justifyContent="center"  rowSpacing={1} columnSpacing={{ xs: 1, md: 12 }}>
        <Grid item xs={2} md={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2} md={3}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2} md={3}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2} md={3}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box> */}
</div>
  );
}