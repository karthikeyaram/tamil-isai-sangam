import React from "react";
import logo1 from '../../Assets/img/logo_new.jpg';

const Sidebar = ({ menuItems }) => {
  if (!menuItems || !Array.isArray(menuItems)) {
    return <div>No menu items available</div>; 
  }

  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={logo1} alt="Logo" style={{ marginTop: "25px", borderRadius: "10px" }} />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <a href={item.path}>{item.title}</a>
            {item.submenu && (
              <ul className="dropdown">
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href={sub.link}>{sub.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
