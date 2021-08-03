import React from "react";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import "./base.css";

function Base({ className = "", children }) {
  return (
    <div className="App">
      <NavbarComponent />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
}

export default Base;
