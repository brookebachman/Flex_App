import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Activity } from "./pages/Activity";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import TopNav from "./components/topNav";
import Login from "./pages/Login";

import PrivateRoute from "./context/PrivateRoute";

function App() {
  const [showSlider, setShowSlider] = useState(false);

  const scrollToLogin = () => {
    document.getElementById("login-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  async function fetchOuraData() {
    const url = "/api/oura";
    const accessToken = process.env.NEXT_PUBLIC_OURA_ACCESS_TOKEN;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Oura Data:", response.data);
    } catch (error) {
      console.error("Error fetching data from Oura API:", error);
    }
  }

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-auto">
        {/* Top Header */}
        <TopNav />

        {/* Welcome Section */}
        <div className="App">
          <header className="App-header">
            <h1 className="text-2xl">Welcome to Flex</h1>
            <i className="fa-thin fa-dumbbell fa-3x" />
            <i
              className="fa-thin fa-arrow-down fa-2x cursor-pointer"
              onClick={scrollToLogin}
            />
          </header>
        </div>

        {/* Login Section */}
        <div id="login-section">
          <Login />
        </div>

        {/* Main Layout */}
        <div className="flex flex-1 relative overflow-x-hidden">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={
                  <Home setShowSlider={setShowSlider} show={showSlider} />
                }
              />
              <Route path="/activity" element={<Activity />} />
              <Route path="/calendar" element={<Calendar />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
