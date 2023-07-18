import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {Helmet} from 'react-helmet-async';
// @mui
import {styled} from '@mui/material/styles';
import {Link, Typography, Button, Divider, Stack, TextField,
    InputAdornment, IconButton} from '@mui/material';
import {LoadingButton} from '@mui/lab';
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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

    const loginLegacy = async () => {
        if (email === '' || password === '') {
            setAlertMsg("Complete all fields!"); return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setAlertMsg("Email of invalid format!"); return;
        }
        if (password.length <= 4) {
            setAlertMsg("Password size should be greater than 5!"); return;
        }


        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
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
        <div style={{backgroundColor: "white"}}>
            <TopBar lineColor="#001B46" backgroundColorful={"white"} fontColor="#001B46"/>

            <Helmet>
                <title> Login | Minimal UI </title>
            </Helmet>

            <StyledContent style={{minHeight: "500px"}}>
                <Typography variant="h4" gutterBottom>
                    Sign in
                </Typography>
                <Typography variant="body2" sx={{mb: 5}} style={{marginTop: 10}}>
                    Don’t have an account? {''}
                    <Link variant="subtitle2" href='./signup'>Get started</Link>
                </Typography>

                <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => login()}>
                    <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22}/>
                </Button>

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

                    <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={loginLegacy} style={{marginTop: "50px"}}>
                        Login
                    </LoadingButton>
                </Stack>
                {alertMsg.length > 0 && 
                    <Alert severity="error" style={{marginTop: "20px"}}> {alertMsg} </Alert>
                }
            </StyledContent>
        </div>
    );
}
