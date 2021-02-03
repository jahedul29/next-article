import React from "react";
import headerStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h2 className={headerStyle.title}>Welcome to next</h2>
      <p className={headerStyle.description}>Stay updated with next news</p>
    </div>
  );
};

export default Header;
