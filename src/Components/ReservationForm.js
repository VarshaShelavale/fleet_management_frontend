import { useState } from "react";
import "./Reservation.Module.css";
function ReservationForm() {
  const [pickupDate, SetpickupDate] = useState("");
  const [returnDate, setreturnDate] = useState("");
  const [airportCodepickUp, setAirportCodePickUp] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [returnCity, setReturnCity] = useState("");
  const [airportCodereturn, setAirportCodeReturn] = useState("");
  const [pickUpState, setPickUpState] = useState("");
  const [returnState, setreturnState] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      pickupDate,
      returnDate,
      airportCodepickUp,
      pickupCity,
      returnCity,
      airportCodereturn,
      pickUpState,
      returnState,
    };
    console.log(data);
  }
  return (
    <div>
      <div id="app">
        <div className="container">
          <div className="left-section"></div>
          <div className="right-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group" onS>
                <label for="pickupDate">Pickup Date:</label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={pickupDate}
                  onChange={(e) => SetpickupDate(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label for="returnDate">Return Date:</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={returnDate}
                  onChange={(e) => setreturnDate(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>PickUp Location :</label>
              </div>

              <div className="form-group">
                <label for="pickupLocation">Airport Code:</label>

                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={airportCodepickUp}
                  onChange={(e) => setAirportCodePickUp(e.target.value)}
                ></input>
                <select id="pickupAirport" name="pickupAirport">
                  <option value="JFK">
                    John F. Kennedy International Airport
                  </option>
                  <option value="LAX">Los Angeles International Airport</option>
                  <option value="ORD">O'Hare International Airport</option>
                </select>
              </div>
              <div className="form-group">
                <label for="pickupCity">Pickup City:</label>
                <input
                  type="text"
                  id="pickupCity"
                  name="pickupCity"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                ></input>
                <label for="pickupState">State:</label>
                <input
                  type="text"
                  id="pickupState"
                  name="pickupState"
                  value={pickUpState}
                  onChange={(e) => setPickUpState(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>Return Location :</label>
              </div>
              <div className="form-group">
                <label for="returnLocation">Airport Code :</label>
                <input
                  type="text"
                  id="returnLocation"
                  name="returnLocation"
                  value={airportCodereturn}
                  onChange={(e) => setAirportCodeReturn(e.target.value)}
                ></input>
                <select id="returnAirport" name="returnAirport">
                  <option value="JFK">
                    John F. Kennedy International Airport
                  </option>
                  <option value="LAX">Los Angeles International Airport</option>
                  <option value="ORD">O'Hare International Airport</option>
                </select>
              </div>

              <div class="form-group">
                <label for="returnCity">Return City:</label>
                <input
                  type="text"
                  id="returnCity"
                  name="returnCity"
                  value={returnCity}
                  onChange={(e) => setReturnCity(e.target.value)}
                ></input>
                <label for="returnState">State:</label>
                <input
                  type="text"
                  id="returnState"
                  name="returnState"
                  value={returnState}
                  onChange={(e) => setreturnState(e.target.value)}
                ></input>
              </div>

              <button type="submit">Continue Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
