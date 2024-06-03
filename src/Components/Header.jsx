import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

//  import styles
import "../styles/Navbarstyle.css";
import "../styles/SupportModalStyle.css";

//  importing logo
import { Link, useLocation } from "react-router-dom";
import logo_header from "../assets/logo_header.png";
import useWindowDimensions from "../utils/windowDimension";
import SupportPopUp from "./SupportPopUp/SupportPopUp";

const Header = () => {
  const { width, height } = useWindowDimensions();
  const location = useLocation();
  const [isSupportVisible, setIsSupportVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibleClients, setDropdownVisibleClients] = useState(false);
  const [isDropdownVisibleCompany, setDropdownVisibleCompany] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (width > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [width]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header
        className="md:justify-between justify-center items-center "
        style={{
          width: "100vw",
          height: "80px",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          zIndex: "99999999999999999",
          top: 0,
          position: "fixed",
          backgroundColor: "white",
        }}
      >
        <div
          className="md:block hidden"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "40px",
          }}
        >
          <Link to="/">
            <img src={logo_header} alt="logo_header" />
          </Link>
        </div>
        <nav
          className="flex flex-grow-1 md:w-auto w-screen "
          style={{
            height: "100%",
            justifyContent: mobile ? "flex-end" : "center",
            alignItems: "center",
            // backgroundColor: "yellow",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
        >
          <ul
            // style={{
            //   display: "flex",
            //   flex: 1,
            //   justifyContent: "end",
            //   alignItems: "center",
            //   // backgroundColor : "red"
            // }}
            className="hidden md:flex"
          >
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px]"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px]"
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link flex justify-center items-center"
                href="/#products"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisible(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisible(false);
                }}
              >
                Products
                <FaChevronDown className={`mx-1 text-[12px] relative`} />
              </a>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  minWidth: "max-content",
                  marginTop: "575px",
                }}
                className={`dropdown-menu ${isDropdownVisible ? "show" : ""}`}
                onMouseOver={() => {
                  setDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisible(false);
                }}
              >
                <li>
                  <Link to="/products/hims">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      HIMS
                    </span>
                    <p className="text-sm ml-4">
                      Hospital Information Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/rispacs">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      RIC-PACS
                    </span>
                    <p className="text-sm ml-4">Radiology Information System</p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/dms">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      DMS
                    </span>
                  </Link>
                  <p className="text-sm ml-4">Document Management System</p>
                </li>
                <li>
                  <Link to="/products/edukares">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      Edukares
                    </span>
                    <p className="text-sm ml-4">
                      Digital Campus Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/bimis">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      BI & MIS
                    </span>
                    <p className="text-sm ml-4">Business Intelligence & MIS</p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/slims">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      SLIMS
                    </span>
                    <p className="text-sm ml-4">
                      Suvarna Laboratory Information Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/emr">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      EMS
                    </span>
                    <p className="text-sm ml-4">Electronic Medical Record</p>
                  </Link>
                </li>
                <li>
                  <Link to="/integration">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      Integrations
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px]"
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                href="void(0)"
                className="nav-link flex justify-center items-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisibleClients(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisibleClients(false);
                }}
              >
                Clients
                <FaChevronDown className={`mx-1 text-[12px]`} />
              </a>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  marginTop: "160px",
                }}
                className={`dropdown-menu ${
                  isDropdownVisibleClients ? "show" : ""
                }`}
                onMouseOver={() => {
                  setDropdownVisibleClients(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisibleClients(false);
                }}
              >
                <li>
                  {location.pathname === "/clients" ? (
                    <a
                      href="#clients"
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Clients
                    </a>
                  ) : (
                    <Link
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                      to="/clients"
                    >
                      Clients
                    </Link>
                  )}
                </li>
                <li>
                  {location.pathname === "/clients" ? (
                    <a
                      href="#testimonial"
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Testimonials
                    </a>
                  ) : (
                    <Link
                      to={"/clients"}
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Testimonials
                    </Link>
                  )}
                </li>
                <li>
                    <Link
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                      to="/support"
                    >
                      Support Services
                    </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px]"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link flex justify-center items-center"
                to="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisibleCompany(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisibleCompany(false);
                }}
              >
                Company
                <FaChevronDown className="mx-1 text-[12px]" />
              </Link>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  marginTop: "240px",
                }}
                className={`dropdown-menu ${
                  isDropdownVisibleCompany ? "show" : ""
                }`}
                onMouseOver={() => {
                  setDropdownVisibleCompany(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisibleCompany(false);
                }}
              >
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/brochuresandcollaterals"
                  >
                    Brochures & Collaterals
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px]"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link"
                to="/blogs"
              >
                Blog
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px]"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link"
                to="/partners"
              >
                Partners
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item lg:mr-[20px] mr-[5px]"
            >
              <button
                id="btnsup"
                className="flex btn btn-primary ml-1 font-medium"
                onClick={() => {
                  setIsSupportVisible(true);
                }}
              >
                Support
                <img
                  className="chevron-down-4"
                  alt="Chevron down"
                  src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down.svg"
                />
              </button>
            </li>
          </ul>

          {/* Mobile menu */}
          <div className="md:hidden relative" onClick={handleMobileMenuToggle}>
            <FaBars className="text-3xl cursor-pointer" />
            {isMobileMenuOpen && (
              <FaTimes className="text-3xl cursor-pointer z-50 absolute top-0 right-0" />
            )}
          </div>
          <ul
            className={`${
              isMobileMenuOpen && mobile ? "flex md:hidden " : "hidden"
            }  flex-col md:flex-row items-start justify-start md:justify-end bg-white   h-fit w-screen md:h-auto md:w-auto absolute top-0 right-0 pt-2 pl-2 pb-4`}
          >
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "start",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 "
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link active pl-3 py-2"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg pl-3 py-1"
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link flex justify-center items-center"
                href="/#products"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisible(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisible(false);
                }}
              >
                Products
                <FaChevronDown className={`mx-1 text-[12px] relative`} />
              </a>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  minWidth: "max-content",
                  marginTop: "575px",
                }}
                className={`dropdown-menu ${isDropdownVisible ? "show" : ""}`}
                onMouseOver={() => {
                  setDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisible(false);
                }}
              >
                <li>
                  <Link to="/products/hims">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      HIMS
                    </span>
                    <p className="text-sm ml-4">
                      Hospital Information Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/rispacs">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      RIC-PACS
                    </span>
                    <p className="text-sm ml-4">Radiology Information System</p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/dms">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      DMS
                    </span>
                  </Link>
                  <p className="text-sm ml-4">Document Management System</p>
                </li>
                <li>
                  <Link to="/products/edukares">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      Edukares
                    </span>
                    <p className="text-sm ml-4">
                      Digital Campus Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/bimis">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      BI & MIS
                    </span>
                    <p className="text-sm ml-4">Business Intelligence & MIS</p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/slims">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      SLIMS
                    </span>
                    <p className="text-sm ml-4">
                      Suvarna Laboratory Information Management System
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/products/emr">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      EMS
                    </span>
                    <p className="text-sm ml-4">Electronic Medical Record</p>
                  </Link>
                </li>
                <li>
                  <Link to="/integration">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-2"
                    >
                      Integrations
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg"
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                href="void(0)"
                className="nav-link flex justify-center items-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisibleClients(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisibleClients(false);
                }}
              >
                Clients
                <FaChevronDown className={`mx-1 text-[12px]`} />
              </a>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  marginTop: "160px",
                }}
                className={`dropdown-menu ${
                  isDropdownVisibleClients ? "show" : ""
                }`}
                onMouseOver={() => {
                  setDropdownVisibleClients(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisibleClients(false);
                }}
              >
                <li>
                  {location.pathname === "/clients" ? (
                    <a
                      href="#clients"
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Clients
                    </a>
                  ) : (
                    <Link
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                      to="/clients"
                    >
                      Clients
                    </Link>
                  )}
                </li>
                <li>
                  {location.pathname === "/clients" ? (
                    <a
                      href="#testimonial"
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Testimonials
                    </a>
                  ) : (
                    <Link
                      to={"/clients"}
                      style={{
                        display: "flex",
                        justifyContent: "between",
                        alignItems: "center",
                      }}
                      className="dropdown-item my-1"
                    >
                      Testimonials
                    </Link>
                  )}
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/support"
                  >
                    Support Services
                  </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link flex justify-center items-center"
                to="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseOver={(e) => {
                  setDropdownVisibleCompany(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownVisibleCompany(false);
                }}
              >
                Company
                <FaChevronDown className="mx-1 text-[12px]" />
              </Link>
              <ul
                style={{
                  borderRadius: "0px",
                  borderTop: "2px solid #4d7eed",
                  marginTop: "240px",
                }}
                className={`dropdown-menu ${
                  isDropdownVisibleCompany ? "show" : ""
                }`}
                onMouseOver={() => {
                  setDropdownVisibleCompany(true);
                }}
                onMouseLeave={() => {
                  setDropdownVisibleCompany(false);
                }}
              >
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/brochuresandcollaterals"
                  >
                    Brochures & Collaterals
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                    className="dropdown-item my-1"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link"
                to="/blogs"
              >
                Blog
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-link-no-dropdown lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg"
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
                className="nav-link"
                to="/partners"
              >
                Partners
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
              }}
              className="nav-item lg:mr-[20px] mr-[5px] pl-3 py-1 text-lg"
            >
              <button
                id="btnsup"
                className="flex btn btn-primary ml-1 font-medium"
                onClick={() => {
                  setIsSupportVisible(true);
                }}
              >
                Support
                <img
                  className="chevron-down-4"
                  alt="Chevron down"
                  src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down.svg"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {isSupportVisible ? (
        <SupportPopUp
          setIsSupportVisible={setIsSupportVisible}
          isSupportVisible={isSupportVisible}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
