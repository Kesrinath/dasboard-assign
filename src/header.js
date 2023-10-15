import React from "react";
import { BsSearch, BsJustify } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <h1 style={{ fontSize: "1.5rem", color: "black" }}>
          Hello Shahrukh <MdAccessibilityNew className="icon" />,
        </h1>{" "}
      </div>
      <div className="header-right">
        <BsSearch className="icon" />
      </div>
    </header>
  );
}

export default Header;
