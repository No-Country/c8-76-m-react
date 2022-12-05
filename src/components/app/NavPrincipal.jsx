import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import s from "../../styles/NavsWallet.module.css"


export default function NavPrincipal() {
  return ( 
  <div className={s.navbottom}>
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center"  rowSpacing={1} columnSpacing={{ xs: 1, md: 2 }}>
        <Grid item xs={2.3} md={2} className={s.item}>
          <Tooltip title="Home">
            <IconButton>
              <Link to="/Wallet">
                <HomeIcon sx={{ fontSize: 40, color: "#1A1D58" }} />
              </Link>
            </IconButton>
          </Tooltip>
          </Grid>
          <Grid item xs={2.3} md={2} className={s.item}>
          <Tooltip title="Transferencias">
            <IconButton>
              <Link to="Transferencias">
                <TransferWithinAStationIcon
                  sx={{ fontSize: 40, color: "#1A1D58" }}
                />
              </Link>
            </IconButton>
          </Tooltip>
          </Grid>
          <Grid item xs={2.3} md={2} className={s.item}>
          <Tooltip title="Servicios">
            <IconButton>
              <Link to="Servicios">
                <PaymentsIcon sx={{ fontSize: 40, color: "#1A1D58" }} />
              </Link>
            </IconButton>
          </Tooltip>
          </Grid>
          <Grid item xs={2.3} md={2} className={s.item}>
          <Tooltip title="Perfil">
            <IconButton>
              <Link to="MiPerfil">
                <PersonIcon sx={{ fontSize: 40, color: "#1A1D58" }} />
              </Link>
            </IconButton>
          </Tooltip>
          </Grid>
        </Grid>
    </Box>
  </div>
  );
}
