import React from "react";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.Header}>
      <div>
        <nav className={`${headerStyles.navStyle} ${headerStyles.shrink}`}>
          DO usunięcia
        </nav>
      </div>
    </header>
  );
};

export default Header;
