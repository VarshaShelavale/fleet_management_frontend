import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  console.log("git trial");
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </>
  );
}

export default Home;
