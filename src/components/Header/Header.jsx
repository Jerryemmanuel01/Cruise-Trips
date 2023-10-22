import React from "react";
import "./header.scss";
import { BiSearchAlt } from "react-icons/bi";


const Header = ({ setCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = document.getElementById("cityName").value;
    setCity(city);
  };
  return (
    <div className="header">
      <div className="title">Criuse Trips</div>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputBar"
            placeholder="Search for a place..."
            id="cityName"
          />
          <button>
            <BiSearchAlt className="searchBtn" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
