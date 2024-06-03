import "../styles/partners.css"
import React, { useEffect, useState } from "react";

import { Footer } from "../Components/Footer";
import ReCaptchaV2 from "react-google-recaptcha";
import SmallBlueWave from "../Components/SmallBlueWave";
import bluetick from "../assets/partners/blue-tick.svg"
import business_deal from "../assets/partners/business-deal.svg"
import fetchData from "../utils/Api";
import financial from "../assets/financial.svg";
import partner_illustration from "../assets/partners/Image1.svg"
import partners_vector from "../assets/partners.png";
import proven_svg from "../assets/proven_svg.svg";
import structured from "../assets/structured.svg";
import support from "../assets/support.svg";
import tick_icon from "../assets/Frame 482931.png";
import toast from "react-hot-toast";
import { validatePartnerData } from "../utils/PartnerFormValidation";
import whitetick from "../assets/partners/white-tick.svg"
import { useCreatePartnerMutation } from "../redux/features/contact/contactApi";
import PhoneInput from "react-phone-input-2";
import LoadingSpinner from "../Components/common/LoadingSpiner";

// import business_deal from "../assets/Business deal-amico (1) 2.png";
// import partner_illustration from "../assets/partner_illustration.png";

const Partners = () => {
    const [submitData, { isLoading, isError, isSuccess }] =
      useCreatePartnerMutation();
    const [disabledState, setdisabledState] = useState(true);
    const [policycheck, setpolicy] = useState(false);
    const [emailValid, setemailValid] = useState(true);
    const [PhoneValid, setPhoneValid] = useState(true);
    const [recaptcha, setrecaptcha] = useState(false);

    const [allFilled, setAllFilled] = useState(false);
    const [phone_number, setphone_number] = useState("");
    const [alt_phone_number, setAltPhone_number] = useState("");
    const [firstName, setFirtsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [address,setAddress] = useState("");
      const [state, setState] = useState("");
    const [postal_code, setPostal_code] = useState("");
    const [fieldError, setFieldError] = useState({
      first_name: "",
      last_name: "",
      orgName: "",
      email: "",
      phone_number: "",
      alt_phone_number: "",
      city: "",
      country: "",
      message: "",
      policycheck: "",
      captchaError: "",
      address: "",
      state: "",
      postal_code: "",
    });

    const handlerecaptcha = (e) => {
      setrecaptcha(e);
      // console.log(recaptcha)
    };
    const handlepolicycheck = (e) => {
      setpolicy(!policycheck);
      console.log(policycheck);
    };

    const [formData, setFormData] = useState({
      fist_name: "",
      orgName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      message: "",
    });
    const resetFields = () => {
      setphone_number("");
      setAltPhone_number("");
      setFirtsName("");
      setOrgName("");
      setEmail("");
      setCity("");
      setCountry("");
      setMessage("");
      setpolicy(false);
      setrecaptcha("");
      setdisabledState(true);
    };

    // useEffect(() => {
    //   if (window.location.hash === '#contactusForm') {
    //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }, []);

    async function verifyEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email);

      setemailValid(isValid);
      return isValid;
    }

    useEffect(() => {
      console.log(policycheck, recaptcha);
      if (!firstName.match(/^[a-z A-Z]*$/)) {
        // alert("Name should contain only alphabets");
        setFieldError((prev) => ({
          ...prev,
          first_name: "Name should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          first_name: "",
        }));
      }
      if (!lastName.match(/^[a-z A-Z]*$/)) {
        // alert("Name should contain only alphabets");
        setFieldError((prev) => ({
          ...prev,
          last_name: "Name should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          last_name: "",
        }));
      }
      if (email !== "") {
        if (!email.match(/^[a-z.0-9]+@[a-z0-9]+\.[a-z]{2,4}$/)) {
          setFieldError((prevData) => ({
            ...prevData,
            email: "Please enter valid email",
          }));
        } else {
          setFieldError((prevData) => ({
            ...prevData,
            email: "",
          }));
        }
      }

      if (!orgName.match(/^[a-z- A-Z]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          orgName: "Organization Name should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          orgName: "",
        }));
      }
      if (!city.match(/^[a-zA-Z]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          city: "City should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          city: "",
        }));
      }
      if (!state.match(/^[a-zA-Z]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          state: "state should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          state: "", 
        }));
      }
      if (!postal_code.match(/^[a-zA-Z0-9]*$/)) {
        setFieldError((prevData) => ({
          ...prevData,
          postal_code: "Please enter valid postal code",
        }));
      } else {
        setFieldError((prevData) => ({
          ...prevData,
          postal_code: "",
        }));
      }
      if (!address.match(/^[a-z- # , : A-Z 0-9]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          address: "Address should contain only alphabets, #, : , 0-9",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          address: "",
        }));
      }
      if (!country.match(/^[a-zA-Z]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          country: "Country should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          country: "",
        }));
      }
      if (!message.match(/^[a-z A-Z]*$/)) {
        setFieldError((prev) => ({
          ...prev,
          message: "Message should contain only alphabets",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          message: "",
        }));
      }

      if (!policycheck) {
        setFieldError((prev) => ({
          ...prev,
          policycheck: "Please agree to the privacy policy",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          policycheck: "",
        }));
      }
      if (!recaptcha) {
        setFieldError((prev) => ({
          ...prev,
          captchaError: "Please verify the captcha",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          captchaError: "",
        }));
      }
      if (recaptcha === null) {
        setFieldError((prev) => ({
          ...prev,
          captchaError: "Please verify the captcha",
        }));
      } else {
        setFieldError((prev) => ({
          ...prev,
          captchaError: "",
        }));
      }

      if (
        firstName !== "" &&
        lastName !== "" &&
        orgName !== "" &&
        email !== "" &&
        phone_number !== "" &&
        alt_phone_number !== "" &&
        city !== "" &&
        country !== "" &&
        message !== "" &&
        state !== "" &&
        address !== "" &&
        postal_code !== "" &&
        recaptcha !== null &&
        recaptcha !== "" &&
        policycheck
      ) {
        setdisabledState(false);
      } else {
        setdisabledState(true);
      }
    }, [orgName, email, phone_number,alt_phone_number, city, country, message, recaptcha, policycheck, state, address, postal_code, firstName, lastName]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      // await verifyName(name)
      // if (name === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     name: "Name is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     name: "",
      //   }));
      // }

      // if (orgName === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     orgName: "Organization Name is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     orgName: "",
      //   }));
      // }
      // if (email === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     email: "Email is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     email: "",
      //   }));
      // }
      // if (phone_number === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     phone_number: "Phone number is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     phone_number: "",
      //   }));
      // }
      // if (city === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     city: "City is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     city: "",
      //   }));
      // }
      // if (country === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     country: "Country is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     country: "",
      //   }));
      // }
      // if (message === "") {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     message: "Message is required",
      //   }));
      // } else {
      //   setFieldError((prev) => ({
      //     ...prev,
      //     message: "",
      //   }));
      // }
      // if (
      //   name === "" ||
      //   orgName === "" ||
      //   email === "" ||
      //   phone_number === "" ||
      //   city === "" ||
      //   country === "" ||
      //   message === ""
      // ) {
      //   alert("Please fill the form correctly before");
      //   return;
      // }

      // Check if checkbox is checked

      // if (
      //   name === "" ||
      //   orgName === "" ||
      //   email === "" ||
      //   phone_number === "" ||
      //   city === "" ||
      //   country === "" ||
      //   message === ""
      // ) {

      //   return;
      // }

      if (
        fieldError.first_name !== "" ||
        fieldError.last_name !== "" ||
        fieldError.email !== "" ||
        fieldError.city !== "" ||
        fieldError.country !== "" ||
        fieldError.message !== "" ||
        fieldError.orgName !== "" ||
        fieldError.phone_number !== "" ||
        fieldError.alt_phone_number !== "" ||
        fieldError.postal_code !== "" ||
        fieldError.state !== "" ||
        fieldError.address !== ""


      ) {
        toast.error("Please fill the form correctly");
        return;
      }
      if (!recaptcha) {
        return;
      }
      const formData = {
        first_name: firstName,
        last_name: lastName,
        discription: "NotRequired",
        business_email: email,
        business_phone_number: 7657345,
        phone_number: phone_number,
        alternative_phone_number: alt_phone_number,
        company_name: orgName,
        address: address,
        city: city,
        state: state,
        country: country,
        zipcode: postal_code,
        message: message,
      };

      const result = await submitData(formData);
      console.log("result", result);

      if (result.data) {
        toast.success("Our team will respond within 24 hours");

        e.target.reset(); // Reset the HTML form
        resetFields();
        // setFormData({
        //   name: "",
        //   organisation_name: "",
        //   email: "",
        //   phone: "",
        //   city: "",
        //   country: "",
        //   message: "",
        // });
        setdisabledState(true);
        // console.log(res);
        // e.target.reset();
      }
      if (result.error) {
        toast.error("Error happen ", { id: 3 });
      }
    };

    if (isError) {
      toast.error("Data submitting problem");
    }
  // const [fieldError, setFieldError] = useState({
  //   first_name: "",
  //   last_name: "",
  //   discription: "",
  //   business_email: "",
  //   // business_phone_number: 7657345,
  //   phone_number: "",
  //   alternative_phone_number: "",
  //   company_name: "",
  //   address: "",
  //   city: "",
  //   state: false,
  //   country: "",
  //   zipcode: "",
  //   message: "",
  // });
  return (
    <div className="w-screen flex flex-col justify-start items-start">
      {/*  hero section */}
      <div className=" w-full h-[450px] flex justify-center items-center relative mt-20 sm:mt-0 mb-20">
        <div className="lg:w-10/12 md:w-11/12 w-11/12 flex md:flex-row flex-col justify-between items-center z-20">
          {/* text on the background */}
          <div className="md:w-1/2 h-1/2  flex flex-col justify-center items-start mt-[50px]">
            <div
              className="lg:text-[48px] md:text-[40px] text-[32px] text-white font-bold my-[8px]"
              style={{
                fontFamily: "Helvetica Neue-Bold",
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "72px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Partner with us
            </div>

            <div className="text-white lg:text-[24px] md:text-[16px] text-[16px] font-normal my-[8px]">
              Join us to be a part of healthcare digital transformation and grow
              your business with us.
            </div>

            <div className="w-full flex flex-col justify-center items-start my-[18px]">
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Best in class products and solutions
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Structured training programs
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Pre-sales and sales support
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  High financial rewards
                </span>
              </li>
            </div>
            <button type="button" className="join-now-button">
              <a href="#join-now-section">JOIN NOW</a>
            </button>
          </div>
          {/* image on the right */}
          <div
            className="md:w-4/12 flex justify-start items-center mt-[20px] mr-[20px]"
            style={{
              width: "594px",
              height: "594px",
            }}
          >
            <img
              src={partner_illustration}
              alt="partner_illustration"
              className="mt-[50px]"
              style={{
                width: "594px",
                height: "594px",
              }}
            />
          </div>
        </div>
        <div className="w-screen h-[550px] absolute flex justify-center items-center top-0 end-0 ">
          <img
            src={partners_vector}
            className="w-screen h-[550px] absolute top-0"
            alt="bg_partners"
          />
        </div>
      </div>

      <div
        className="md:h-[600px] flex flex-col justify-center items-center mb-[50px] relative z-30 max-w-[1096px] mx-auto"
        style={{
          maxWidth: "1320px",
          width: "90%",
          // backgroundColor:'red'
        }}
      >
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <div className="w-full text-center lg:text-[36px] md:text-[28px] text-[20px] text-[#3c4043] font-bold">
            Join our <span className="text-[#146DFA]">2,500+</span> strong
            Partner Program
          </div>

          <div
            className="lg:my-4 my-2 text-center lg:w-full md:w-10/12 lg:text-[20px] md:text-[16px] text-[12px]"
            style={{
              width: "85%",
              //styleName: Body Text B2;
              fontFamily: "Noto sans",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "36px",
              letterSpacing: "0.01em",
              textAlign: "center",
              color: "#6D747A",
            }}
          >
            In the 2 decades of our journey, we have enabled 1000+ healthcare
            service providers in their digital transformation. However our goal
            is to double this number in the next few years.
          </div>

          <div
            className="lg:my-4 my-2 text-center  lg:w-full md:w-10/12 lg:text-[20px] md:text-[16px] text-[12px]"
            style={{
              width: "85%",
              //styleName: Body Text B2;
              fontFamily: "Noto sans",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "36px",
              letterSpacing: "0.01em",
              textAlign: "center",
              color: "#6D747A",
            }}
          >
            We know we alone can't reach to all our potential customers, hence
            we have designed very attractive partner program and we believe
            together we can do a lot of good to address our customer need.
          </div>
        </div>

        <div
          className="w-full md:h-1/2 flex md:flex-row flex-col justify-evenly items-center md:px-0 px-2"
          style={{
            maxWidth: "1420px",
            width: "100%",
            // backgroundColor:'red'
          }}
        >
          {/*  card 1 */}
          <div className="partner-card w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img
                src={proven_svg}
                className="lg:w-[47px] lg:h-[48px] w-[36px]"
                alt="proven_svg"
              ></img>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="card-head lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Proven solutions
              </div>
              <div className="card-subtext lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                With our suite of proven, best-in-class products and solutions,
                we ensure that you’re in safe hands.
              </div>
            </div>
          </div>

          {/*  card 2 */}
          <div className="partner-card w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img
                src={structured}
                className="lg:w-[47px] lg:h-[48px] w-[36px]"
                alt="structured"
              />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="card-head lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Structured Training
              </div>
              <div className="card-subtext lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                We set you up for success through our well-researched,
                comprehensive and structured training programs.
              </div>
            </div>
          </div>

          {/*  vcard 3 */}
          <div className="partner-card w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img
                src={support}
                className="lg:w-[47px] lg:h-[48px] w-[36px]"
                alt="support"
              />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="card-head lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Support Services
              </div>
              <div className="card-subtext lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                We’re here to help you in your journey, hand-holding wherever
                needed and supporting in your pre-sales and sales process.
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="partner-card w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img
                src={financial}
                className="lg:w-[47px] lg:h-[48px] w-[36px]"
                alt="financialServices"
              />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="card-head lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Financial Rewards
              </div>
              <div className="card-subtext lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                We assure you the best bang for your buck and significant
                financial rewards with the Partner Program.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SmallBlueWave
        heading="Want to learn more?"
        subheading="If you want to know more about the Suvarna Partner Program, please get in touch with us at
 +91 8125772299 or jagdeesh@suvarna.co.in"
      />

      <div
        id="join-now-section"
        className="w-screen flex flex-grow-1 justify-center items-center my-[120px]"
      >
        <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-center items-center ">
          <div className="w-1/2 h-full md:flex hidden justify-start items-center">
            <img src={business_deal} alt="business_deal_image" />
          </div>
          <form
            method="POST"
            action={`${process.env.REACT_APP_API_URL}api/partner/create/`}
            className="md:w-1/2 w-11/12 h-full flex flex-col justify-center items-center md:px-16 px-0"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="w-full h-full flex flex-col justify-between items-start">
              <div className="w-full h-24 flex flex-col justify-start items-start ">
                <p
                  className="text-[28px] font-medium"
                  style={{
                    //styleName: Header H3;
                    fontFamily: "Helvetica Neue-Medium",
                    fontSize: "28px",
                    fontWeight: "500",
                    lineHeight: "42px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Connect with us to know more.
                </p>
                <p className="text-[16px] font-normal text-[#6D747A]">
                  Share your details and we’ll get in touch within 24 hours
                </p>
              </div>
              {/* all the form components */}
              <div className="w-[100%] flex flex-grow-1 flex-col justify-start items-center">
                <div
                  className="w-full flex flex-row md:justify-start justify-evenly items-center"
                  style={{
                    maxHeight: "140px",
                    height: "100%",
                    // backgroundColor:'blue'
                  }}
                >
                  {/* First name */}
                  <div
                    className="w-[45%]  flex flex-col justify-start items-start md:me-2"
                    style={{
                      maxHeight: "135px",
                      height: "100%",
                      // backgroundColor:'red'
                    }}
                  >
                    <label
                      htmlFor="first_name"
                      className="input-label-head py-2 font-medium text-[16px]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                      onChange={(e) => setFirtsName(e.target.value)}
                      placeholder="John"
                      name="first_name"
                      style={{
                        borderColor: fieldError.first_name ? "#E24A29" : "",
                      }}
                    />
                    {fieldError.first_name && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.first_name}
                      </p>
                    )}
                  </div>
                  {/* last name */}
                  <div
                    className="w-[45%] flex flex-col justify-start items-start md:ms-2"
                    style={{
                      maxHeight: "135px",
                      height: "100%",
                      // backgroundColor:'red'
                    }}
                  >
                    <label
                      htmlFor="last_name"
                      className="input-label-head py-2 font-medium text-[16px]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      name="last_name"
                      style={{
                        borderColor: fieldError.last_name ? "#E24A29" : "",
                      }}
                    />
                    {fieldError.last_name && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-row  md:justify-start justify-evenly items-center">
                  {/* business email */}
                  <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="business_email"
                      className="input-label-head py-2 font-medium text-[16px]"
                    >
                      Business Email
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@company.com"
                      name="business_email"
                      style={{
                        borderColor: fieldError.email ? "#E24A29" : "",
                      }}
                    />
                    {fieldError.email && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.email}
                      </p>
                    )}
                  </div>
                  {/* Phone number */}
                  <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                    <label
                      htmlFor="phone_number"
                      className="input-label-head py-2 font-medium text-[16px]"
                    >
                      Phone
                    </label>
                    <PhoneInput
                      containerStyle={{
                        margin: "1px",
                        width: "100%",
                        maxWidth: "330px",
                        // borderColor: validPhone ? "" : "red",
                        border: "1px",
                        borderRadius: "6px",
                        borderColor: fieldError.phone_number ? "#E24A29" : "",
                      }}
                      inputStyle={{
                        width: "100%",
                        maxWidth: "330px",
                        height: "50px",
                        color: "#08090A",
                      }}
                      dropdownStyle={{ height: "50px" }}
                      country={"in"}
                      value={phone_number}
                      onChange={(phone) => setphone_number(phone)}
                      inputProps={{
                        name: "phone_number",
                        required: true,
                        // autoFocus: true,
                      }}
                      // onClick={(e)=>{setPhoneValid(true)}}
                    />
                    {fieldError.phone_number && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.phone_number}
                      </p>
                    )}
                  </div>
                  </div>

                  <div className="md:w-full w-[93%] flex flex-row md:justify-start justify-evenly items-center">
                    {/* Alternate Number */}
                    <div className="md:w-[45%] w-full flex flex-col justify-start items-start">
                      <label
                        htmlFor="alternative_phone_number"
                        className="input-label-head py-2 font-medium text-[16px]"
                      >
                        Alternate Phone
                      </label>
                      <PhoneInput
                        containerStyle={{
                          margin: "1px",
                          width: "100%",
                          maxWidth: "330px",
                          // borderColor: validPhone ? "" : "red",
                          border: "1px",
                          borderRadius: "6px",
                          borderColor: fieldError.alt_phone_number
                            ? "#E24A29"
                            : "",
                        }}
                        inputStyle={{
                          width: "100%",
                          maxWidth: "330px",
                          height: "50px",
                          color: "#08090A",
                        }}
                        dropdownStyle={{ height: "50px" }}
                        country={"in"}
                        value={alt_phone_number}
                        onChange={(phone) => setAltPhone_number(phone)}
                        inputProps={{
                          name: "alt_phone_number",
                          required: true,
                          // autoFocus: true,
                        }}
                        // onClick={(e)=>{setPhoneValid(true)}}
                      />
                      {fieldError.alt_phone_number && (
                        <p role="alert" className="text-[#E24A29]">
                          {fieldError.alt_phone_number}
                        </p>
                      )}
                    </div>
                    </div>

                    <div className="w-full flex flex-row md:justify-start justify-evenly items-center">
                      {/* Company name */}
                      <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                        <label
                          htmlFor="orgName"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setOrgName(e.target.value)}
                          value={orgName}
                          placeholder="e.g. Star Hospitals Pvt. Ltd."
                          name="orgName"
                          style={{
                            borderColor: fieldError.orgName ? "#E24A29" : "",
                          }}
                        />
                        {fieldError.orgName && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.orgName}
                          </p>
                        )}
                      </div>
                      {/* address */}
                      <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                        <label
                          htmlFor="address"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="e.g plot 405- noida, sector 4"
                          name="state"
                          style={{
                            borderColor: fieldError.address ? "#E24A29" : "",
                          }}
                        />
                        {fieldError.address && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.address}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:w-full w-[90%] flex md:flex-row flex-col  md:justify-start justify-evenly items-center">
                      {/* City */}
                      <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                        <label
                          htmlFor="city"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Ahemdabad"
                          name="city"
                          style={{
                            borderColor: fieldError.city ? "#E24A29" : "",
                          }}
                        />
                        {fieldError.city && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.city}
                          </p>
                        )}
                      </div>
                      {/* State */}
                      <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                        <label
                          htmlFor="state"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setState(e.target.value)}
                          placeholder="e.g Gujarat"
                          name="state"
                          style={{
                            borderColor: fieldError.state ? "#E24A29" : "",
                          }}
                        />
                        {fieldError.state && (
                          <p role="alert" className="text-[#E24A29]">
                            {/* {fieldError.state} */}
                            Please enter a valid state
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:w-full w-[90%] flex md:flex-row flex-col  md:justify-start justify-evenly items-center">
                      {/* Country */}
                      <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                        <label
                          htmlFor="country"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g India"
                          name="country"
                          style={{
                            borderColor: fieldError.country ? "#E24A29" : "",
                          }}
                        />
                        {fieldError.country && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.country}
                          </p>
                        )}
                      </div>
                      {/* Zip code */}
                      <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                        <label
                          htmlFor="zipcode"
                          className="input-label-head py-2 font-medium text-[16px]"
                        >
                          Zip Postal Code
                        </label>
                        <input
                          type="number"
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setPostal_code(e.target.value)}
                          placeholder="e.g. 846113"
                          name="zipcode"
                          style={{
                            borderColor: fieldError.postal_code
                              ? "#E24A29"
                              : "",
                          }}
                        />
                        {fieldError.postal_code && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.postal_code}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:w-full w-[90%] flex justify-start items-start">
                      <div className="w-[90%] flex flex-col justify-start items-start">
                        <label
                          htmlFor="message"
                          className="py-2 font-medium text-[16px]"
                        >
                          Message
                        </label>
                        <textarea
                          className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Leave us a message..."
                          name="message"
                        />
                        {fieldError.message && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.message}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* <div className="md:w-full w-[90%] flex flex-col justify-center items-start my-2">
                  <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F" />
                  <div className="frame-30 my-2 flex ">
                    <input
                      className="check-square-svgrepo border-slate-950 border-2 cursor-pointer"
                      alt="Check square svgrepo"
                      type="checkbox"
                    />
                    <p className="you-agree-to-our">
                      <span className="text-[#08090A] font-normal mx-2">
                        You agree to our friendly
                      </span>
                      <span className="text-[#146DFA] font-normal">
                        privacy policy
                      </span>
                    </p>
                  </div>
                </div> */}
                    <div
                      className="w-full flex flex-col justify-center items-start my-2"
                      style={{ cursor: "pointer" }}
                      id="recaptcha"
                    >
                      {/* <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"/> */}
                      <div
                        id="recaptcha"
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          "&:hover": {
                            cursor: "pointer !important", // Use !important to override other styles
                          },
                        }}
                      >
                        <ReCaptchaV2
                          id="recaptcha"
                          sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"
                          onChange={handlerecaptcha}
                          style={{
                            cursor: "pointer",
                            width: "100%",
                            "&:hover": {
                              cursor: "pointer !important", // Use !important to override other styles
                            },
                          }}
                        />
                        {fieldError.captchaError && (
                          <p role="alert" className="text-[#E24A29]">
                            {fieldError.captchaError}
                          </p>
                        )}
                      </div>
                      <div className="frame-30 my-2 flex">
                        <input
                          className="check-square-svgrepo border-slate-950 border-2"
                          alt="Check square svgrepo"
                          type="checkbox"
                          id="checkbox"
                          onChange={handlepolicycheck}
                        />
                        <p
                          className="you-agree-to-our"
                          style={{
                            //styleName: Body Text B2;
                            fontFamily: "Noto Sans,sans-serif",
                            fontWeight: "400",
                            lineHeight: "21px",
                            letterSpacing: "0em",
                          }}
                        >
                          <span
                            className="text-[#08090A] font-normal mx-2"
                            required
                          >
                            You agree to our friendly
                          </span>
                          <span
                            className="text-[#146DFA] font-normal"
                            id="privacy_policy"
                            style={{ cursor: "pointer" }}
                          >
                            privacy policy
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* <div className="md:w-full w-[90%] flex justify-start items-center my-2">
                  <input
                    type="submit"
                    className="bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center"
                    value="Submit"
                  />
                </div> */}
                    <div className=" flex justify-center items-center">
                      <button
                        type="submit"
                        className={`bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center ${
                          isLoading || disabledState ? "disabled" : ""
                        }`}
                        disabled={disabledState}
                        style={{
                          backgroundColor:
                            isLoading || disabledState ? "#d3d3d3" : "#146DFA",
                          cursor:
                            isLoading || disabledState
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        {isLoading ? <LoadingSpinner /> : "Submit"}
                      </button>
                    </div>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partners;
