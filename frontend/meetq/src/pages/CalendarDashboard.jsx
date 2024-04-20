import { React, useState, useEffect } from "react";
import { Typography, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import CalendarCard from "../components/CalendarCard.jsx";
import { ALL_CALENDARS_URL } from "../constants/APIEndPoints.js";
import axios from 'axios';
// import { Link } from 'react-router-dom';



const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function CalendarDashBoard() {
    const [calendars, setCalendars] = useState([]);
    
    useEffect(() => {
        const fetchCalendars = async () => {
            // Fetch the token from localStorage
            const token = localStorage.getItem("access_token");
            // Set the request headers to include the token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await axios.get(ALL_CALENDARS_URL, config);
                console.log(response.data);
                setCalendars(response.data);  // Assuming the API returns an array of contacts
            } catch (error) {
                console.error('Failed to fetch Calendars', error);
            }
        };

        fetchCalendars();
    }, []);  // Empty dependency array to ensure this runs only once on component mount

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
                        {calendars.map((calendar) => (
                            <CalendarCard key={calendar.id} title={calendar.name} 
                            description={calendar.description} everyoneResponded="yes" numResponded="3" total="3" />
                        ))}

                    </Box>
                </Box>

            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
