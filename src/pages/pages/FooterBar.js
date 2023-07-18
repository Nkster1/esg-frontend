import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        marginTop: "100px",
        paddingBottom: "70px",
        paddingTop: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="left">
          <Grid item xs={8}>
            <Typography color="#FB724C" variant="h4">
              ESG Pilot
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography> 
          </Grid>
          <Grid item xs={2}>
            <Typography color="black" variant="h6">
              Company
            </Typography>
            <Typography color="#FB724C" variant="subtitle1">
              About Us
            </Typography>
            <Typography variant="subtitle1">
              Our Team
            </Typography> 
          </Grid>
          <Grid item xs={2}>
            <Typography color="black" variant="h6">
              Support
            </Typography>
            <Typography variant="subtitle1">
              FAQ
            </Typography> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};