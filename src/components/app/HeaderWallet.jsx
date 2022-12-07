import * as React from "react";
import { useState } from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import s from "../../styles/NavsWallet.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { DataContext, initialState } from "../../context/DataContext";
import { useContext } from "react";


export default function HeaderWallet() {
    const [anchorElUser, setAnchorElUser] = useState(null);  
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);    }; 

  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const navigate = useNavigate();
    const { setUser } = useContext(DataContext);

    const handleSignOut = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
      setUser(initialState);
      console.log("cerró sesion");
    }).catch((error) => {
      console.log(error)
    })
  };

  return ( 
  <div className={s.navtop}>
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center"  rowSpacing={1} columnSpacing={{ xs: 12, md: 2 }}>
        <Grid item xs={6} md={6}>
          <Tooltip title="Country Wallet">
            <IconButton>
              <Link to="/Wallet">
             <AccountBalanceWalletIcon sx={{ fontSize: 30, color: "#1A1D58" }}/>
              </Link>
            </IconButton>
          </Tooltip>
          </Grid>

          <Grid item xs={6} md={6}>          
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
               <ExitToAppIcon sx={{ fontSize: 30, color: "#1A1D58" }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleSignOut}>Cerrar Sesion</MenuItem>
            </Menu>
          </Box>      
          </Grid>         
        </Grid>
    </Box>
  </div>
  );
}