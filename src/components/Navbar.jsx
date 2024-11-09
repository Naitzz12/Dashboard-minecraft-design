import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App"
import img1 from "../assets/minecraft-grass-block.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={img1} alt="Minecraft Dash" />
          <div className="bar">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Membership</a>
          </li>
        </ul>
      </nav>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Navbar;
