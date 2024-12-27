import React from "react";
import { FaBell, FaEnvelope, FaUserCircle, FaCog, FaQuestionCircle, FaLock, FaSignOutAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="notifications">
        <FaBell className="icon" />
      </div>
      <div className="messages">
        <FaEnvelope className="icon" />
      </div>
      <div className="profile-dropdown">
        <FaUserCircle className="profile-icon" />
        <span className="admin-name">Admin Name</span>
        <ul className="dropdown-menu">
          <li>
            <a href="/profile">
              <FaUserCircle /> Profile
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog /> Settings
            </a>
          </li>
          <li>
            <a href="/help">
              <FaQuestionCircle /> Help
            </a>
          </li>
          <li>
            <a href="/logout">
              <FaSignOutAlt /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
