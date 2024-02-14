import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Customercare from "./Customercare";
import CancelBooking from "./CancelBooking";
import ReservationForm from "./ReservationForm";
import MemberRegisterForm from "./MemberRegisterForm";
import Login from "./Login";
import HubSelect from "./HubSelect";
import CarCategory from "./CarCategory";
import AddOnpage from "./AddOnpage";
import Booking from "./Booking";
import PickUpHub from "./PickUpHub";
import UserReg from "./UserReg";
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
              path="/"
              element={<ReservationForm></ReservationForm>}
            ></Route>
            <Route
              path="/carcategory/:id"
              element={<CarCategory></CarCategory>}
            ></Route>
            <Route path="/hubs/:id" element={<HubSelect></HubSelect>}></Route>
            <Route path="/pickuphubs" element={<PickUpHub></PickUpHub>}></Route>
            <Route path="/addon" element={<AddOnpage></AddOnpage>}></Route>
            <Route path="/booking" element={<Booking></Booking>}></Route>
            <Route path="/userReg" element={<UserReg></UserReg>}></Route>
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
