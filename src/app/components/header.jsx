"use client"
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({
    name: "John Doe", // Replace this with your user's name or fetch from backend
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here using the searchQuery state
    console.log("Performing search for:", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="upper-navbar">
        <div className="navbar-logo" id="logo">
          <Image src="/logo.png"className="logo-img" alt="Logo" width={40} height={40} />
        </div>
        <div className="navbar-search" id="search" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Search...."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-btn">
            <Image src="/search.svg" alt="Search" width={25} height={25} className="btn2" />
          </button>
        </div>
        <div className="navbar-profile" id="profiler">
          <button className="btn2">Profile ({user.name})</button>
          <button className="btn2">Cart</button>
          <button className="btn2">Login</button>
          <button className="btn2">Logout</button>
        </div>
      </div>
      <div className="navbar-lower">
        <a href="#" className="nav-link active">
          Home
        </a>
        <a href="#" className="nav-link">
          Medicines
        </a>
        <a href="#" className="nav-link">
          Lab-Test
        </a>
        <a href="#" className="nav-link">
          Consult
        </a>
        <a href="#" className="nav-link">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Header;
