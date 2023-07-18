import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {Helmet} from 'react-helmet-async';
// @mui
import {styled} from '@mui/material/styles';
import {Link, Typography, Button} from '@mui/material';
import {useGoogleLogin} from '@react-oauth/google';

import axios from 'axios';
import Alert from '@mui/material/Alert';

import Iconify from '../components/iconify';
// sections
import TopBar from './TopBar';
import {setAccessToken, setLoggedIn} from "../states";


// ----------------------------------------------------------------------

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {

    const [alertMsg, setAlertMsg] = useState("");
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/login-google`, codeResponse)
                .then(response => {
                    setLoggedIn("true");
                    setAccessToken(response.data);
                    navigate('/home');
                })
                .catch(err => {
                    if (err.response === undefined) {
                        setAlertMsg("Connection Error")
                    } else {
                        setAlertMsg(err.response.data.detail)
                    }
                });
        }
    });

    return (
        <div style={{backgroundColor: "white"}}>
            <TopBar lineColor="#001B46" backgroundColorful={"white"} fontColor="#001B46"/>

            <Helmet>
                <title> Login | Minimal UI </title>
            </Helmet>

            <StyledContent style={{minHeight: "500px"}}>
                <Typography variant="h4" gutterBottom>
                    Sign in
                </Typography>
                <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => login()}>
                    <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22}/>
                </Button>
                <Typography variant="body2" sx={{mb: 5}} style={{marginTop: 10}}>
                    Don’t have an account? {''}
                    <Link variant="subtitle2" href='./signup'>Get started</Link>
                </Typography>
                {alertMsg.length > 0 && 
                    <Alert severity="error" style={{marginTop: "-20px"}}> {alertMsg} </Alert>
                }
            </StyledContent>
        </div>
    );
}
