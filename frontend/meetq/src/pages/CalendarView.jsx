import React from "react";
import { Card, CardContent, Typography, Button, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function CalendarView(props) {

    const { id } = useParams(); //gets the calendar id from the route, and uses it to fetch the calendar data from the backend
    console.log(id);


    // Placeholder for calendar data
    const calendar = {
        title: "Annual Team Meeting",
        description: "Planning the roadmap for the upcoming year.",
        startDate: "2024-01-01",
        endDate: "2024-01-05",
        deadline: "2023-12-25",
        invited: ["Alice", "Bob", "Charlie"],
        responses: 2
    };

    // Placeholder functions for button actions
    const handleSendInvites = () => console.log("Sending invites...");
    const handleEdit = () => console.log("Editing...");
    const handleDelete = () => console.log("Deleting...");

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
                                <Typography variant="h5" gutterBottom>
                                    {calendar.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {calendar.description}
                                </Typography>
                                <Typography variant="body2">
                                    Start Date: {calendar.startDate}
                                </Typography>
                                <Typography variant="body2">
                                    End Date: {calendar.endDate}
                                </Typography>
                                <Typography variant="body2">
                                    Response Deadline: {calendar.deadline}
                                </Typography>
                                <Typography variant="body2">
                                    People Invited: {calendar.invited.join(', ')}
                                </Typography>
                                <Typography variant="body2">
                                    Responses: {calendar.responses}
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item>
                                        <Button variant="contained" color="primary" onClick={handleSendInvites}>
                                            Send Invites
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary" onClick={handleEdit}>
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="error" onClick={handleDelete}>
                                            Delete
                                        </Button>
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
