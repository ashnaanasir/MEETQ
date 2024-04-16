// # create a react landing page with a hero section, a login/sign up button and a footer
// # the login/sign up button should redirect to the login page
// # the footer should contain the company name and the year
// # the company name should be a link to the the landing page
// # the year should be the current year
// use material ui for styling

import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Footer from "../components/footer.jsx";

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function Landing() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Typography variant="h1" align="center" gutterBottom color="primary.dark" sx={{mb: -5}}>
                <img src={require('../assets/meetQ.png')} alt="logo" style={{width: '100px', height: 'auto'}} />
            </Typography>
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center">

                <Box minheight='80vh' minwidth='80vw' height='80vh' display="flex" justifyContent="space-around" alignItems="center"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto' }}>
                    <Box sx={{textAlign: 'left'}}>
                        <Typography variant="h3" align="center" gutterBottom color="primary.dark">Welcome to MeetQ</Typography>
                        <Typography variant="h5" align="center" gutterBottom color="primary.dark" sx={{mb: 10}}>The best place to meet and connect with people</Typography>

                        <Link to={"/"}>
                            <Button variant="contained" color="primary" sx={{ m: 1}}>Log In</Button>
                        </Link>
                        <Link to={"/register"}>
                            <Button variant="outlined" color="primary">Sign Up</Button>
                        </Link>
                    </Box>
                    <Box sx={{}}>
                        <img src={require('../assets/character14.png')} alt="meeting" style={{width: '15vw', height: 'auto', objectFit: 'cover'}} />
                    </Box>
                    
                </Box>
            </Container>

            <Footer sc={{ mt: 5}} />
        </ThemeProvider>
    );
}
