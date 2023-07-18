import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import {isLoggedIn, setLoggedIn} from "../states";
import LOGO from "./logo.png";

function ResponsiveAppBar({ lineColor, backgroundColorful, fontColor }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn("false");
    navigate('/home');
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDashboard = () => {
    setAnchorEl(null);
    navigate('/dashboard');
  };


  return (
    <div>
      <div style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "10px",
        backgroundColor: backgroundColorful,
      }}>
        <Toolbar style={{
          backgroundColor: backgroundColorful,
          borderBottomStyle: "solid",
          borderBottomColor: lineColor,
          borderBottomWidth: "1px"
        }}>
          <Grid container alignItems="left">
            <Grid item xs={8}>
                <a style={{textDecoration: "none", color: fontColor}} href="./home">
                  <img src={LOGO} alt="LOGO" height={"50px"}/>
                </a>
            </Grid>
            <Grid item xs={1}>
              <Button style={{color: fontColor, height: "50px"}}> Contact </Button>
            </Grid>
            <Grid item xs={1}>
              <Button style={{color: fontColor, height: "50px"}} href="./pricing"> Pricing </Button>
            </Grid>
            {
                  isLoggedIn() ?
                  <Grid item xs={1}>
                    <Button style={{color: fontColor, height: "50px", backgroundColor:"#FB724C"}} href="./addcompany"> Add Company </Button>
                  </Grid> : <Grid item xs={1}/>
            } 
            <Grid item xs={1}>
              {
                 isLoggedIn()
                     ?
                      <>
                        <Button onClick={handleClick}> <Avatar style={{backgroundColor: "#FB724C"}}><AccountBoxIcon /></Avatar> </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleLogout} href="./home" >Logout</MenuItem>
                        </Menu>
                      </>
                     : <Button style={{backgroundColor: "#FB724C", color: "white", height: "50px",
                       width: "90px"}} href="./login"> Login </Button>
              }

            </Grid>
          </Grid>
        </Toolbar>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
