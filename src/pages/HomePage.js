import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Typography, Stack, Grid, Card } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import StarIcon from "@mui/icons-material/StarBorder";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./design.css";
import TUMlogo from './TUMlogo.png';
import TechIcon from './tehnology.jpg';
import GraphIcon from './graphs.png';
import WorkFlowIcon from './workflow-ai.png'

import TopBar from "./TopBar"
import Pricing from "../components/nav-section/Pricing";
import LOGO from "./logo.png";

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  margin: 'auto',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));


const BoxStyle = {
  margin: "10px",
  backgroundColor: "white",
  height: "200px",
  width: "250px",
  padding: "10px"
};

const BoxTextStyle = {
  margin: "10px",
};

const BoxButtonStyle = {
  color: "white",
  backgroundColor: "#FB724C"
};

const PricingList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

// ----------------------------------------------------------------------

export default function() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <>
      <TopBar lineColor="white" backgroundColorful={"#001B46"} fontColor="white"/>

      <Helmet>
        <title> Homepage | ESG-Navigator </title>
      </Helmet>

      <div className="div-intro">
        <div>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <div style={{align: "center"}}>
              <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={4}>
                  <img src={LOGO} alt="LOGO" height={"117px"}/>
                </Grid>
                <Grid item xs={5}>
                  <div style={{marginTop: "15px"}}>
                    <Typography variant="h3" style={{color: "white"}} paragraph>
                      empowering your enterprise journey
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>


            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" marginTop={5}>
              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
                <h3 style={{color: "#FB724C"}}>
                  Learn about ESG
                </h3>
                <h4>Why is it important for your business?</h4>
                <Button style={BoxButtonStyle}> Start Learning </Button>
              </Box>

              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
                <h3 style={{color: "#FB724C"}}>
                  Get your ERSR report
                </h3>
                <h4> Information based on Advanced Research </h4>
                <Button style={BoxButtonStyle}> Get your report </Button>
              </Box>

              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
                <h3 style={{color: "#FB724C"}}>
                  ESG action plan
                </h3>
                <h4>Tailored for your own business</h4>
                <Button style={BoxButtonStyle}> Get your plan </Button>
              </Box>
            </Stack>
          </StyledContent>
        </div>
      </div>

      <div>
        <div style={{ textAlign: 'center', alignItems: 'center', paddingTop: "30px" }}>
          <Typography variant="h2" style={{color: "#FB724C"}} paragraph>
            Trusted by
          </Typography>
          <StyledContent sx={{alignItems: "center", position: "relative", minHeight: '70px', paddingTop: "0px"}}>
            <img src={TUMlogo} alt="nice" style={{width: "150px"}}/>
          </StyledContent>
        </div>
      </div>

      <div className="div-services">
        <div style={{ textAlign: 'center', alignItems: 'center', paddingTop: "10px" }}>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center', paddingTop: "10px" }}>
            <Typography variant="h2" style={{color: "white"}} paragraph>
              Services
            </Typography>
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" marginTop={5}>
              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="50"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z"/><rect height="2" width="15" x="2" y="4"/><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/></g></g></svg>
                <h3 style={{color: "#001B46"}}>
                  ESG Action List
                </h3>
                <h4>A complete overview</h4>
              </Box>

              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"  viewBox="0 0 24 24" width="50"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M8,17c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S8.55,17,8,17z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M8,9C7.45,9,7,8.55,7,8s0.45-1,1-1 s1,0.45,1,1S8.55,9,8,9z M14,10V4.5l5.5,5.5H14z"/></g></g></svg>
                <h3 style={{color: "#001B46"}}>
                  ERSR Reporting
                </h3>
                <h4> ... </h4>
              </Box>

              <Box sx={{ borderRadius: '15px' }} style={BoxStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="50"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21.16,7.26l-1.41-1.41L16.19,9.4l1.41,1.41C17.6,10.81,21.05,7.29,21.16,7.26z"/><rect height="5" width="2" x="11" y="3"/><path d="M6.4,10.81L7.81,9.4L4.26,5.84L2.84,7.26C2.95,7.29,6.4,10.81,6.4,10.81z"/><path d="M20,12h-5c0,1.66-1.34,3-3,3s-3-1.34-3-3H4c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-5 C22,12.9,21.1,12,20,12z"/></g></g></svg>
                <h3 style={{color: "#001B46"}}>
                  Individual ESG Consulting
                </h3>
                <h4>...</h4>
              </Box>
            </Stack>
          </StyledContent>
        </div>
      </div>

      <div style={{marginTop: "30px", marginBottom: "0px"}}>
        <Grid container >
          <Grid item xs={6}>
            <StyledContent sx={{alignItems: "center", position: "relative", minHeight: '50px', paddingTop: "0px", paddingBottom: "0px"}}>
              <img src={TechIcon} alt="Tehnology"/>
            </StyledContent>
          </Grid>
          <Grid item xs={6}>
            <StyledContent sx={{ textAlign: 'left', alignItems: 'left', minHeight: '50px', paddingBottom: "0px"}}>
              <Typography variant="h3" style={{color: "#001B46"}} paragraph>
                How it works
              </Typography>
              <Typography variant="h2" style={{color: "#FB724C"}}>
                driving success with Revolutionary Technologies
              </Typography>
              <div style={{size: "30px", fontSize: "20px", fontWeight: "bold", color: "grey"}}>
                <ol style={{listStyleType: "decimal-leading-zero"}}>
                  <li>
                    <Typography variant="h4" style={{color: "black", margin:"0px"}} paragraph>
                      Industry-Leading Reporting Frameworks
                    </Typography>
                    <p style={{color: "grey", margin: "0px", marginBottom: "10px", fontWeight: "normal"}}>
                      Our robust frameworks are designed to seamlessly interpret data from diverse
                        sources, offering unparalleled insights into ESG compliance. </p>
                  </li>
                  <li>
                    <Typography variant="h4" style={{color: "black", margin:"0px"}} paragraph>
                      Vector Databases: Your Information, Hypercharged 
                    </Typography>
                    <p style={{color: "grey", margin: "0px", marginBottom: "10px", fontWeight: "normal"}}>
                      Experience the benefits of accelerated data operations and set your enterprise on
                      the fast track to success. </p>
                  </li>
                  <li>
                    <Typography variant="h4" style={{color: "black", margin:"0px"}} paragraph>
                      Unlocking Optimal Results  with Machine Learning
                    </Typography>
                    <p style={{color: "grey", margin: "0px", marginBottom: "10px", fontWeight: "normal"}}>
                      Our solutions uses Advanced machine learning algorithms to process, analyze, and interpret vast volumes of ESG data </p>
                  </li>
                </ol>
              </div>
            </StyledContent>
          </Grid>
        </Grid>
      </div>

      <div className="div-mission">
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center', paddingTop: "100px" }}>
          <Typography variant="h3" style={{color: "#FB724C"}} paragraph>
            Mission
          </Typography>
          <Typography variant="h2" style={{color: "white"}} paragraph>
            Our first principle
          </Typography>

          <Grid container>
            <Grid item xs={7}>
              <div style={{paddingLeft: "20%", paddingTop: "100px"}}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{fontSize: "20px", fontWeight: "bold"}}>Completely Responsive</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography style={{fontSize: "20px", fontWeight: "bold"}}>Free Lifetime Updates</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                  <Typography style={{fontSize: "20px", fontWeight: "bold"}}>Excellent Customer Support</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    color
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                  <Typography style={{fontSize: "20px", fontWeight: "bold"}}>User-Friendly Services</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={5}>
              <StyledContent sx={{alignItems: "center", position: "relative", minHeight: '50px', paddingTop: "0px", paddingBottom: "0px"}}>
                <img src={GraphIcon} width="60%" alt="Tehnology"/>
              </StyledContent>
            </Grid>
          </Grid>
        </StyledContent>
      </div>

      <div style={{marginTop: "30px", marginBottom: "0px"}}>
        <StyledContent sx={{alignItems: "center", position: "relative", minHeight: '50px'}}>
          <Typography variant="h4" style={{color: "black", margin:"0px"}} paragraph>
            Work Process
          </Typography>
          <Typography variant="h3" style={{color: "#FB724C", margin:"0px"}} paragraph>
            How to work with our application
          </Typography>
          <StyledContent sx={{alignItems: "center", position: "relative",
                minHeight: '50px', paddingTop: "0px", paddingBottom: "0px", marginTop: "10px",
                paddingLeft: '90px'}}>
              <img src={WorkFlowIcon} alt="Tehnology" width="80%"/>
          </StyledContent>
        </StyledContent>
      </div>

      <div className="div-pricing ">
        <StyledContent sx={{alignItems: "center", position: "relative", minHeight: '50px'}}>
          <Typography variant="h4" style={{color: "white", margin:"0px"}} paragraph>
            Pricing Table
          </Typography>
          <Typography variant="h3" style={{color: "#001B46", margin:"0px"}} paragraph>
            Choose your pricing plan
          </Typography>
          <Pricing />
        </StyledContent>
      </div>
    </>
  );
}
