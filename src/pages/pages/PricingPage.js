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

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <TopBar lineColor="#001B46" backgroundColorful={"white"} fontColor="#001B46"/>

      <Helmet>
        <title> Pricing Page | Minimal UI </title>
      </Helmet>

      <StyledRoot style={{marginTop: "100px", marginBottom: "150px"}}>
        <div style={{
          width: "100%",
          height: "100%",
        }}> 
          <Pricing />
        </div>
      </StyledRoot>
    </>
  );
}
