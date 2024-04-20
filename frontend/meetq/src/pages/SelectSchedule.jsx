import React from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, deepOrange } from "@mui/material/colors";
import Footer from "../components/footer.jsx";
import './output.css';
import NavBar from "../components/navbar.jsx";

const defaultTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
});


export default function ScheduleSelector() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container maxWidth="lg" display="flex" alignItems="center" justifyContent="center" sx={{mt: '80px'}}>
                <div id="content" class="bg-white min-h-full grow flex flex-col items-center">
                    <div id="title">
                        <h1 class="text-4xl font-bold text-center pt-4 text-purple-dk">Pick a New Schedule</h1>
                    </div>
                    <div id="add Calendar" class="w-full p-2 flex flex-wrap justify-center overflow-scroll">
                        <div id="calendarList" class="flex flex-col w-4/5">
                            <h2 class="text-2xl font-semibold text-purple-dk">Select Calendars</h2>
                            <div id="calendarCheckboxes" class="flex flex-col">
                                <input type="checkbox" id="calendar1" name="calendar1" value="calendar1" />
                                <label for="calendar1">Calendar 1</label>
                                <input type="checkbox" id="calendar2" name="calendar2" value="calendar2" />
                                <label for="calendar2">Calendar 2</label>
                                <input type="checkbox" id="calendar3" name="calendar3" value="calendar3" />
                                <label for="calendar3">Calendar 3</label>
                            </div>
                        </div>
                        <div id="schedule1" class="flex flex-wrap w-full">
                            <div id="title" class="text-center w-full">
                                <h2 class="text-2xl font-semibold text-purple-dk">Schedule 1</h2>
                            </div>
                            <div class="w-full flex flex-wrap justify-center overflow-scroll">
                                <div class="mb-4 mt-4 bg-white shadow-md rounded-lg w-1/12">
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
                            <div id="selectButton" class="flex flex-col w-full justify-center items-center">
                                <button class="bg-purple-md text-white font-bold py-2 px-4 rounded-lg text-center">
                                    <a href="/P1/schedule.html">Select</a></button>
                            </div>   
                        </div>
                        <div id="schedule1" class="flex flex-wrap w-full">
                            <div id="title" class="text-center w-full">
                                <h2 class="text-2xl font-semibold text-purple-dk">Schedule 2</h2>
                            </div>
                            <div class="w-full flex flex-wrap justify-center overflow-scroll">
                                <div class="mb-4 mt-4 bg-white shadow-md rounded-lg w-1/12">
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
                           <div id="selectButton" class="flex flex-col w-full justify-center items-center">
                                <button class="bg-purple-md text-white font-bold py-2 px-4 rounded-lg text-center">
                                    <a href="/P1/schedule.html">Select</a></button>
                        
                            </div>   
                        </div>
                        <div id="schedule1" class="flex flex-wrap w-full">
                            <div id="title" class="text-center w-full">
                                <h2 class="text-2xl font-semibold text-purple-dk">Schedule 3</h2>
                            </div>
                            <div class="w-full flex flex-wrap justify-center overflow-scroll">
                                <div class="mb-4 mt-4 bg-white shadow-md rounded-lg w-1/12">
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
                            <div id="selectButton" class="flex flex-col w-full justify-center items-center">
                                <button class="bg-purple-md text-white font-bold py-2 px-4 rounded-lg text-center">
                                    <a href="/P1/schedule.html">Select</a></button>
                        
                            </div>   
                        </div>

                    </div>
                </div>
                    </Container>


                    <Footer sc={{ mt: 10}} />
                </ThemeProvider>
            );
        }
