import cart_img from "../images/cart_icon.png";
import user_img from "../images/profile_icon.png";
import search_img from "../images/search_icon.png";
import logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div
        className="container"
        style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 500,
          lineHeight: "20px",
          fontSize: "14px",
          color: "red",
        }}
      >
        <div>
          <Link to="/" className="navbar-brand fw-bold fs-3">
            <img src={logo} alt="Logo" width="100" height="50" />
          </Link>
        </div>

        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-link text-dark text-uppercase ${isActive ? "active" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link text-dark text-uppercase ${isActive ? "active" : ""}`
            }
            to="/collection"
          >
            Collection
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link text-dark text-uppercase ${isActive ? "active" : ""}`
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link text-dark text-uppercase ${isActive ? "active" : ""}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="d-flex gap-3">
          <Link to="/search">
            <img src={search_img} alt="Search" width="20" height="20" />
          </Link>

          <Link to="/profile">
            <img src={user_img} alt="User" width="20" height="20" />
          </Link>

          <Link to="/cart">
            <img src={cart_img} alt="Cart" width="20" height="20" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;