import "./App.css";
import React from "react";
import Landing from "./components/Landing";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ObtainToken from "./components/ObtainToken";
import Refresh from "./components/Refresh";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import NewContactForm from "./components/NewContactForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/obtain/token" element={<ObtainToken />} />
        <Route path="/refresh" element={<Refresh />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/add" element={<NewContactForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
