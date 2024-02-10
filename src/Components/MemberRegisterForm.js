import { useState } from "react";
import "./MemberReg.css";
function MemberRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    dlNumber: "",

    passportNo: "",
    adhaarNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Post form data to backend
    fetch("http://localhost:8080/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container">
      <form className="customerForm" onSubmit={handleSubmit}>
        <br />
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Mobile Number"
          onChange={handleChange}
          name="mobileNumber"
          value={formData.mobileNumber}
        />

        <br />
        <label>Email Id</label>
        <input
          type="email"
          placeholder="Email Id"
          onChange={handleChange}
          name="emailId"
          value={formData.emailId}
        />

        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <br />
        <label>Local Driving Lic</label>
        <input
          type="text"
          placeholder="dL Number"
          onChange={handleChange}
          name="dLNumber"
          value={formData.dLNumber}
        />

        <br />

        <label>Passport Number</label>
        <input
          type="text"
          placeholder="Enter Passport Number"
          onChange={handleChange}
          name="passportNo"
          value={formData.passportNo}
        />

        <br />

        <label>Adhaar Number</label>
        <input
          type="text"
          placeholder="Enter Adhaar Number"
          onChange={handleChange}
          name="aadharNo"
          value={formData.aadharNo}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MemberRegisterForm;
