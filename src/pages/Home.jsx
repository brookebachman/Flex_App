import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <h1>Welcome to Flex</h1>
      <p>Track your fitness journey with us</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => navigate("/activity")}
          style={{
            padding: "1rem 2rem",
            margin: "0.5rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Activity
        </button>

        <button
          onClick={() => navigate("/page2")}
          style={{
            padding: "1rem 2rem",
            margin: "0.5rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2196F3",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Calendar
        </button>
      </div>
    </div>
  );
};

export default Home;
