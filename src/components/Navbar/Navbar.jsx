import "./Navbar.css";
import { useContext } from "react";
import { PropertyContext } from "../../contexts/PropertyContext";
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(PropertyContext);

  return (
    <nav className="navbar flex">
      <h1 className="logo">
        <FaHome />
        <span>HTM</span>
      </h1>
      <div className="box">
        <FaSearch />
        <input
          type="text"
          id="search"
          className="searchBox"
          placeholder="Search for properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>About</li>
        <li className="btn login">Login</li>
        <li className="btn">Signup</li>
      </ul>

      {/* Hamburger menu for smaller screens */}
      <div className="navbar__hamburger">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
