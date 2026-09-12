import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

 const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="Food Delivery Logo"
                />
            </div>

            <div className="Nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                         </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Header; 