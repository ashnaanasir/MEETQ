import {React, useState} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, deepOrange } from '@mui/material/colors';
import Footer from "../components/footer.jsx";
import { LOGIN_URL } from '../constants/APIEndPoints.js';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        console.log({
          username: data.get('username'),
          password: data.get('password'),
        });
        try {
            const response = await axios.post(LOGIN_URL, data);
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            window.location.href = "/dashboard";
          } catch (error) {
            if ((error.response && error.response.data) || error.response.data.detail) {
                const { username, password } = error.response.data;
                setUsername(username ? username[0] : '');
                setPassword(password ? password[0] : '');
            }
          }
      };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Typography variant="h1" align="center" gutterBottom color="primary.dark" sx={{mb: -5}}>
                    <img src={require('../assets/meetQ.png')} alt="logo" style={{width: '100px', height: 'auto'}} />
                </Typography>
                <CssBaseline />
                <Box sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                }} >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FaceIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                            <Grid item>
                                <Link to="/register">
                                {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            <Footer sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
    );
}