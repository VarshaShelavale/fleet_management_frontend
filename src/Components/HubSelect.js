import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./HubSelect.css";

function HubSelect() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState("");
  const navigate = useNavigate();
  useEffect((e) => {
    if (state === "airportid") {
      fetch("http://localhost:8080/api/hub/" + id)
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
        });
    }
  }, []);
  useEffect((e) => {
    if (state === "cityid") {
      fetch("http://localhost:8080/api/hubs/" + id)
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
        });
    }
  }, []);
  useEffect((e) => {
    if (state == null && sessionStorage.getItem("pickupcityid")) {
      fetch(
        "http://localhost:8080/api/hubs/" +
          sessionStorage.getItem("pickupcityid")
      )
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
        });
    }
  }, []);
  useEffect((e) => {
    if (state == null && sessionStorage.getItem("pickupairid")) {
      fetch(
        "http://localhost:8080/api/hub/" + sessionStorage.getItem("pickupairid")
      )
        .then((res) => res.json())
        .then((data) => {
          setHubs(data);
        });
    }
  }, []);
  const handleHubSelection = (event) => {
    if (state) {
      sessionStorage.setItem("returnhubid", event.target.value);
      console.log(event.target.value);
    }
    if (state == null) {
      sessionStorage.setItem("pickuphubid", event.target.value);
    }
    setSelectedHub(event.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (state) {
      navigate("/pickuphubs");
    }
    if (state == null) {
      navigate("/carcategory/" + selectedHub);
    }
  };
  return (
    <div className="hubSelectContainer">
      <form className="hubForm" onSubmit={submitForm}>
        {state ? (
          <p>
            Please select your <strong>return </strong>location..
          </p>
        ) : (
          <p>
            Please select your <strong> pickup </strong>location..
          </p>
        )}
        {hubs.map((hub) => (
          <div key={hub.Hub_id} className="hubOption">
            <input
              type="radio"
              id={`hubRadio${hub.Hub_id}`}
              name="hubRadio"
              value={hub.hub_id}
              checked={selectedHub === hub.hub_id.toString()}
              onChange={handleHubSelection}
              style={{ marginRight: "10px" }}
            />
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubName">
              {hub.hub_Name}
            </label>
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubDetails">
              {hub.contact}
            </label>
            <label htmlFor={`hubRadio${hub.Hub_id}`} className="hubDetails">
              {hub.address}
            </label>
          </div>
        ))}
        <button type="submit" className="continueButton">
          Continue Booking
        </button>
      </form>
    </div>
  );
}

export default HubSelect;
