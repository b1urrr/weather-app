import React, { useState } from "react";
import { BsCloudSun } from "react-icons/bs";
import {ImSearch } from "react-icons/im"

import './navbar.css'

const Navbar = ({ setCity }) => {
  const [newCity, setNewCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity([newCity]);
    setNewCity('')
  };
  return (
    <div className="w__navbar">
      <div className="w__navbar_logo">
        <BsCloudSun className="w__navbar_logo-icon"/>
        <p>realClouds</p>
      </div>
      <div className="w__navbar_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Търси град..."
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          id="newCity"
        />
        <button type="submit"><ImSearch/></button>
      </form>
      </div>
    </div>
  );
};

export default Navbar;
