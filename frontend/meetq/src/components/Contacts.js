import React from "react";
import "../contacts.css";
import pp from "../assets/pp1.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { CONTACTS_VIEW_URL } from "../constants/APIEndPoints";

class Contacts extends React.Component {

  state = { details: [], };

  componentDidMount() {
    let data;
    // Fetch the token from localStorage
    const token = localStorage.getItem("access_token");
    // Set the request headers to include the token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    axios
        .get(CONTACTS_VIEW_URL, config)
        .then((response) => {
            // Assuming the response contains the array of contacts
            // under the data property
            data = response.data;
            this.setState({ details: data });
        })
        .catch((error) => {
            console.error('There was an error fetching the contacts: ', error);
        });
  }

    render() {
        return (
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="contacts.css" />
              <title>Your Contacts | meetQ</title>
              <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
            rel="stylesheet"
            />
            </head>
          
            <body class="h-screen">
              <div id="container" class="flex flex-col md:flex-row h-full">
                {/* <nav class="h-full">
                  <div id="nav" class="h-full">
                    <div
                      id="hamburger"
                      class="md:hidden transition-transform flex items-start p-3 justify-between shadow-md"
                    >
                      <div class="pt-2">
                        <svg
                          class="w-10 h-10 stroke-purple-dk"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="purple-dk"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 17H19M5 12H19M5 7H19"
                          />
                        </svg>
                      </div>
                      <div>
                          <img class="p-2 px-4 w-28" src={logo} alt="logo"/>
                      </div>
                    </div>
          
                    <div
                      id="nav-bar"
                      class="hidden md:flex transition-transform flex-col items-center min-w-64 w-4/5 sm:w-2/6 md:w-1/5 h-full shadow-md text-gray-700 dark:text-gray-400 dark:bg-gray-900 min-h-full relative"
                    >
                      <div id="side-nav-logo">
                          <img class="w-40 p-2 px-4" src={logo} alt="logo"/>
                      </div>
          
                      <div
                        class="w-full flex items-center justify-between flex-col h-full min-h-screen"
                      >
                        <div
                          class="flex flex-col items-center w-full mt-3 border-t border-gray-200 divide-y border-b"
                        >
                            <svg
                              class="w-6 h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Dashboard</span>
                    
                            <svg
                              class="w-6 h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Your Calendars</span>
                        
                            <svg
                              class="w-6 h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                              />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Your Schedule</span>
        
                            <svg
                              class="w-6 h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15,14 C17.6887316,14 19.8818169,16.1223292 19.9953804,18.7831122 L20,19 L20,20 C20,21.0543909 19.18415,21.9181678 18.1492661,21.9945144 L18,22 L4,22 C2.94563773,22 2.08183483,21.18415 2.00548573,20.1492661 L2,20 L2,19 C2,16.3112684 4.12231026,14.1181831 6.78311066,14.0046196 L7,14 L15,14 Z M21,13 C21.5523,13 22,13.4477 22,14 C22,14.5523 21.5523,15 21,15 L20,15 C19.4477,15 19,14.5523 19,14 C19,13.4477 19.4477,13 20,13 L21,13 Z M11,2 C13.7614,2 16,4.23858 16,7 C16,9.76142 13.7614,12 11,12 C8.23858,12 6,9.76142 6,7 C6,4.23858 8.23858,2 11,2 Z M21,10 C21.5523,10 22,10.4477 22,11 C22,11.5523 21.5523,12 21,12 L19,12 C18.4477,12 18,11.5523 18,11 C18,10.4477 18.4477,10 19,10 L21,10 Z M21,7 C21.5523,7 22,7.44772 22,8 C22,8.51283143 21.613973,8.93550653 21.1166239,8.9932722 L21,9 L18,9 C17.4477,9 17,8.55228 17,8 C17,7.48716857 17.386027,7.06449347 17.8833761,7.0067278 L18,7 L21,7 Z"
                              />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Your Contacts</span>
                        </div>
                        <div
                          class="flex items-center justify-between w-full hover:cursor-pointer bg-purple-dk hover:bg-purple-md text-gray-300 hover:shadow-sm"
                        >
                          <div
                            class="flex mx-4 items-center justify-center self-end h-16 mt-auto"
                          >
    
                              <svg
                                class="w-6 h-6 stroke-current"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span class="ml-2 text-sm font-medium">Jane Skyrim</span>
                        
                          </div>
                          <div class="justify-end w-8 ml-16">
                            
                              <svg
                                class="w-6 h-6 stroke-current"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="100"
                                height="100"
                                viewBox="0,0,256,256"
                              >
                                <g
                                  fill="#b5b5b5"
                                  fill-rule="nonzero"
                                  stroke="none"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  stroke-linejoin="miter"
                                  stroke-miterlimit="10"
                                  stroke-dasharray=""
                                  stroke-dashoffset="0"
                                  font-family="none"
                                  font-weight="none"
                                  font-size="none"
                                  text-anchor="none"
                                //   style="mix-blend-mode: normal"
                                >
                                  <g transform="scale(5.12,5.12)">
                                    <path 
                                    d="M22.20508,2c-0.48953,0.00026 -0.90693,0.35484 -0.98633,0.83789l-0.97266,5.95508c-1.16958,0.34023 -2.28485,0.7993 -3.33594,1.37109l-4.91406,-3.50977c-0.39728,-0.28369 -0.94131,-0.23911 -1.28711,0.10547l-3.89062,3.88672c-0.3432,0.34344 -0.39015,0.88376 -0.11133,1.28125l3.45703,4.94531c-0.58061,1.05722 -1.04985,2.17878 -1.39844,3.35938l-5.92969,0.98633c-0.4815,0.0811 -0.83404,0.49805 -0.83398,0.98633v5.5c-0.00088,0.48518 0.3466,0.901 0.82422,0.98633l5.93359,1.05078c0.3467,1.17855 0.81296,2.30088 1.39453,3.35937l-3.5,4.89648c-0.28369,0.39728 -0.23911,0.94131 0.10547,1.28711l3.88867,3.89063c0.34265,0.34275 0.88175,0.39048 1.2793,0.11328l4.95508,-3.46875c1.05419,0.57517 2.17218,1.03762 3.3457,1.38086l0.99023,5.96289c0.08025,0.48228 0.49742,0.83584 0.98633,0.83594h5.5c0.4858,0.00071 0.90184,-0.34778 0.98633,-0.82617l1.06055,-5.98633c1.16868,-0.3485 2.28142,-0.8178 3.33008,-1.39648l4.98828,3.5c0.39749,0.27882 0.93781,0.23187 1.28125,-0.11133l3.88867,-3.89258c0.34612,-0.34687 0.38995,-0.89343 0.10352,-1.29102l-3.55664,-4.9375c0.56867,-1.04364 1.02681,-2.14972 1.36719,-3.31055l6.01758,-1.05469c0.47839,-0.08448 0.82689,-0.50053 0.82617,-0.98633v-5.5c-0.00026,-0.48953 -0.35484,-0.90693 -0.83789,-0.98633l-6.00781,-0.98242c-0.34266,-1.15945 -0.80206,-2.26356 -1.37109,-3.30664l3.50781,-4.99805c0.27882,-0.39749 0.23187,-0.93781 -0.11133,-1.28125l-3.89062,-3.88867c-0.34687,-0.34612 -0.89343,-0.38995 -1.29102,-0.10352l-4.92383,3.54102c-1.04908,-0.57636 -2.16255,-1.04318 -3.33398,-1.38867l-1.04687,-5.98437c-0.08364,-0.47917 -0.49991,-0.82867 -0.98633,-0.82812zM23.05664,4h3.80859l0.99609,5.68555c0.06772,0.38959 0.35862,0.70269 0.74219,0.79883c1.46251,0.36446 2.83609,0.94217 4.08984,1.70117c0.34265,0.20761 0.77613,0.1907 1.10156,-0.04297l4.67969,-3.36328l2.69336,2.69336l-3.33203,4.74805c-0.22737,0.3236 -0.24268,0.75079 -0.03906,1.08984c0.75149,1.25092 1.32146,2.61583 1.68555,4.07031c0.0969,0.38717 0.41473,0.67966 0.80859,0.74414l5.70703,0.93359v3.80859l-5.71875,1.00391c-0.3899,0.06902 -0.70237,0.36157 -0.79687,0.74609c-0.35988,1.45263 -0.93019,2.8175 -1.68164,4.06836c-0.20617,0.34256 -0.18851,0.775 0.04492,1.09961l3.37891,4.68945l-2.69336,2.69531l-4.74023,-3.32617c-0.32527,-0.22783 -0.75452,-0.24163 -1.09375,-0.03516c-1.24752,0.75899 -2.62251,1.33943 -4.08008,1.70898c-0.38168,0.09622 -0.67142,0.40737 -0.74023,0.79492l-1.00977,5.6875h-3.81445l-0.94141,-5.66211c-0.06549,-0.39365 -0.35874,-0.7107 -0.74609,-0.80664c-1.46338,-0.36069 -2.84314,-0.93754 -4.10547,-1.69531c-0.33857,-0.20276 -0.76473,-0.18746 -1.08789,0.03906l-4.70312,3.29492l-2.69531,-2.69922l3.32422,-4.64648c0.23221,-0.3254 0.24834,-0.75782 0.04102,-1.09961c-0.76602,-1.26575 -1.34535,-2.6454 -1.71094,-4.11523c-0.09555,-0.38244 -0.40684,-0.67307 -0.79492,-0.74219l-5.63086,-1v-3.81445l5.62695,-0.93555c0.39312,-0.06519 0.71002,-0.35754 0.80664,-0.74414c0.36873,-1.4749 0.94778,-2.85432 1.71094,-4.11719c0.20562,-0.33876 0.19183,-0.76697 -0.03516,-1.0918l-3.28516,-4.69531l2.69727,-2.69531l4.66211,3.33203c0.32413,0.23112 0.75447,0.248 1.0957,0.04297c1.25566,-0.75415 2.63862,-1.32636 4.10352,-1.68555c0.38927,-0.09584 0.68369,-0.41486 0.74805,-0.81055zM25,17c-4.40643,0 -8,3.59357 -8,8c0,4.40643 3.59357,8 8,8c4.40643,0 8,-3.59357 8,-8c0,-4.40643 -3.59357,-8 -8,-8zM25,19c3.32555,0 6,2.67445 6,6c0,3.32555 -2.67445,6 -6,6c-3.32555,0 -6,-2.67445 -6,-6c0,-3.32555 2.67445,-6 6,-6z"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav> */}
                <div id="content" class="bg-purple-lt min-h-full grow overflow-auto">
                  <div class="content-container">
                    <div>
                      <div class="page-title">
                        <h1>Your Contacts</h1>
                      </div>
                      <div class="add-contact">
                        <Link
                        to="/contacts/add"
                        className="button"
                        id="add-button">
                            Add Contact
                        </Link>
                      </div>
          
                      <div class="contacts-container">
                        {this.state.details.map((contact, id) => (
                        <div className="contact-card" key={id}>
                            <div className="img-container">
                                <img src={pp} alt="pp" />
                            </div>
                            <div className="name-container">
                                <h1 className="name">{contact.first_name} {contact.last_name}</h1>
                                <h3>{contact.email}</h3>
                            </div>
                            <div className="buttons-container">
                                <div className="button-align">
                                    <Link to={`/editcontact/${contact.id}`} className="button">
                                        Edit
                                    </Link>
                                </div>
                                <div className="button-align">
                                    <Link to={`/deletecontact/${contact.id}`} className="button">
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
              <script src="/P1/index.js"></script>
            </body>
          </html>
        );
    }
}

export default Contacts;