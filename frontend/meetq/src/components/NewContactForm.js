import React from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input } from "reactstrap";
import axios from "axios";
import { CONTACTS_VIEW_URL } from "../constants/APIEndPoints";

class NewContactForm extends React.Component {
    // Create a state object with the necessary fields
    state = {
        first_name: "",
        last_name: "",
        email: "",
        errors: {},
    };

    componentDidMount() {
        if (this.props.contact) {
          const { first_name, last_name, email} =
            this.props.contact;
          this.setState({
            first_name,
            last_name,
            email,
          });
        }
      }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // Load the next page
        window.location.href = "/contacts";
    };
    
    createContact = (e) => {
      e.preventDefault();
      // Get the token from localStorage
      const token = localStorage.getItem("access_token");
      // Set the request headers to include the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios
        .post(CONTACTS_VIEW_URL, this.state, config)  // Pass the config object as the third argument
        .then((response) => {
          // Handle success or any other logic here
          console.log("Success: ", response.data);
          // Go to the next page
          window.location.href = "/contacts";
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            this.setState({ errors: error.response.data });
          } else {
            console.log("Error: ", error);
          }
        });
    };
  

    // Render the form
    render() {
        const { errors } = this.state;
        return (
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Add Contact | meetQ</title>
              <link href="../index.css" rel="stylesheet" />
              <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
                rel="stylesheet"
              />
            </head>
            <body class="bg-cGrey3">
              <main>
                <div className="flex justify-center pt-4 relative">
                  <div className="w-full max-w-md">
                    <Form
                      className="bg-white shadow-md rounded-md px-16 pt-8 pb-10 mt-0"
                      onSubmit={(e) => {
                        e.preventDefault(); // Prevent default form submission
                        this.createContact(e); // Call createContact function to handle registration
                      }}
                    >
                      <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                        {" "}
                        Enter the contact details{" "}
                      </h2>
                      <br />
                      <FormGroup className="mb-4">
                        <Label
                          className="block text-base md:text-xl lg:text-xl text-gray-700 text-md font-bold mb-2"
                          for="first_name"
                        >
                          First Name
                        </Label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="first_name"
                          type="text"
                          name="first_name"
                          placeholder="John"
                          value={this.state.first_name}
                          onChange={this.onChange}
                          invalid={errors && errors.first_name}
                        />
                        {errors && errors.first_name && (
                          <FormFeedback>{errors.first_name}</FormFeedback>
                        )}
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Label
                          className="block text-base md:text-xl lg:text-xl text-gray-700 text-md font-bold mb-2"
                          for="last_name"
                        >
                          Last Name
                        </Label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="Doe"
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      
                      <FormGroup className="mb-4">
                        <Label
                          className="block text-base md:text-xl lg:text-xl text-gray-700 text-md font-bold mb-2"
                          for="email"
                        >
                          Email
                        </Label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          value={this.state.email}
                          onChange={this.onChange}
                          invalid={errors && errors.email}
                        />
                        {errors && errors.email && (
                          <FormFeedback className="text-red-600">
                            {errors.email}
                          </FormFeedback>
                        )}
                      </FormGroup>
                      <br />
                      
                      <FormGroup className="flex flex-col items-center md:flex-row md:justify-between lg:flex-row lg:justify-between">
                    <Button className="text-xs md:text-base lg:text-base bg-cPurple hover:bg-cDarkPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Add Contact
                    </Button>
                  </FormGroup>
                  {errors.non_field_errors && (
                    <FormGroup className="mb-4">
                      <FormFeedback className="text-red-600">
                        {errors.non_field_errors[0]}
                      </FormFeedback>
                    </FormGroup>
                  )}
                </Form>
                  </div>
                </div>
              </main>
            </body>
          </html>
        );
      }
    }

export default NewContactForm;