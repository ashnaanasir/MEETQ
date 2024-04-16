import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, deepOrange } from '@mui/material/colors';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import { CONTACTS_VIEW_URL, CREATE_CALENDAR_URL } from '../constants/APIEndPoints.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker , LocalizationProvider} from '@mui/x-date-pickers';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});

export default function AddCalendar() {
    const [calendarName, setCalendarName] = useState('');
    const [calendarDescription, setCalendarDescription] = useState('');
    const [calendarColor, setCalendarColor] = useState('');
    const [calendarStart, setCalendarStart] = useState('');
    const [calendarEnd, setCalendarEnd] = useState('');
    const [deadline, setDeadline] = useState('');
    const [invitedUsers, setInvitedUsers] = useState('');
    const [contacts, setContacts] = useState([]);  // State to store contacts

    useEffect(() => {
        const fetchContacts = async () => {
            // Fetch the token from localStorage
            const token = localStorage.getItem("access_token");

            // Set the request headers to include the token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await axios.get(CONTACTS_VIEW_URL, config);
                setContacts(response.data);  // Assuming the API returns an array of contacts
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
            }
        };

        fetchContacts();
    }, []);  // Empty dependency array to ensure this runs only once on component mount


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('calendarName', calendarName);
        data.append('calendarDescription', calendarDescription);
        data.append('calendarColor', calendarColor);
        data.append('calendarStart', calendarStart);
        data.append('calendarEnd', calendarEnd);
        data.append('deadline', deadline);
        data.append('invitedUsers', invitedUsers);

        console.log(data);
        // try {
        //     const response = await axios.post(CREATE_CALENDAR_URL, data);
        //     console.log(response);
        //     // TODO: Figure out how to return to the calendar view page
        //   } catch (error) {
        //     console.log(error);
        //   }
      };

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box minheight='80vh' minwidth='80vw' height='80vh' display="flex" flexDirection="column" justifyContent="space-around" alignItems="center"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto' }}>
                    <Typography variant="h4" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Add a New Calendar</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} display="flex" flexDirection="column" sx={{ mt: 3, maxWidth: "80%"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                autoComplete="Calendar Name"
                                name="calendarName"
                                required
                                fullWidth
                                onChange={(e) => setCalendarName(e.target.value)}
                                id="calendarName"
                                label="Calendar Name"
                                autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="calendarDescription"
                                label="Description"
                                name="calendarDescription"
                                onChange={(e) => setCalendarDescription(e.target.value)}
                                autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Start Date"      
                                        name='calendarStart'
                                        id='calendarStart'
                                        onChange={(e) => setCalendarStart(e.target.value)}
                                        required
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="End Date"
                                        name='calendarEnd'
                                        id='calendarEnd'
                                        onChange={(e) => setCalendarEnd(e.target.value)}
                                        required
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Deadline to respond"
                                        name='deadline'
                                        id='deadline'
                                        onChange={(e) => setDeadline(e.target.value)}
                                        required
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Add Calendar
                        </Button>
                    </Box>


                </Box>
            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}