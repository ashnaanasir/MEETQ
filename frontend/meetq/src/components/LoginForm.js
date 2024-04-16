import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import logo from "../assets/meetQ_transparent.png";
import { LOGIN_URL } from "../constants/APIEndPoints";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
        detail: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, {
        username: this.state.username,
        password: this.state.password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      window.location.href = "/profile";
    } catch (error) {
      if (
        (error.response && error.response.data) ||
        error.response.data.detail
      ) {
        const { username, password } = error.response.data;
        this.setState({
          errors: {
            username: username ? username[0] : "",
            password: password ? password[0] : "",
            detail: error.response.data.message,
          },
        });
      }
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Login | meetQ</title>
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
            </nav>
          </header>
          <div className="flex justify-center pt-4">
            <div className="w-full max-w-md">
              <Form
                className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  this.handleSubmit(e);
                }}
              >
                <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                  Login
                </h2>
                <br />
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.username ? "border-red-500" : ""
                    }`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.username}
                    </p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </FormGroup>
                {errors.detail && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.detail} <br /> <br />
                  </p>
                )}

                <Button
                  type="submit"
                  className="bg-cDarkPurple hover:bg-cPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
          <footer class="text-center text-xs md:text-base lg:text-base bg-cGrey3 text-gray-500 py-4">
            <p>&copy; 2024 meetQ. All rights reserved.</p>
          </footer>
        </body>
      </html>
    );
  }
}

export default LoginForm;
