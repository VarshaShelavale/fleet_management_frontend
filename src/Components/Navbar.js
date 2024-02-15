import { NavLink } from "react-router-dom";
import "./Navbar.Module.css";
import { useSelectedOptions } from "./SelectedOptionsContext/SelectedOptionsContext";
import { Button } from "react-bootstrap";

function Navbar() {
  const { isAuthenticated, logout } = useSelectedOptions();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/memberresister">Member Registration</NavLink>
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
          {!isAuthenticated ? (
            <li className="login-button">
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li className="login-button">
              <button to="/" onClick={logout}>
                Logout
              </button>
            </li>
          )}

          {/* <li>
            <NavLink to="/cutomercare">Customer care </NavLink>
          </li>
          <li className="login-button">
            <NavLink to="/login">Login</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
