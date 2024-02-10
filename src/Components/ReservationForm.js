import { useEffect, useState } from "react";
import "./Reservation.Module.css";
function ReservationForm() {
  const [states, setState] = useState([]);
  const [pcities, setpCities] = useState([]);
  const [rcities, setrCities] = useState([]);
  const [airports, setairports] = useState([]);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [airportCodepickUp, setAirportCodePickUp] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [returnCity, setReturnCity] = useState("");
  const [airportCodereturn, setAirportCodeReturn] = useState("");
  const [pickUpState, setPickUpState] = useState(0);
  const [returnState, setReturnState] = useState(0);

  useEffect(function () {}, []);
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
  useEffect((e) => {
    fetch("http://localhost:8080/api/airports")
      .then((res) => res.json())
      .then((data) => setairports(data));
  }, []);
  useEffect((e) => {
    fetch("http://localhost:8080/api/states")
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);
  useEffect(() => {
    // Fetch cities for the selected state
    const fetchCities = async (stateid, setCities) => {
      console.log("id is" + pickUpState);
      try {
        const response = await fetch(
          "http://localhost:8080/api/cities/" + stateid
        );

        const data = await response.json();
        setCities(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    if (pickUpState) {
      fetchCities(pickUpState, setpCities);
    }
    if (returnState) {
      fetchCities(returnState, setrCities);
    }
  }, [pickUpState, returnState]);

  return (
    <div>
      <div id="app">
        <div className="container">
          <div className="left-section"></div>
          <div className="right-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pickupDate">Pickup Date:</label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={pickupDate}
                  required
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="returnDate">Return Date:</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={returnDate}
                  required
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>PickUp Location :</label>
              </div>
              <div className="form-group">
                <label htmlFor="pickupLocation">Airport Code:</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={airportCodepickUp}
                  onChange={(e) => setAirportCodePickUp(e.target.value)}
                />
                <select
                  id="pickupAirport"
                  name="pickupAirport"
                  onChange={(e) => setAirportCodePickUp(e.target.value)}
                >
                  <option>Select</option>
                  {airports.map((airport) => (
                    <option
                      key={airport.airport_code}
                      value={airport.airport_code}
                    >
                      {airport.airport_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pickupState">State:</label>

                <select
                  id="pickupState"
                  name="pickupState"
                  onChange={(e) => setPickUpState(e.target.value)}
                >
                  <option>Select</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="pickupCity">Pickup City:</label>

                <select
                  id="pickupCity"
                  name="pickupCity"
                  onChange={(e) => setPickupCity(e.target.value)}
                >
                  <option>Select</option>
                  {pcities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.cityName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Return Location :</label>
              </div>
              <div className="form-group">
                <label htmlFor="returnLocation">Airport Code :</label>
                <input
                  type="text"
                  id="returnLocation"
                  name="returnLocation"
                  value={airportCodereturn}
                  onChange={(e) => setAirportCodeReturn(e.target.value)}
                />
                <select
                  id="returnAirport"
                  name="returnAirport"
                  onChange={(e) => setAirportCodeReturn(e.target.value)}
                >
                  <option>Select</option>
                  {airports.map((airport) => (
                    <option
                      key={airport.airport_code}
                      value={airport.airport_code}
                    >
                      {airport.airport_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="returnState">Return State:</label>

                <select
                  id="returnState"
                  name="returnState"
                  onChange={(e) => setReturnState(e.target.value)}
                >
                  <option>Select</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="returnCity">Return City:</label>

                <select
                  id="returnCity"
                  name="returnCity"
                  onChange={(e) => setReturnCity(e.target.value)}
                >
                  <option>Select</option>
                  {rcities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.cityName}
                    </option>
                  ))}
                </select>
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
