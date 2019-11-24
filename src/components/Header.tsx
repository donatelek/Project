import React from "react";
import Login from "./Login/Login";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.Header}>
      <div>
        <nav className={`${headerStyles.navStyle} ${headerStyles.shrink}`}>
          <Login />
        </nav>
      </div>
    </header>
  );
};

export default Header;
