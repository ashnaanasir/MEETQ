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
import { useParams } from 'react-router-dom';
import NavBar from "../components/navbar.jsx";
import { INVITE_RESPONSE_URL } from '../constants/APIEndPoints.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker , LocalizationProvider, TimePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});

export default function InviteeResponse() {
    const { id, invitee_id } = useParams();
    const [currentTime, setCurrentTime] = useState(dayjs());  // State to store the current time being added
    const [available_times, setAvailableTimes] = useState([]);
    const [preferred_times, setPreferredTimes] = useState([]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Fetch the token from localStorage
        const token = localStorage.getItem("access_token");
        // Set the request headers to include the token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = {
            preferred_times: preferred_times.map(time => ({ start_time: time.format("YYYY-MM-DDTHH:mm:ss[Z]") })),
            available_times: available_times.map(time => ({ start_time: time.format("YYYY-MM-DDTHH:mm:ss[Z]") })),
        };
        console.log(data);
        const url = INVITE_RESPONSE_URL.replace('<calendar_id>', id).replace('<invitee_id>', invitee_id);
        console.log(url);
        try {
            const response = await axios.post(url, data, config);
            console.log(response.data);
            window.location.href = `/`;
        } catch (error) {
            console.error('Failed to submit response', error);
        }
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box minheight='80vh' minwidth='80vw' height='auto' display="flex" flexDirection="column" justifyContent="space-around" alignItems="center"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto' }}>
                    <Typography variant="h4" align="center" gutterBottom color="primary.dark" sx={{ml: 10}}>Add Your Response!</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} display="flex" flexDirection="column" sx={{ mt: 3, maxWidth: "80%"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center" gutterBottom color="primary.dark">Add your available and preferred times</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                    required
                                    fullWidth
                                    id="available_times"
                                    label="Available Time"
                                    value={currentTime || null}
                                    onChange={(newValue) => setCurrentTime(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={(e) => setAvailableTimes([...available_times, currentTime])}>Add</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {available_times.map((time, index) => (
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
                                    id="Preferred"
                                    label="Preferred Time"
                                    value={currentTime || null}
                                    onChange={(newValue) => setCurrentTime(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={(e) => setPreferredTimes([...preferred_times, currentTime])}>Add</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {preferred_times.map((time, index) => (
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
                        Submit Response
                        </Button>
                    </Box>


                </Box>
            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}