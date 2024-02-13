import React, { useState } from "react";
import "./Addon.css";

const AddOnpage = () => {
  const [selectedAddons, setSelectedAddons] = useState({
    gps: false,
    campingKit: false,
    childSeats: false,
    noOfSeats: 0,
  });

  const handleCheckboxChange = (checkboxName, value) => {
    setSelectedAddons((prevValues) => ({
      ...prevValues,
      [checkboxName]: value,
    }));
  };

  const handleNoOfSeatsChange = (event) => {
    const selectedSeats = parseInt(event.target.value, 10);
    setSelectedAddons((prevValues) => ({
      ...prevValues,
      noOfSeats: selectedSeats,
    }));
  };

  const handleContinueClick = () => {
    // Store selected values in session storage
    sessionStorage.setItem("selectedAddons", JSON.stringify(selectedAddons));
    // Perform any additional actions or navigation here
    console.log("Selected Addons:", selectedAddons);
  };

  return (
    <div className="addon-container">
      <div className="addon-item">
        <input
          type="checkbox"
          id="gpsCheckbox"
          onChange={(e) => handleCheckboxChange("gps", e.target.checked)}
        />
        <label htmlFor="gpsCheckbox">GPS Navigation System</label>
        <label className="rate">Rate: $10 per day</label>
      </div>
      <br />
      <div className="addon-item">
        <input
          type="checkbox"
          id="campingCheckbox"
          onChange={(e) => handleCheckboxChange("campingKit", e.target.checked)}
        />
        <label htmlFor="campingCheckbox">Camping Kit</label>
        <label className="rate">Rate: $15 per day</label>
      </div>
      <br />
      <div className="addon-item">
        <input
          type="checkbox"
          id="childSeatsCheckbox"
          onChange={(e) => handleCheckboxChange("childSeats", e.target.checked)}
        />
        <label htmlFor="childSeatsCheckbox">Child Seats</label>
        <label className="rate">Rate: $5 per day per seat</label>
        <br />
        <label htmlFor="noOfSeats">Number of Seats:</label>
        <select id="noOfSeats" onChange={handleNoOfSeatsChange}>
          <option value="0">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <input type="submit" value="Continue" onClick={handleContinueClick} />
    </div>
  );
};

export default AddOnpage;
