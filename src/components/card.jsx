import React from "react";
// Make sure to import the custom CSS file

const WavyCard = ({ header, body }) => {
  return (
    <div className="wavy-card bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{header}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default WavyCard;
