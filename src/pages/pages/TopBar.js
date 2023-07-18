import * as React from 'react';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import {isLoggedIn, setLoggedIn} from "../states";

function ResponsiveAppBar({ lineColor, backgroundColorful, fontColor }) {

  const handleLogout = () => {
    setLoggedIn("false");
    console.log("LOGGEDOUT");
  }


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
            <Grid item xs={9}>
              <Typography
                variant="h3"
              >
                <a style={{textDecoration: "none", color: fontColor}} href="./home"> ESG Pilot </a>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button style={{color: fontColor, height: "50px"}}> Contact </Button>
            </Grid>
            <Grid item xs={1}>
              <Button style={{color: fontColor, height: "50px"}} href="./pricing"> Pricing </Button>
            </Grid>
            <Grid item xs={1}>
              {
                 isLoggedIn()
                     ? <Button href="./home" onClick={handleLogout}> <Avatar><AssignmentIcon/></Avatar> </Button>
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
