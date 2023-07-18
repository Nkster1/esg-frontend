import React, { useState } from 'react';

import {Helmet} from "react-helmet-async";
import {styled} from "@mui/material/styles";

import axios from 'axios';

import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import {Button, Typography, Divider} from "@mui/material";

import Alert from '@mui/material/Alert';
import Iconify from '../components/iconify';
import TopBar from "./TopBar";

import Signup from '../sections/auth/signup/Signup'

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

export default function SignupPage() {
    
    const [alertMsg, setAlertMsg] = useState("");

    const register = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/signup-google`, codeResponse)
                .then((response) => console.log(response))
                .catch(err => setAlertMsg(err.response.data.detail));
        }
    });
    return (
        <div style={{ backgroundColor: "white" }}>
            <TopBar lineColor="#001B46" backgroundColorful={"white"} fontColor="#001B46"/>

            <Helmet>
                <title> Signup | Minimal UI </title>
            </Helmet>

            <StyledContent>
                <Typography variant="h4" gutterBottom style={{color: "#FB724C"}}>
                    Sign up
                </Typography>
                
                <GoogleOAuthProvider clientId="425079686292-03pl5u5lm36tljmfea8kpkaio7od04vq.apps.googleusercontent.com">
                    <Button fullWidth size="large" color="inherit" variant="outlined" style={{backgroundColor: "white"}} onClick={register}>
                        <Iconify icon="eva:google-fill" width={22} height={22}/>
                    </Button>
                </GoogleOAuthProvider>
                <Divider style={{marginTop: "20px", marginBottom: "20px"}} />

                <Signup/>

                {alertMsg.length > 0 && 
                    <Alert severity="error" style={{marginTop: "20px"}}> {alertMsg} </Alert>
                }

            </StyledContent>

        </div>
    );
}
