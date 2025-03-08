import { Link } from "react-router";
import { LOGO } from "../../utils/urls";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                {LOGO}
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/groceries" className="nav-link">Groceries</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Cart</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;