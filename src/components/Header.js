import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg m-2 ">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex mr-8 gap-4">
          <li>Online:{onlineStatus === true ? "✔" : "❤"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart-({cartItem.length} items)</Link>
          </li>
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
