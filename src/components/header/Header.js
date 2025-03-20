import { Link } from "react-router";
import { LOGO } from "../../utils/urls";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Header = () => {
  const cartItem = useSelector((store) => store.cartReducer.items);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header flex justify-between p-5 shadow bg-white sticky-top">
      <div className="logo w-20">{LOGO}</div>
      <ul className="nav flex justify-between p-4">
        <li className="nav-item pr-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item pr-5">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item pr-5">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item pr-5">
          <Link to="/groceries" className="nav-link">
            Groceries
          </Link>
        </li>
        <li className="nav-item pr-5">
          <Link to="/cart" className="nav-link flex items-center">
            <FaCartPlus className="mr-1" /> {cartItem.length}
          </Link>
        </li>

        <li className="nav-item pr-5"> USER: {loggedInUser}</li>
      </ul>
    </div>
  );
};
export default Header;
