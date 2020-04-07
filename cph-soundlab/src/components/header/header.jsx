import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="header u-flex u-space-between">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
