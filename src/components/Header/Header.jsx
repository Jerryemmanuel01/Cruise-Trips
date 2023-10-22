import React from "react";
import "./header.scss";
import { BiSearchAlt } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header">
      <div className="title">Criuse Trips</div>
      <div className="searchBar">
        <form>
          <input type="text" className="inputBar" placeholder="Search for a place..." />
          <button type="submit">
            <BiSearchAlt className="searchBtn" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
