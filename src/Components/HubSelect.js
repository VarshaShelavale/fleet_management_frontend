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

  const handleHubSelection = (event) => {
    setSelectedHub(event.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(selectedHub);
    navigate("/carcategory/" + selectedHub);
  };
  return (
    <div className="hubSelectContainer">
      <form className="hubForm" onSubmit={submitForm}>
        +
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
