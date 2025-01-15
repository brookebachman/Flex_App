import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Navigate to the corresponding page based on the slider value
    if (newValue === "1") {
      navigate("/page1");
    } else if (newValue === "2") {
      navigate("/page2");
    } else if (newValue === "3") {
      navigate("/page3");
    }
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <label htmlFor="slider">Select Option: </label>
      <input
        id="slider"
        type="range"
        min="1"
        max="3"
        step="1"
        value={value}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <div>
        <p>Option {value}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Option 1</span>
        <span>Option 2</span>
        <span>Option 3</span>
      </div>
    </div>
  );
};

export default Slider;
