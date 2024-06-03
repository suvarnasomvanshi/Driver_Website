import { Link, NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.css";

import logo_header from "../../assets/logo_header.png";
import caretDown from "../../assets/icon/caretDown.png";
import { useEffect, useState } from "react";
const MobileMenu = ({ navLinks,handleDropdown,mobileDropdown,setMobileDropdown,caret }) => {
  const [active, setActive] = useState(false);
  console.log("navlinks", navLinks);

  const menuToogle = (item) => {
    setActive(!active);
    setMobileDropdown(!mobileDropdown);
    if (active && item.dropdown ) {
      handleDropdown("")
      
    } else {
      handleDropdown(item.text)
    }

  };


  return (
    <div className="">
      
      <div className="absolute left-0 top-20 w-screen flex flex-col z-50">
        {navLinks.map((item, i) => {
          return (
            <li
              key={i}
              // className={` ${
              //   mobileDropdown && item.text === "News" ? styles.active : ""
              // }`}
              onClick={() => menuToogle(item)}
            >
              <NavLink
                to={item.link}
                className="flex items-center justify-between bg-white px-4 py-2 "
              >
                {item?.text}
                {item?.dropdown && (
                  <img
                    src={caretDown}
                    alt="search icon"
                    className={styles.dropdownicon}
                    style={{
                      transform:
                        caret.status === true && caret.text === item.text
                          ? "rotate(0deg)"
                          : "rotate(180deg)",
                    }}
                  />
                )}
              </NavLink>

              {caret.status === true && caret.text === item.text ? (
                <ul
                  className=" bg-white px-4 py-2"
                  style={{
                    borderRadius: "0px",
                    borderTop: "2px solid #4d7eed",
                    minWidth: "max-content",
                  }}
                >
                  {item?.dropdown?.map((item, i) => {
                    return (
                      <li key={i} className="border-b border-gray-300 py-2">
                        <Link to={item.link}>{item.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
