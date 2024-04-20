import React, { useState, useEffect } from "react";
import axios from "axios";
import { PROFILE_URL, PROFILE_EDIT_URL } from "../constants/APIEndPoints";
import NavBar from "./navbar";
import logo from "../assets/meetQ_transparent.png";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Retrieve token from local storage( you can also see it on inspect on the web)
    const token = localStorage.getItem("access_token");
    console.log("Token: ", token);

    axios
      .get(PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure token in Authorization header. This allow us to get our data from the database.
        },
      })
      .then((response) => {
        // Set the profile data
        setProfileData(response.data);
        setFormData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the access token just like in GET method part
    const token = localStorage.getItem("access_token");

    axios
      .put(PROFILE_EDIT_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Profile updated successfully");
        //Update the profile
        setProfileData(response.data);
        window.location.href = "/profile";
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        } else if (error.resposne.data.non_field_errors) {
          setErrors(error.response.data.non_field_errors[0]);
        } else {
          console.log("Error: ", error);
        }
      });
  };
  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile | meetQ</title>
        <link href="../index.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body class="bg-cGrey3 min-h-screen">
        <header>
          <nav class="flex items-center justify-between">
            <div class="flex justify-between items-center">
              <span>
                <a href="/">
                  <img class="w-40 p-2 px-4" src={logo} alt="logo" />
                </a>
              </span>
            </div>
            <div>
              <Button
                onClick={logout}
                style={{ display: profileData ? "block" : "none" }}
                className="text-xs md:text-base lg:text-lg bg-cDarkPurple shadow hover:bg-cPurple text-white font-bold py-1 px-2 my-2 md:py-2 md:px-5 lg:px-5 lg:py-2 mx-1 rounded mr-4" // Added mr-4 for right margin
              >
                Logout
              </Button>
            </div>
          </nav>
        </header>
        <div className="flex justify-center pt-4">
          <div className="w-full max-w-md">
            <div> <NavBar /></div>
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                Profile
              </h2>
              <br />
              {profileData ? (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="username" className="font-bold">
                      {" "}
                      Username:{" "}
                    </Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors?.username && (
                      <FormFeedback className="text-red-600">
                        {errors.username}
                      </FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="email" className="font-bold">
                      Email:{" "}
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors?.email && (
                      <FormFeedback className="text-red-600">
                        {errors.email}
                      </FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="first_name" className="font-bold">
                      First Name:{" "}
                    </Label>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="last_name" className="font-bold">
                      Last Name:{" "}
                    </Label>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password" className="font-bold">
                      Password:{" "}
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors?.password && (
                      <FormFeedback className="text-red-600">
                        {errors.password}
                      </FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="password2" className="font-bold">
                      Confirm Password:{" "}
                    </Label>
                    <Input
                      type="password"
                      name="password2"
                      id="password2"
                      value={formData.password2}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors?.password2 && (
                      <FormFeedback className="text-red-600">
                        {errors.password2}
                      </FormFeedback>
                    )}
                    {errors?.non_field_errors && (
                      <FormFeedback className="text-red-600">
                        {errors.non_field_errors}
                      </FormFeedback>
                    )}
                  </FormGroup>
                  <Button className="text-xs md:text-base lg:text-base bg-cPurple hover:bg-cDarkPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Save Changes
                  </Button>
                </Form>
              ) : (
                <div>Not Authorized</div>
              )}
            </div>
          </div>
        </div>
        <footer class="text-center text-xs md:text-base lg:text-base bg-cGrey3 text-gray-500 py-4">
          <p>&copy; 2024 meetQ. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Profile;
