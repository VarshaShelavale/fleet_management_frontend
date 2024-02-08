import { NavLink } from "react-router-dom";
import "./Navbar.Module.css";
function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/reservation">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cancelbooking">Cancel Booking</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cutomercare">Customer care </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
