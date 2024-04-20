import {React, useEffect, useState} from "react";
import { Card, CardContent, Typography, Button, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { Link, useParams } from 'react-router-dom';
import Footer from "../components/footer.jsx";
import { SEND_INVITE_URL, EDIT_CALENDAR_URL , CALENDAR_DETAILS_URL, GET_CALENDAR_INVITEES_URL} from "../constants/APIEndPoints.js";
import NavBar from "../components/navbar.jsx";
import axios from 'axios';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function CalendarView(props) {
    const [calendar, setCalendar] = useState([]);
    const [invitees, setInvitees] = useState([]);
// 
    const { id } = useParams(); //gets the calendar id from the route, and uses it to fetch the calendar data from the backend
    

    useEffect(() => {
        
        const fetchCalendar = async () => {
            
        // Fetch the token from localStorage
            const token = localStorage.getItem("access_token");
            // Set the request headers to include the token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await axios.get(CALENDAR_DETAILS_URL.replace('<calendar_id>', id), config);
                const calendardata = response.data;
                console.log(calendardata.id);
                const responsesinvitee =  await axios.get(GET_CALENDAR_INVITEES_URL.replace('<calendar_id>', calendardata.id), config);
                const invitees = responsesinvitee.data;

                setInvitees(invitees);
                setCalendar(calendardata);
                
            } catch (error) {
                console.error('Failed to fetch Calendar', error);
            }
        };
        fetchCalendar();
    }, []);

    // Placeholder functions for button action
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box display="flex" justifyContent="space-around" alignItems="top" flexDirection="column"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto', minHeight:'80vh'}}>
                    <Box display="flex" justifyContent="space-between" sx={{height: '50px', width: '100%'}}>
                        <Typography variant="h3" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Your Calendar</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{minWidth: "80%"}}>
                       <Card raised sx={{ width: '90%', m: 2 }}>
                            <CardContent>
                                <Typography variant="h2" gutterBottom>
                                    {calendar.name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {calendar.description}
                                </Typography>
                                <Typography variant="body2">
                                    Start Date: {calendar.start_date}
                                </Typography>
                                <Typography variant="body2">
                                    End Date: {calendar.end_date}
                                </Typography>
                                <Typography variant="body2">
                                    Response Deadline: {calendar.deadline}
                                </Typography>
                                <Typography variant="body2">
                                    Responses: {invitees.filter(invitee => invitee.has_responded).length}
                                </Typography>
                                <Typography variant="body2">
                                    Total: {invitees.length} invitees
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    {invitees.map((invitee) => (
                                    <><Grid item>
                                        <Typography variant="body2">
                                            {invitee.contact.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {invitee.has_responded ? "Responded" : "Not Responded"}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to={`/calendar/${calendar.id}/invitees/${invitee.id}/send-invite`}>
                                            <Button variant="contained" color="primary" disabled={invitee.has_responded}>
                                                Send Invite
                                            </Button>
                                        </Link>
                                    </Grid></>
                                    ))}
                                

                                    <Grid item>
                                    <Link to={`/calendar/${calendar.id}/edit`}>
                                        <Button variant="contained" color="secondary">
                                            Edit
                                        </Button>
                                    </Link>
                                    </Grid>
                                    
                                </Grid>

                            </CardContent>
                        </Card>

                    </Box>
                </Box>

            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
