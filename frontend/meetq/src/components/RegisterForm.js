import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import { REGISTER_URL } from "../constants";
import "../landing.css";
import logo from "../assets/meetQ_transparent.png";

class RegisterForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  componentDidMount() {
    // Add any initializations here
    if (this.props.student) {
      const { first_name, last_name, username, email, password, password2 } =
        this.props.student;
      this.setState({
        first_name,
        last_name,
        username,
        email,
        password,
        password2,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = (e) => {
    e.preventDefault();
    axios
      .post(REGISTER_URL, this.state)
      .then((response) => {
        // Handle success or any other logic here
        console.log("Success: ", response.data);
        // Go to the next page
        window.location.href = "/login";
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this.setState({ errors: error.response.data });
        } else {
          console.log("Error: ", error);
        }
      });
  };

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
          <title>Sign Up | meetQ</title>
          <link href="../landing.css" rel="stylesheet" />
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </head>
        <body class="bg-cGrey3">
          <header>
            <nav class="flex justify-center pt-4">
              <div class="flex justify-between items-center">
                <span>
                  <a href="/">
                    <img class="w-40 p-2 px-4" src={logo} alt="logo" />
                  </a>
                </span>
              </div>
            </nav>
          </header>
          <div className="flex justify-center pt-4">
            <div className="w-full max-w-md pb-20">
              <Form
                className="bg-white shadow-md rounded-md px-16 pt-8 pb-10 mt-0"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  this.createStudent(e); // Call createStudent function to handle registration
                }}
              >
                <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                  {" "}
                  Sign Up
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
                    for="username"
                  >
                    Username
                  </Label>
                  <Input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                    invalid={errors && errors.username}
                  />
                  {errors && errors.username && (
                    <FormFeedback className="text-red-600">
                      {errors.username}
                    </FormFeedback>
                  )}
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
                <FormGroup className="mb-6">
                  <Label
                    className="block text-base md:text-xl lg:text-xl text-gray-700 text-md font-bold mb-2"
                    for="password"
                  >
                    Password
                  </Label>
                  <Input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={this.state.password}
                    onChange={this.onChange}
                    invalid={errors && errors.password}
                  />
                  {errors && errors.password && (
                    <FormFeedback className="text-red-600">
                      {errors.password}
                    </FormFeedback>
                  )}
                </FormGroup>
                <FormGroup className="mb-6">
                  <Label
                    className="block text-base md:text-xl lg:text-xl text-gray-700 text-md font-bold mb-2"
                    for="password2"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password2"
                    type="password"
                    name="password2"
                    placeholder="******************"
                    value={this.state.password2}
                    onChange={this.onChange}
                    invalid={errors && errors.password2}
                  />
                  {errors && errors.password2 && (
                    <FormFeedback className="text-red-600">
                      {errors.password2}
                    </FormFeedback>
                  )}
                </FormGroup>
                <FormGroup className="flex flex-col items-center md:flex-row md:justify-between lg:flex-row lg:justify-between">
                  <Button className="text-xs md:text-base lg:text-base bg-cPurple hover:bg-cDarkPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register
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
          <footer class="text-center text-xs md:text-base lg:text-base text-gray-500 py-4">
            <p>&copy; 2024 meetQ. All rights reserved.</p>
          </footer>
        </body>
      </html>
    );
  }
}

export default RegisterForm;
