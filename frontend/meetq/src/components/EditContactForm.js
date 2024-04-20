import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import { CONTACTS_VIEW_URL } from "../constants/APIEndPoints";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import NavBar from "./navbar";

const EditContactForm = () => {
  const { id } = useParams(); // Use useParams to get the id
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    axios
      .get(`${CONTACTS_VIEW_URL}${id}`, {
        // Use the id to fetch the specific contact
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContactData(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    axios
      .put(`${CONTACTS_VIEW_URL}${id}`, formData, {
        // Assume CONTACTS_EDIT_URL can be used directly with id
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Profile updated successfully");
        //Update the profile
        setContactData(response.data);
        // Redirect to the contacts page
        window.location.href = "/contacts";
      })
      .catch((error) => {
        console.log("Error updating profile: ", error.response.data);
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        } else {
          console.log("Error: ", error);
        }
      });
  };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit Contact | meetQ</title>
        <link href="../index.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body class="bg-cGrey3 min-h-screen">
        <div className="flex justify-center pt-4">
          <div className="w-full max-w-md">
            <div> <NavBar /></div>
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                Edit Contact
              </h2>
              <br />
              {contactData ? (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      invalid={errors.first_name ? true : false}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <FormFeedback>{errors.first_name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      invalid={errors.last_name ? true : false}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <FormFeedback>{errors.last_name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      invalid={errors.email ? true : false}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </FormGroup>
                  <Button
                    type="submit"
                    className="text-xs md:text-base lg:text-base bg-cPurple hover:bg-cDarkPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </Button>
                </Form>
              ) : (
                <div>Not Authorized</div>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default EditContactForm;
