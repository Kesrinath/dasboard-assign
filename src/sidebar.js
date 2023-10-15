import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsBank,
  BsPeopleFill,
  BsFillChatLeftFill,
  BsFillPatchMinusFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsGrid1X2Fill className="icon" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsBank className="icon" /> Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillPatchMinusFill className="icon" /> Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillChatLeftFill className="icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
