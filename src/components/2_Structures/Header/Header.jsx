import React from "react";
import "../Header/Header.css";
import Logo from "../../../assets/img/argentBankLogo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
    </nav>
  );
}

export default Header;
