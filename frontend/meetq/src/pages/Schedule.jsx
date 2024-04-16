import React from "react";
import { Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function Schedule() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>

                <Box minheight='80vh' minwidth='80vw' height='80vh' display="flex" justifyContent="space-around" alignItems="center"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto' }}>
                    <Box sx={{textAlign: 'left'}}>
                        <Typography variant="h3" align="center" gutterBottom color="primary.dark">Welcome to MeetQ</Typography>
                        <Typography variant="h5" align="center" gutterBottom color="primary.dark" sx={{mb: 10}}>The best place to meet and connect with people</Typography>

                        
                    </Box>
                    <Box sx={{}}>
                        <img src={require('../assets/character14.png')} alt="meeting" style={{width: '15vw', height: 'auto', objectFit: 'cover'}} />
                    </Box>
                    
                </Box>
            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
