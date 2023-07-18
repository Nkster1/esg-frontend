import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components

import TopBar from './TopBar';
import Pricing from "../components/nav-section/Pricing";

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


// ----------------------------------------------------------------------

export default function Dashboard() {
  const mdUp = useResponsive('up', 'md');

  return (
    <div style={{ backgroundColor: "white", paddingBottom: "200px"}}>
      <TopBar lineColor="#001B46" backgroundColorful={"white"} fontColor="#001B46"/>

      <Helmet>
        <title> Pricing Page | ESG Navigator </title>
      </Helmet>

      <div style={{height: "100%", backgroundColor: "white"}}>
        <StyledRoot style={{marginTop: "100px"}}>
          <div style={{
            width: "100%",
            height: "100%",
          }}> 
            <Pricing />
          </div>
        </StyledRoot>
      </div>
    </div>
  );
}
