import React, { Component } from "react";
import logo from "../assets/meetQ_transparent.png";
import char14 from "../assets/character14.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="../index.css" rel="stylesheet" />
          <title>meetQ</title>
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <header>
            <nav class="bg-white shadow flex items-center justify-between w-full">
              <div class="flex justify-between items-center">
                <span>
                  <img class="w-20 lg:w-40 p-2 px-4" src={logo} alt="logo" />
                </span>
              </div>
              <div>
                <ul class="flex items-center">
                  <Link
                    to="/register"
                    id="sign"
                    className="text-xs md:text-base lg:text-lg bg-cDarkPurple shadow hover:bg-cPurple text-white font-bold py-1 px-2 my-2 md:py-2 md:px-5 lg:px-5 lg:py-2 mx-1 rounded"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    className="text-xs md:text-base lg:text-lg bg-cGrey shadow-md hover:bg-cDarkGrey text-[#6D5593] font-bold py-1 px-2 md:py-2 md:px-6 lg:py-2 lg:px-6 mx-2 mr-5 rounded"
                  >
                    Log In
                  </Link>
                </ul>
              </div>
            </nav>
          </header>
          <main>
            <div class="md:py-10 lg:py-20 flex flex-row items-center">
              <div class="px-4 my-4 md:px-20 lg:px-20">
                <h1 class="text-xl text-center md:text-5xl md:text-left lg:text-left lg:text-5xl font-sans font-bold text-black leading-normal">
                  Your Ultimate Scheduling Solution
                </h1>
                <br />
                <p class="text-base text-center md:text-2xl md:text-left lg:text-2xl lg:text-left text-gray-500 my-4 px-2">
                  Welcome to MeetQ, where scheduling appointments is a breeze.
                  Our platform offers seamless booking for all. With just a few
                  clicks, you can schedule, reschedule, and receive timely
                  reminders. Say goodbye to phone calls and emails – embrace
                  convenience with MeetQ. Simplify your appointments today!
                </p>
                <br />
                <Link
                  to="/register"
                  className="flex items-center justify-center md:justify-start lg:justify-start"
                >
                  <button className="text-xs md:text-base lg:text-lg bg-cDarkPurple hover:bg-cPurple text-white font-bold py-1 px-2 my-2 md:py-2 md:px-5 lg:px-5 lg:py-2 mx-1 rounded">
                    Get started
                  </button>
                </Link>
              </div>
              <div class="hidden lg:flex w-full py-2 px-8">
                <img class="w-full w-3/4" src={char14} alt="landing page" />
              </div>
            </div>
          </main>
          <footer class="absolute inset-x-0 bottom-0 md:absolute md:bottom-0 lg:absolute lg:bottom-0">
            <div class="text-xs md:text-base lg:text-base w-full p-4 text-center">
              © 2024 Copyright MeetQ
            </div>
          </footer>
        </body>
      </html>
    );
  }
}
export default Landing;
