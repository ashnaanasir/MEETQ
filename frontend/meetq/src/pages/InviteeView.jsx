import { React, useState, useEffect } from "react";
import { Typography, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import CalendarCard from "../components/CalendarCard.jsx";
import { GET_INVITEE_URL, SEND_INVITE_URL} from "../constants/APIEndPoints.js";
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';



const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function InviteeView(props) {

    const {id, invitee_id} = useParams();
    const [invitee, setInvitee] = useState([]);
    console.log(id, invitee_id);
    
    useEffect(() => {
        const fetchInvitee = async () => {
            // Fetch the token from localStorage
            const token = localStorage.getItem("access_token");
            // Set the request headers to include the token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            console.log(id, invitee_id);
            const url = GET_INVITEE_URL.replace('<calendar_id>', id).replace('<invitee_id>', invitee_id);
            console.log(url);
            try {
                const response = await axios.get(url, config);
                console.log(response.data)
                const fetchedInvitee = response.data; // Ensure this is an object
                setInvitee(fetchedInvitee || {}); 


            } catch (error) {
                console.error('Failed to fetch Invitee', error);
            }
        };

        fetchInvitee();
    }, [id, invitee_id]);  // Empty dependency array to ensure this runs only once on component mount

    // const getInvitees = async (id) => {
    //     // Fetch the token from localStorage
    //     const token = localStorage.getItem("access_token");
    //     // Set the request headers to include the token
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };
    //     const url = GET_CALENDAR_INVITEES_URL.replace('<calendar_id>', id);

    //     try {
    //         const response = await axios.get(url, config);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Failed to fetch Calendars', error);
    //     }
    // };

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <Box display="flex" justifyContent="space-around" alignItems="top" flexDirection="column"
                    sx={{bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300, mx: 'auto', minHeight:'80vh'}}>
                    
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Box sx={{width: '100%', mt: 2}}>
                        <Typography variant="h4" align="center" gutterBottom color="primary.dark">{invitee.contact ? invitee.contact.name : 'Loading...'}</Typography>
                        <Typography variant="h6" align="center" gutterBottom color="primary.dark">{invitee.contact ? invitee.contact.email : 'Loading...'}</Typography>

                        <Typography variant="h6" align="center" gutterBottom color="primary.dark">{invitee.has_responded ? 'Has responded!': 'Not Responded yet'}</Typography>
                        {/* {invitee.has_responded ? 
                            //parse over invite available times and add them here
                        <Typography variant="h6" align="center" gutterBottom color="primary.dark">Available Times: {invitee.available_times.map(time => time)}</Typography>
                        : null 
                      } */}

                        </Box>
                        <Button variant="contained" color="primary" href={SEND_INVITE_URL.replace('<calendar_id>', id).replace('<invitee_id>', invitee_id)} onClick={console.log(id)}>
                          Send Invite
                        </Button>
                    </Box>
                </Box>

            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
