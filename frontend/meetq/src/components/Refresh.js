import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { REFRESH_URL } from "../constants/APIEndPoints";
import logo from "../assets/meetQ_transparent.png";

class Refresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Refresh: "",
      error: "",
    };
  }
  componentDidMount() {
    const refresh_token = localStorage.getItem("refresh_token");
    if (refresh_token) {
      this.setState({ refresh: refresh_token });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REFRESH_URL, {
        refresh: localStorage.getItem("refresh_token"),
      });
      localStorage.setItem("access_token", response.data.access);
      window.location.href = "/profile";
    } catch (error) {
      this.setState({ error: error.response.data.detail });
    }
  };
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Refresh | meetQ</title>
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
              <div className="container">
                <h1 className="font-sans text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-normal mb-2">
                  Refresh Token
                </h1>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="refresh" className="text-gray-700">
                      Refresh Token
                    </Label>
                    <Input
                      type="text"
                      name="refresh"
                      id="refresh"
                      value={this.state.refresh}
                      onChange={this.handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    className="bg-cDarkPurple hover:bg-cPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                  >
                    Refresh
                  </Button>
                  {this.state.error && (
                    <div className="text-red-500 text-xs mt-2">
                      {this.state.error}
                    </div>
                  )}
                </Form>
              </div>
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

export default Refresh;
