import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnReact("logout")
                : setBtnReact("login");
            }}
          >
            {btnNameReact}
          </button>
          :
        </ul>
      </div>
    </div>
  );
};

export default Header;
