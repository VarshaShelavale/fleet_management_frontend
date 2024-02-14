import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addon.css";

const AddOnpage = () => {
  const navigate = useNavigate();

  const [total_amt, settotal_amt] = useState(0);
  const [adonlist, setaddonlist] = useState([]);

  const handleCheckboxChange = (e) => {
    settotal_amt((amt) => amt + e);
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/getaddon")
      .then((res) => res.json())
      .then((data) => setaddonlist(data));
  }, []);
  const handleContinueClick = () => {
    // Store selected values in session storage
    console.log(total_amt);
    sessionStorage.setItem("addonamt", total_amt);
    // Perform any additional actions or navigation here
    if (sessionStorage.getItem("userinfo")) {
      navigate("/booking");
    } else {
      navigate("/login", { state: "formfill" });
    }
  };

  return (
    <div className="addon-container">
      {adonlist.map((addon) => (
        <>
          <div className="addon-item">
            <input
              type="checkbox"
              id="gpsCheckbox"
              onChange={(e) => handleCheckboxChange(addon.daily_rate)}
            />
            <label htmlFor="gpsCheckbox">{addon.addon_name}</label>
            <label className="rate">Rate: Rs.{addon.daily_rate}</label>
          </div>
          <br />
        </>
      ))}
      <input
        type="submit"
        value="Continue booking"
        onClick={handleContinueClick}
      />
    </div>
  );
};

export default AddOnpage;
