// import "./App.css";
// import React from "react";
// import Landing from "./components/Landing";
// import SignUp from "./components/RegisterForm";
// import SignIn from "./components/LoginForm";
import Landing from "./pages/landing";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
import CalendarDashBoard from "./pages/CalendarDashboard";
import "./App.css";
import React from "react";
// import Landing from "./components/Landing";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ObtainToken from "./components/ObtainToken";
import Refresh from "./components/Refresh";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import NewContactForm from "./components/NewContactForm";
import AddCalendar from "./pages/AddCalendar";
import CalendarView from "./pages/CalendarView";
import InviteeView from "./pages/InviteeView";
import InviteeResponse from "./pages/InviteeResponse";
import EditContactForm from "./components/EditContactForm";
import Schedule from "./pages/Schedule";
import ScheduleSelector from "./pages/SelectSchedule";

// import ObtainToken from "./components/ObtainToken";
// import Refresh from "./components/Refresh";
// import Profile from "./components/Profile";
// import Contacts from "./components/Contacts";
// import NewContactForm from "./components/NewContactForm";
import CalendarEditView from "./pages/CalendarEditView";
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
        <Route path="/contacts/edit/:id" element={<EditContactForm />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/calendar" element={<CalendarDashBoard />} />
        <Route path="/calendar/add" element={<AddCalendar />} />
        <Route path="/calendar/:id" element={<CalendarView />} />
        <Route path="/calendar/:id/edit" element={<CalendarEditView />} />
        <Route path="/calendar/:id/invitees/:invitee_id/response" element={<InviteeResponse />} />
        <Route path="/calendar/:id/invitees/:invitee_id/send-invite" element={<InviteeView />} /> 
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/select" element={<ScheduleSelector />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/obtain/token" element={<ObtainToken />} />
        <Route path="/refresh" element={<Refresh />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/add" element={<NewContactForm />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
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
