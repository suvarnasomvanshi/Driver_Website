import React, { useEffect, useRef, useState } from "react";

//  import styles
import "../../styles/SupportModalStyle.css";

//  importing logo
import down_arrow from "../../assets/homepage/down-arrow.svg"
import up_arrow from "../../assets/homepage/up-arrow.svg"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import caretDown from "../../assets/icon/caretDown.png";
import logo_header from "../../assets/logo_header.png";
import useWindowDimensions from "../../utils/windowDimension";
import SupportPopUp from "../SupportPopUp/SupportPopUp";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { width, height } = useWindowDimensions();
  const location = useLocation();
  const slug = location.pathname.split("/")[1];
  console.log(slug);
  const [isSupportVisible, setIsSupportVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibleClients, setDropdownVisibleClients] = useState(false);
  const [isDropdownVisibleCompany, setDropdownVisibleCompany] = useState(false);

  const [mobile, setMobile] = useState(false);

  // document.addEventListener('click',function(event){
  //   if (!event.target.matches("#support-button")) {
  //     setIsSupportVisible(false)
  //   }
  // })

  useEffect(() => {
    if (width > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [width]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [caret, setCaret] = useState(false);
  const [isMobile, setIsMobile] = useState(width < 768 ? true : false);
  const inputRef = useRef();
  const path = location.pathname;
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (inputRef.current.value !== "") {
      if (event.key === "Enter") {
        navigate(
          `/blogs/universal-search?search=${inputRef.current.value}&page=1`
        );
      }
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Products",
      link: "",
      dropdown: [
        {
          text: "HIMS",
          link: "/products/hims",
          sub: "Hospital Information Management System",
        },
        {
          text: "RIC-PACS",
          link: "/products/rispacs",
          sub: "Radiology Information System",
        },
        {
          text: "DMS",
          link: "/products/dms",
          sub: "Document Management System",
        },
        {
          text: "Edukares",
          link: "/products/edukares",
          sub: "Education Management System",
        },
        {
          text: "BI & MIS",
          link: "/products/bimis",
          sub: "Business Intelligence & Management Information System",
        },
        {
          text: "SLIMS",
          link: "/products/slims",
          sub: "Sample Lifecycle Management System",
        },
        {
          text: "EMS",
          link: "/products/ems",
          sub: "Equipment Management System",
        },
        {
          text: "Integrations",
          link: "/integration",
        },
      ],
    },
    {
      text: "Clients",
      link: "",
      dropdown: [
        {
          text: "Clients",
          link: "/clients",
        },
        {
          text: "Testimonials",
          link: slug === "clients" ? "#testimonials" : "/clients#testimonials",
        },
        {
          text: "Support Services",
          link: "/support",
        },
      ],
    },
    {
      text: "Company",
      link: "",
      dropdown: [
        {
          text: "About Us",
          link: "/about",
        },
        {
          text: "Contact Us",
          link: "/contactus",
        },
        {
          text: "Careers",
          link: "/careers",
        },
        {
          text: "Brochures & Collaterals",
          link: "/brochuresandcollaterals",
        },
        {
          text: "Gallery",
          link: "/gallery",
        },
      ],
    },
    {
      text: "Blog",
      link: "/blogs",
    },
    {
      text: "Partners",
      link: "/partners",
    },
  ];
  const handleDropdown = (e,text) => {
    // console.log('debug menu')
    // console.log(e.target)
  
    if (text !== "") {
      setCaret({ status: true, text: text });
    } else {
      setCaret({ status: false, text: text });
    }
    console.log(caret);
  };
  return (
    <>
      <header
        className="md:justify-between justify-center items-center hidden md:flex bg-white"
        style={{
          width: "100vw",
          height: "80px",
          zIndex: "999999999",
          // top: 0,
          // position: "fixed",
          backgroundColor: "white",
        }}
      >
        <div className="pl-5">
          <Link to="/">
            <img src={logo_header} alt="logo" className={styles.logo_name} />
          </Link>
        </div>
        <nav>
          <div className={`${styles.navContainer} z-[999999]`}>
            <div
              className={` flex flex-gow-1 md:w-auto w-screen `}
              style={{
                height: "100%",
                justifyContent: !mobile && "flex-end",
                alignItems: "center",
              }}
            >
              <ul className={` hidden md:flex`}>
                {/* *** */}
                {navLinks.map((item, i) => {
                  const isHomeLink = item.text === "Home" || item.text === "Blog" || item.text === "Partners";
                  return (
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      key={i}
                      className={`${styles.dropdown} ${
                        isDropdownOpen ? styles.open : ""
                      } nav-link-no-dropdown lg:mr-[32px] mr-[5px] pl-3 py-1 text-[16px] text-[#6D747A]`}
                      onClick={toggleDropdown}
                    >
                      <NavLink
                        to={item.link}
                        style={({ isActive }) => {
                          return { color: isActive ? "#" : "" };
                        }}
                        // style={{
                        //   color: isHomeLink ? "#6D747A !important" : "#6D747A !important", // Set the desired color
                        //   borderBottom: "none",
                        // }}
                        onMouseOver={(e) => handleDropdown(e,item.text)}
                        onMouseLeave={() => handleDropdown("")}
                        id={isHomeLink ? "buttonhover" : "" }
                      >
                      {/* <NavLink
                        to={item.link}
                        style={({ isActive }) => ({
                          // color: isHomeLink ? "#6D747A" : isActive ? "#" : "",
                          borderBottom: "none", // Initially, set borderBottom to none
                        })}
                        onMouseOver={() => handleDropdown(item.text)}
                        onMouseLeave={() => handleDropdown("")}
                        // id={isHomeLink ? "homebuttonHover" : ""}
                        id={isHomeLink ? "buttonhover" : "" }
                      > */}
                        <div
                          className={`${styles.caretDropDown} font-notoSans text-[16px] font-normal`}
                        >
                          {item?.text}
                          {item?.dropdown && (
                            //caretDown
                            <img
                              src={caretDown}
                              alt="search icon"
                              style={{
                                transform:
                                  caret.status === true &&
                                  caret.text === item.text
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                              }}
                              className={styles.caretImage + " ml-2"}
                            />
                          )}
                        </div>
                      </NavLink>

                      {item.dropdown && (
                        <ul
                          className={`${styles.dropdownContent}`}
                          style={{
                            borderRadius: "0px",
                            borderTop: "2px solid #4d7eed",
                            minWidth: "max-content",
                          }}
                          onMouseOver={() => handleDropdown(item.text)}
                          onMouseLeave={() => handleDropdown("")}
                        >
                          {item?.dropdown?.map((e, i) => {
                            return (
                              <li
                                key={i}
                                onMouseOver={() => setCaret(true)}
                                onMouseLeave={() => setCaret(false)}
                                className=" hover:text-blue-500 text-[16px] font-notoSans  max-w-[300px] h-auto !py-[6px] px-6"
                              >
                                {slug === "clients" && e.link === "#testimonials"? (
                                  <a
                                    className="hover:text-blue-500 text-[16px] font-notoSans"
                                    href={e.link}
                                  >
                                    {e.text}
                                    {e.sub && (
                                      <span className="block !text-[14px] font-notoSans !text-[#6D747A] font-normal py-1 hover:text-black">
                                        {e.sub}
                                      </span>
                                    )}
                                  </a>
                                ) : (
                                  <Link
                                    className="hover:text-blue-500 text-[16px] font-notoSans"
                                    to={e.link}
                                  >
                                    {e.text}
                                    {e.sub && (
                                      <span className="block !text-[14px] font-notoSans !text-[#6D747A] font-normal py-1 hover:text-black">
                                        {e.sub}
                                      </span>
                                    )}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            {!mobile && (
              <div className={styles.navBtn}>
                <button
                  className="flex items-center justify-between p-2 bg-[#146DFA] ml-[16px] font-medium rounded-md text-white mr-5"
                  onClick={() => setIsSupportVisible(true)}
                  id="support-button"
                >
                  Support
                  {/* <img
                    className="chevron-down-4"
                    alt="Chevron down"
                    src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down.svg"
                  /> */}
                  <img src={isSupportVisible ? up_arrow : down_arrow} alt="arrow" />
                </button>
              </div>
            )}
          </div>
        </nav>

        {isSupportVisible ? (
          <SupportPopUp
            setIsSupportVisible={setIsSupportVisible}
            isSupportVisible={isSupportVisible}
          />
        ) : (
          ""
        )}
      </header>
      <div
        className=" py-3 md:hidden flex justify-between items-center w-screen bg-white "
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="md:hidden relative" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <div className=" flex !justify-between w-screen pl-5">
              <Link to="/">
                <img
                  src={logo_header}
                  alt="logo"
                  className={`${styles.logo_name} `}
                />
              </Link>
              <FaTimes className="text-3xl cursor-pointer w-fit pr-5" />
            </div>
          ) : (
            //x
            <div className=" flex !justify-between w-screen pl-5">
              <Link to="/">
                <img
                  src={logo_header}
                  alt="logo"
                  className={`${styles.logo_name} `}
                />
              </Link>
              <FaBars className="text-3xl cursor-pointer w-fit pr-5" />
            </div>
          )}
        </div>
      </div>
      {isMobileMenuOpen && mobile ? (
        <div className={styles.mobilenav}>
          <MobileMenu
            navLinks={navLinks}
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            caret={caret}
            handleDropdown={handleDropdown}
            toggleDropdown={toggleDropdown}
          ></MobileMenu>
        </div>
      ) : null}
    </>
  );
};

export default Header;
