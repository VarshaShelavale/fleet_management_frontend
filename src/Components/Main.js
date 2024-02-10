import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Customercare from "./Customercare";
import CancelBooking from "./CancelBooking";
import ReservationForm from "./ReservationForm";
import MemberRegisterForm from "./MemberRegisterForm";
import Login from "./Login";
function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/cutomercare"
              element={<Customercare></Customercare>}
            ></Route>
            <Route
              path="/cancelbooking"
              element={<CancelBooking></CancelBooking>}
            ></Route>
            <Route
              path="/reservation"
              element={<ReservationForm></ReservationForm>}
            ></Route>
            <Route
              path="/memberresister"
              element={<MemberRegisterForm></MemberRegisterForm>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
