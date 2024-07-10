import React, { useState } from "react";

import menuIcon from "../public/icons/menu.svg";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        src={menuIcon}
        alt="Menu"
        className="w-6 h-6 cursor-pointer"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="dropdown-menu">{/* Dropdown menu items go here */}</div>
      )}
    </div>
  );
}
