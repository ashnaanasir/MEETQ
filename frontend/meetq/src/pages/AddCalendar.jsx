import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';
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
import { DatePicker , LocalizationProvider, TimePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});

export default function AddCalendar() {
    const [calendarName, setCalendarName] = useState('');
    const [calendarDescription, setCalendarDescription] = useState('');
    const [calendarStart, setCalendarStart] = useState('');
    const [calendarEnd, setCalendarEnd] = useState('');
    const [currentContact, setCurrentContact] = useState('');  // State to store the current contact being added
    const [currentTime, setCurrentTime] = useState(dayjs());  // State to store the current time being added
    const [deadline, setDeadline] = useState('');
    const [invitedUsers, setInvitedUsers] = useState([]);
    const [contacts, setContacts] = useState([]);  // State to store contacts
    const [ownersAvailable, setOwnersAvailable] = useState([]);
    const [ownersPreferred, setOwnersPreferred] = useState([]);

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
                console.log(response.data);
                setContacts(response.data);  // Assuming the API returns an array of contacts
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
            }
        };

        fetchContacts();
    }, []);  // Empty dependency array to ensure this runs only once on component mount


    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("access_token");
         // Set the request headers to include the token
        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        };
        const data = {
            owner_id: contacts[0]['user'],  // Assuming the owner's ID is known and static, adjust as necessary
            name: calendarName,
            description: calendarDescription,
            start_date: calendarStart ? calendarStart.format("YYYY-MM-DD") : null,
            end_date: calendarEnd ? calendarEnd.format("YYYY-MM-DD") : null,
            deadline: deadline ? deadline.format("YYYY-MM-DD") : null,
            color: "blue",  // Assuming this is static, change if needed
            duration: 60,  // Assuming this is static, change if needed
            owners_available: ownersAvailable.map(time => time.format("YYYY-MM-DDTHH:mm:ss[Z]")),
            owners_preferred: ownersPreferred.map(time => time.format("YYYY-MM-DDTHH:mm:ss[Z]")),
            invited_ids: invitedUsers.map(Number)  // Assuming these are stored as strings, convert to numbers
        };
 
        console.log(JSON.stringify(data));
        try {
            const response = await axios.post(CREATE_CALENDAR_URL, data, config);

            console.log(response);
            window.location.href = "/calendar";

          } catch (error) {
            console.log(error);
          }
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box minheight='80vh' minwidth='80vw' height='auto' display="flex" flexDirection="column" justifyContent="space-around" alignItems="center"
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
                                        value={calendarStart || null}
                                        onChange={(newValue) => setCalendarStart(newValue)}
                                        renderInput={(params) => <TextField {...params} required />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="End Date"
                                        name='calendarEnd'
                                        id='calendarEnd'
                                        value={calendarEnd || null}
                                        onChange={(newValue) => setCalendarEnd(newValue)}
                                        renderInput={(params) => <TextField {...params} required />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Deadline to respond"
                                        name='deadline'
                                        id='deadline'

                                        value={deadline || null}
                                        onChange={(newValue) => setDeadline(newValue)}
                                        renderInput={(params) => <TextField {...params} required />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Contacts</Typography>
                                {contacts.map((contact) => (
                                    <Grid item xs={2} key={contact.id}>
                                        <Typography>Name: {contact.first_name}</Typography>
                                        <Typography>ID: {contact.pk}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                required
                                fullWidth
                                id="invitedUsers"
                                label="Invited Users (input their IDs)"
                                name="invitedUsers"
                                onChange={(e) => setCurrentContact(e.target.value)}
                                autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={(e) => setInvitedUsers([...invitedUsers, currentContact])}>Add</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {invitedUsers.map((contact) => (
                                    <Grid item xs={2}>
                                        <Typography>{contact}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={8}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                    required
                                    fullWidth
                                    id="ownersAvailable"
                                    label="Owner's Available Time"
                                    value={currentTime || null}
                                    onChange={(newValue) => setCurrentTime(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={(e) => setOwnersAvailable([...ownersAvailable, currentTime])}>Add</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {ownersAvailable.map((time, index) => (
                                    <Grid item xs={2} key={index}>
                                        <Typography>
                                            {time ? time.format("HH:mm") : "Invalid time"}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={8}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                    required
                                    fullWidth
                                    id="ownersPreferred"
                                    label="Owner's Preferred Time"
                                    value={currentTime || null}
                                    onChange={(newValue) => setCurrentTime(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={(e) => setOwnersPreferred([...ownersPreferred, currentTime])}>Add</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {ownersPreferred.map((time, index) => (
                                    <Grid item xs={2} key={index}>
                                        <Typography>
                                            {time ? time.format("HH:mm") : "Invalid time"}
                                        </Typography>
                                    </Grid>
                                ))}
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