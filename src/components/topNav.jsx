import React from "react";
import { useNavigate } from "react-router-dom";
// import "./topNav.css";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <span onClick={() => navigate("/")}>Flex</span>
      </div>

      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>

      <ul className="nav-links">
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/activity")}>Activity</button>
        </li>
        <li>
          <button onClick={() => navigate("/page2")}>Calendar</button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
