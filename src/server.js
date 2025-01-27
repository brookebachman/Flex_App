const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all origins (can restrict in production)

// Define environment variables in .env and load them here
require("dotenv").config();

console.log("Oura Access Token:", process.env.REACT_APP_OURA_ACCESS_TOKEN);

const PORT = 5001;

app.get("/oura-api", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ouraring.com/v2/usercollection/personal_info",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OURA_ACCESS_TOKEN}`,
          "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Oura API:", error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
