import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import "./CarCategorymodule.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";

function CarCategory() {
  const { id } = useParams();
  const [carcategory, setCarCategory] = useState([]);
  // Add state to track hover status
  const { setCartype } = useSelectedOptions();
  const [hoveredCarId, setHoveredCarId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/cars/" + id)
      .then((res) => res.json())
      .then((data) => setCarCategory(data));
  }, [id]);
  const handleSelect = (e) => {
    // sessionStorage.setItem("selectedcartype", JSON.stringify(e));
    //console.log(e);
    setCartype(e);
    navigate("/addon");
  };
  return carcategory.map((car) => (
    <MDBTable key={car.cartype_Master.cartype_id} align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Car Type Name</th>
          <th scope="col">Daily Rate</th>
          <th scope="col">Weekly Rate</th>
          <th scope="col">Monthly Rate</th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div
                className="image-container"
                onMouseEnter={() =>
                  setHoveredCarId(car.cartype_Master.cartype_id)
                }
                onMouseLeave={() => setHoveredCarId(null)}
              >
                <img
                  src={car.cartype_Master.image_Path}
                  alt={car.cartype_Master.Cartype_Name}
                  style={{ width: "150px", height: "130px" }}
                  className="rounded-circle"
                />
                {hoveredCarId === car.cartype_Master.cartype_id && (
                  <div className="image-tooltip">
                    {car.cartype_Master.cartype_Name + ","}
                    {car.car_details + ","}
                    {car.maintenance_date}
                  </div>
                )}
              </div>
              <div className="ms-3">
                <p className="fw-bold mb-1">
                  {car.cartype_Master.cartype_Name}
                </p>
              </div>
            </div>
          </td>

          <td>{car.cartype_Master.daily_Rate}</td>
          <td>{car.cartype_Master.weekly_Rate}</td>
          <td>{car.cartype_Master.month_Rate}</td>
          <td>
            <MDBBtn
              color="link"
              rounded
              size="sm"
              onClick={() => handleSelect(car)}
            >
              Select
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  ));
}

export default CarCategory;
