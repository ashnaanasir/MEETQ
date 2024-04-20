import {React, useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Grid, Container, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import axios from 'axios';
import { EDIT_CALENDAR_URL } from "../constants/APIEndPoints";
import { Link } from 'react-router-dom';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function CalendarEditView(props) {

    const { id } = useParams();
    
    const [calendar, setCalendar] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        deadline: "",
        invited: [],
        responses: 0
    });

    // Load initial data
    useEffect(() => {
        // Here you should fetch the calendar details from an API
        // Simulating fetching data:
        setCalendar({
            title: "Annual Team Meeting",
            description: "Planning the roadmap for the upcoming year.",
            startDate: "2024-01-01",
            endDate: "2024-01-05",
            deadline: "2023-12-25",
            invited: ["Alice", "Bob", "Charlie"],
            responses: 2
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCalendar(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(EDIT_CALENDAR_URL(id), calendar);
            console.log(response.data);
            window.location.href = "/calendar"; // Adjust the route as needed
        } catch (error) {
            console.error('Error updating calendar:', error);
            window.location.href = "/calendar"; // Adjust the route as needed
        }
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box display="flex" justifyContent="space-around" alignItems="top" flexDirection="column"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto', minHeight:'80vh'}}>
                    <Typography variant="h3" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Edit Your Calendar</Typography>
                    <Card raised sx={{ width: '100%', m: 2 }}>
                        <CardContent>
                            <TextField
                                fullWidth
                                label="Title"
                                name="title"
                                value={calendar.title}
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={calendar.description}
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <TextField
                                fullWidth
                                type="date"
                                label="Start Date"
                                name="startDate"
                                value={calendar.startDate}
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                type="date"
                                label="End Date"
                                name="endDate"
                                value={calendar.endDate}
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                type="date"
                                label="Response Deadline"
                                name="deadline"
                                value={calendar.deadline}
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Link to="/calendar">
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                    </Box>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}