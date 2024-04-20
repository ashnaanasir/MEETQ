import React from "react";
import "../contacts.css";
import logo from "../assets/meetQ_transparent.png";
import pp from "../assets/pp1.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { CONTACTS_VIEW_URL } from "../constants/APIEndPoints";
import NavBar from "./navbar";

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

  deleteContact = (contactId) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`${CONTACTS_VIEW_URL}${contactId}`, config)
      .then(() => {
        this.setState({
          details: this.state.details.filter(contact => contact.id !== contactId)
        });
      // Reload contacts window
      window.location.reload();
      })
      .catch((error) => {
        console.error('There was an error deleting the contact: ', error);
      });
  };

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
                <div id="content" class="bg-purple-lt min-h-full grow overflow-auto">
                  <div class="content-container">
                    <div> <NavBar /></div>
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
                                    <Link to={`/contacts/edit/${contact.pk}`} className="button">
                                        Edit
                                    </Link>
                                </div>
                                <div className="button-align">
                                <button onClick={() => this.deleteContact(contact.pk)} className="button">
                                  Delete
                                </button>
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