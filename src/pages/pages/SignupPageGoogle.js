import {Helmet} from "react-helmet-async";
import {styled} from "@mui/material/styles";

import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import {Button, Typography, Divider} from "@mui/material";

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

export default function SignupPageGoogle() {
    const register = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
    });
    return (
        <Button fullWidth size="large" color="inherit" variant="outlined" style={{backgroundColor: "white"}} onClick={register}>
            <Iconify icon="eva:google-fill" width={22} height={22}/>
        </Button>
    );
}
