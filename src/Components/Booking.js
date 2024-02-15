import { useEffect, useState } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { useNavigate } from "react-router-dom";
import "./Booking.module.css";

function Booking() {
  const {
    selectedpickHub,
    selecteddropHub,
    cartype,
    total_amt,
    pickupDate,
    returnDate,
  } = useSelectedOptions();
  const navigate = useNavigate();
  const [estamt, setEstamt] = useState();
  const user = JSON.parse(sessionStorage.getItem("userinfo"));
  function calculateDays(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const differenceMs = endDate - startDate;

    // Convert milliseconds to days
    const oneDayMs = 24 * 60 * 60 * 1000;
    const differenceDays = Math.round(differenceMs / oneDayMs);

    return differenceDays;
  }
  function calculateestimated_amt() {
    const numDays = calculateDays(pickupDate, returnDate);
    console.log("Number of days:", numDays);
    if (numDays > 30) {
      const amtmonth =
        (numDays / 30) * Number(cartype.cartype_Master.month_Rate);
      const amtremain =
        (numDays % 30) * Number(cartype.cartype_Master.daily_Rate);
      return amtmonth + amtremain;
    } else if (numDays > 7) {
      const amtmonth =
        (numDays / 30) * Number(cartype.cartype_Master.weekly_Rate);
      const amtremain =
        (numDays % 30) * Number(cartype.cartype_Master.daily_Rate);
      return amtmonth + amtremain;
    } else {
      const amt = (numDays % 30) * Number(cartype.cartype_Master.daily_Rate);
      return amt;
    }
  }
  useEffect((e) => {
    const estamt = calculateestimated_amt().toFixed(2);
    console.log(total_amt);
    setEstamt(estamt + total_amt);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const booking = {
      car_id: cartype.car_id,
      cust_id: user.regId,
      end_date: returnDate,
      start_date: pickupDate,
      hub_id: selecteddropHub[0].hub_id,
      estamount: estamt,
    };
    console.log(JSON.stringify(booking));
    fetch("http://localhost:8080/api/bookingsave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(() => {
        // console.log("Success:", data);
        alert("Booking Successful");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form>
      <h2>Booking Form</h2>
      <div>
        <label>Start Date:</label>
        <input type="date" name="start_date" value={pickupDate} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" name="end_date" value={returnDate} />
      </div>
      <div>
        <label>Pickup Hub Name: {selectedpickHub[0].hub_Name}</label>
        <br />
        <label>Pickup Hub Address: {selectedpickHub[0].address}</label>
      </div>
      <div>
        <label>Drop Hub Name: {selecteddropHub[0].hub_Name}</label>
        <br />
        <label>Drop Hub Address: {selecteddropHub[0].address}</label>
      </div>
      <div>
        <input type="text" name="firstName" value={user.regId} hidden />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={user.firstName} />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={user.lastName} />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={user.mobileNumber} />
      </div>
      <div>
        <label>Email ID:</label>
        <input type="email" name="emailId" value={user.emailId} />
      </div>
      <div>
        <label>Driver's License Number:</label>
        <input type="text" name="dLNumber" value={user.dLNumber} />
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" value={user.aadharNo} />
      </div>
      <div>
        <label>Passport Number:</label>
        <input type="text" name="passportNo" value={user.passportNo} />
      </div>

      <div>
        <label>City:</label>
        <input type="text" name="city" value={user.city} />
      </div>

      <div>
        <label>Estimated Amount:</label>
        <input type="number" step="0.01" name="estamount" value={estamt} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Booking;
