import React from "react";
import { Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import { Link } from "react-router-dom";

import './output.css';

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
                <div id="content" class="bg-white min-h-full grow flex flex-col items-center">
                    <div id="title">
                        <h1 class="text-4xl font-bold text-center pt-4 text-purple-dk">YOUR SCHEDULE</h1>
                    </div>
                    <Link to="/schedule/select">
                        <div id="generate-new">
                            <a href="/P1/schedulePicker.html">
                            <button class="bg-purple-dk text-white font-bold py-2 px-4 rounded-full m-4 flex">
                                <i>
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg> </i>

                                    <span>Generate New Schedule
                                </span>
                            </button>
                            </a>
                        </div>
                    </Link>
                    <div id="calendars" class="w-full flex flex-wrap justify-center overflow-scroll">
                        <div class="mb-4 mt-4 ml-4 bg-white shadow-md rounded-lg w-1/12">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Day</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p id="m-1" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">9:00 AM</p>
                                        <p id="m-2" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">10:00 AM</p>
                                        <p id="m-3" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">11:00 AM</p>
                                        <p id="m-4" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">12:00 PM</p>
                                        <p id="m-5" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">1:00 PM</p>
                                        <p id="m-6" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">2:00 PM</p>
                                        <p id="m-7" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">3:00 PM</p>
                                        <p id="m-8" class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">4:00 PM</p>
                                        <p id="m-9" class="text-lg font-bold text-center pt-4 text-gray-400 w-full">5:00 PM</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="w-1/6 mb-4 mt-4 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Monday</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 bg-green-700 text-white border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">Meeting with Sara</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                    </div>
                                </div>             
                            </div>
                        </div>
                        <div class="w-1/6 mb-4 mt-4 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Tuesday</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                    </div>
                                </div>             
                            </div>
                        </div>
                        <div class="w-1/6 mb-4 mt-4 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Wednesday</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 bg-green-700 text-white border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">Neurotech Meeting</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 bg-green-700 text-white border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">Interview Marina</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                    </div>
                                </div>             
                            </div>
                        </div>
                        <div class="w-1/6 mb-4 mt-4 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Thursday</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 bg-green-700 text-white border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">Meeting with Sara</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                    </div>
                                </div>             
                            </div>
                        </div>
                        <div class="w-1/6 mb-4 mt-4 bg-white shadow-md rounded-lg">
                            <div class="flex flex-col items-center">
                                <h2 class="text-2xl font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full">Friday</h2>
                                <div class="flex flex-col items-center w-full">
                                    <div class="flex flex-col items-center w-full">
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                        <p class="text-lg font-bold text-center pt-4 bg-green-700 text-white border-b-2 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">Meeting Selen</p>
                                        <p class="text-lg font-bold text-center pt-4 text-gray-400 border-gray-200 w-full cursor-move" draggable="true" ondragstart="dragstart(event)" ondragover="dragging(event)" ondrop="dropped(event)">X</p>
                                    </div>
                                </div>             
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>

            </Container>


            <Footer sc={{ mt: 10}} />
        </ThemeProvider>
    );
}
