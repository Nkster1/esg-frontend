import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// @mui
import {Link, Stack, IconButton, InputAdornment, TextField, Checkbox} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// components
import axios from "axios";

import Iconify from '../../../components/iconify';
import {setAccessToken, setLoggedIn} from "../../../states";

// ----------------------------------------------------------------------

export default function LoginForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/token`, params);
            setAccessToken(response.data.access_token);
            setLoggedIn('true')
            navigate('/home', {replace: true});

        } catch (err) {
            console.error(err);
            alert(err)
        }
    };


    return (
        <>
            <Stack spacing={3}>
                <TextField name="email"
                           label="Email address"
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>

                <TextField
                    name="password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                <Checkbox name="remember" label="Remember me"/>
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleLogin}>
                Login
            </LoadingButton>
        </>
    );
}
