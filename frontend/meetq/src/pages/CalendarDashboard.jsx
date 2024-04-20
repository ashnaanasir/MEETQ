import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import CalendarCard from "../components/CalendarCard.jsx";
// import axios from 'axios';
// import { Link } from 'react-router-dom';



const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function CalendarDashBoard() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box display="flex" justifyContent="space-around" alignItems="top" flexDirection="column"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto', minHeight:'80vh'}}>
                    <Box display="flex" justifyContent="space-between" sx={{height: '50px', width: '100%'}}>
                        <Typography variant="h3" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Your Calendars</Typography>
                        <Button variant="contained" color="primary" href="/calendar/add">
                            <AddIcon />
                            Add Calendar</Button>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <CalendarCard title="Calendar 1" description="This is a description of calendar 1" everyoneResponded="Yes" numResponded="20" total="20"/>
                        <CalendarCard title="Calendar 2" description="This is a description of calendar 1" everyoneResponded="No" numResponded="16" total="20"/>
                        <CalendarCard title="Calendar 3" description="This is a description of calendar 1" everyoneResponded="Yes" numResponded="16" total="20"/>
                        <CalendarCard title="Calendar 4" description="This is a description of calendar 1" everyoneResponded="No" numResponded="16" total="20"/>
                        <CalendarCard title="Calendar 5" description="This is a description of calendar 1" everyoneResponded="Yes" numResponded="16" total="20"/>
                        <CalendarCard title="Calendar 6" description="This is a description of calendar 1" everyoneResponded="No" numResponded="16" total="20"/>

                    </Box>
                </Box>

            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
