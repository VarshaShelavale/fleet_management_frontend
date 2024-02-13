import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import "./CarCategorymodule.css";
function CarCategory() {
  const { id } = useParams();
  const [carcategory, setCarCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/cars/" + id)
      .then((res) => res.json())
      .then((data) => setCarCategory(data));
  }, []);
  const handleSubmit = () => {
    navigate("/addon");
  };
  console.log(carcategory[0]?.cartype_Master);
  return carcategory.map((car) => (
    <MDBTable align="middle">
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
              <img
                src={car.cartype_Master.image_Path}
                alt={car.cartype_Master.Cartype_Name}
                style={{ width: "150px", height: "130px" }}
                className="rounded-circle"
              />
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
            <MDBBtn color="link" rounded size="sm" onClick={handleSubmit}>
              Select
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  ));

  // <table className="car-table">
  //   <thead>
  //     <tr>
  //       <th>Car Type ID</th>
  //       <th>Car Type Name</th>
  //       <th>Daily Rate</th>
  //       <th>Weekly Rate</th>
  //       <th>Monthly Rate</th>
  //       <th>Image</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {carcategory.map((car) => (
  //       <tr key={car.cartype_Master.cartype_id}>
  //         <td>{car.cartype_Master.cartype_id}</td>
  //         <td>{car.cartype_Master.cartype_Name}</td>
  //         <td>${car.cartype_Master.daily_Rate}</td>
  //         <td>${car.cartype_Master.weekly_Rate}</td>
  //         <td>${car.cartype_Master.month_Rate}</td>
  //         <td>
  //           <img
  //             className="car-image"
  //             src={"./" + car.image_Path}
  //             alt={car.Cartype_Name}
  //           />
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
}

export default CarCategory;
