import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {Helmet} from "react-helmet-async";
import {styled} from "@mui/material/styles";

import axios from 'axios';

import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import {Button, Typography, Divider, Stack, TextField, InputAdornment,
        IconButton} from "@mui/material";
import {LoadingButton} from '@mui/lab';

import Alert from '@mui/material/Alert';
import Iconify from '../components/iconify';
import TopBar from "./TopBar";
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

export default function SignupPage() {
    
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [alertMsg, setAlertMsg] = useState("");

    const register = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/signup-google`, codeResponse)
                .then((response) => console.log(response))
                .catch(err => setAlertMsg(err.response.data.detail));
        }
    });


    const registerLegacy = async () => {
        if (email === '' || password === '' || confirmPassword === '') {
            setAlertMsg("Complete all fields!"); return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setAlertMsg("Email of invalid format!"); return;
        }
        if (password !== confirmPassword) {
            setAlertMsg("Passwords do not match!"); return;
        }
        if (password.length <= 4) {
            setAlertMsg("Password size should be greater than 5!"); return;
        }


        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
                email,
                password
            })
            .then((response) => {
                setLoggedIn("true");
                console.log(response)
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
    };
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

                <Stack spacing={3}>
                    <TextField
                        name="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        name="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        style={{height: "20px", marginBottom: "10px"}}
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={registerLegacy} style={{marginTop: "50px"}}>
                        Signup
                    </LoadingButton>
                </Stack>

                {alertMsg.length > 0 && 
                    <Alert severity="error" style={{marginTop: "20px"}}> {alertMsg} </Alert>
                }

            </StyledContent>

        </div>
    );
}
