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
import Home from "./Home";

export default function NavPrincipal() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Home">
            <IconButton>
              <Link to="/Home">
                <HomeIcon sx={{ fontSize: 40, color: "#1A1D58" }} />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Transferencias">
            <IconButton>
              <Link to="Transferencias">
                <TransferWithinAStationIcon
                  sx={{ fontSize: 40, color: "#1A1D58" }}
                />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Servicios">
            <IconButton>
              <Link to="Servicios">
                <PaymentsIcon sx={{ fontSize: 40, color: "#1A1D58" }} />
              </Link>
            </IconButton>
          </Tooltip>
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
  );
}
