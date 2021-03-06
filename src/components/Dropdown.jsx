import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Dropdown({ closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.path}
              onClick={() => {
                closeMobileMenu();
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
