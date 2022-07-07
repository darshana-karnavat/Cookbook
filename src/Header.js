import React from "react";
import logo from "./images/chef-hat.svg";
function Header() {
  return (
    <div className="header">
      <h1 className="bg-warning bg-gradient rounded d-flex justify-content-center">
        CookBook
      </h1>
      <img src={logo} />
    </div>
  );
}

export default Header;
