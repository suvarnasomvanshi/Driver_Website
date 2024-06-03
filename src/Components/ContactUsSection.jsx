import React, { useEffect, useRef, useState } from "react";

import ReCaptchaV2 from "react-google-recaptcha";

import contact_us_vector from "../assets/pexels-gustavo-fring-4173250 1.png";

import Loader from "../Components/Loader";
import { useCreateContactMutation } from "../redux/features/contact/contactApi";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import LoadingSpinner from "./common/LoadingSpiner";

const ContactUsSection = () => {
    const [submitData, { isLoading, isError, isSuccess }] =
      useCreateContactMutation();
  const [disabledState, setdisabledState] = useState(true)
  const [policycheck, setpolicy] = useState(false)
  const [emailValid, setemailValid] = useState(true)
  const [PhoneValid, setPhoneValid] = useState(true)
  const [recaptcha, setrecaptcha] = useState(false)

  const targetRef = useRef();
  const [allFilled, setAllFilled] = useState(false)
  const [phone_number, setphone_number] = useState("");
  const [name, setName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [fieldError, setFieldError] = useState({
    name: "",
    orgName: "",
    email: "",
    phone_number: "",
    city: "",
    country: "",
    message: "",
    policycheck: "",
    captchaError: ""

  })


  const handlerecaptcha = (e) => {
    setrecaptcha(e)
    // console.log(recaptcha)
  }
  const handlepolicycheck = (e) => {
    
    setpolicy(!policycheck);
    console.log(policycheck);
    
  }

  const [formData, setFormData] = useState({
    name: "",
    orgName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });
  const resetFields = () => {
    setphone_number("");
    setName("");
    setOrgName("");
    setEmail("");
    setCity("");
    setCountry("");
    setMessage("");
    setpolicy(false);
    setrecaptcha("")
    setdisabledState(true)
  }




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
    console.log(policycheck,recaptcha);
    if (!name.match(/^[a-z A-Z]*$/)) {
      // alert("Name should contain only alphabets");
      setFieldError((prev) => ({
        ...prev,
        name: "Name should contain only alphabets",
      }));
    } else {
      setFieldError((prev) => ({
        ...prev,
        name: "",
      }));
    }
    if (email !== "") {
    //  if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$/)) {
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
      name !== "" &&
      orgName !== "" &&
      email !== "" &&
      phone_number !== "" &&
      city !== "" &&
      country !== "" &&
      message !== "" &&
      recaptcha !== null &&
      recaptcha !=="" &&
      policycheck
    ) {
      
      setdisabledState(false);
    } else {
      setdisabledState(true);
    }
  }, [
    name,
    orgName,
    email,
    phone_number,
    city,
    country,
    message,
    recaptcha,
    policycheck,
  ]);
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
      fieldError.name !== "" ||
      fieldError.email !== "" ||
      fieldError.city !== "" ||
      fieldError.country !== "" ||
      fieldError.message !== "" ||
      fieldError.orgName !== "" ||
      fieldError.phone_number !== ""


    ) {
       toast.error("Please fill the form correctly");
      return;
    }
    if (!recaptcha) {
      return;
    }
    const formData = {
      name: name,
      organisation_name: orgName,
      email: email,
      phone: phone_number,
      city: city,
      country: country,
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
  return (
    <div className="w-full flex justify-center items-start mb-[60px] relative"
      ref={targetRef}
      id="contactusForm"
      style={{
        // border:'1px solid black'
      }}
    >
      <div
        className="lg:w-full md:w-11/12 w-full  flex flex-col lg:flex-row mb-[60px]  justify-end items-stretch"
        style={
          {
            // border:'1px solid blue'
          }
        }
      >
        <div
          className=" h-full lg:flex justify-start items-start overflow-hidden pr-[60px]"
          id="contactusForm"
          style={
            {
              // border:'1px solid black',
              // height:'100%'
              // minHeight:'500px'
            }
          }
        >
          <img
            src={contact_us_vector}
            alt="contact_us_image "
            className="w-full h-full object-cover"
            style={{
              // border:'1px solid red',
              height: "100%",
              maxHeight: '817.66px'
            }}
          />
        </div>
        <form
          method="POST"
          action={`${process.env.REACT_APP_API_URL}api/contact_us/create/`}
          className="lg:w-1/2 w-full h-full flex flex-col justify-center gap-2 items-center px-4 z-40"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="w-full h-full flex flex-col justify-between items-start">
            <div className="w-full h-36 flex flex-col justify-start items-start ">
              <p
                className="text-[28px] font-medium"
                style={{
                  //styleName: Header H3;
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontSize: "28px",
                  fontWeight: "550",
                  lineHeight: "42px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#08090A",
                }}
              >
                Got queries? We’d love to help.
              </p>
              <p
                className="text-[16px] font-normal lg:mt-4"
                style={{
                  //styleName: Body Text B1;
                  fontFamily: "Noto sans, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#6D747A",
                }}
              >
                Share your details and we’ll get in touch within 24 hours
              </p>
            </div>
            <div className="w-full flex flex-grow-1 flex-col gap-3 lg:gap-5 justify-start items-center ">
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="John Doe"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                    }}
                  />
                  {
                    fieldError.name && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.name}
                      </p>
                    )

                  }
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="organisation_name"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="e.g. First Cry Hospital"
                    name="organisation_name"
                    onChange={(e) => setOrgName(e.target.value)}
                    value={orgName}
                    required={true}
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                    }}
                  />
                  {
                    fieldError.orgName && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.orgName}
                      </p>
                    )
                  }
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="email"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="contact@company.com"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required={true}
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                      borderColor: !emailValid ? "#E24A29" : "",
                    }}
                    onClick={(e) => {
                      setemailValid(true);
                    }}
                  />
                  {
                    fieldError.email && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.email}
                      </p>
                    )
                  }
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="phone"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
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
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="city"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="Ahemdabad"
                    name="city"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    required={true}
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                    }}
                  />
                  {
                    fieldError.city && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.city}
                      </p>
                    )

                  }
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="country"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="India"
                    name="country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    required={true}
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                    }}
                  />
                  {
                    fieldError.country && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.country}
                      </p>
                    )
                  }
                </div>
              </div>
              <div className="w-full flex justify-start items-start">
                <div className="w-[90%] flex flex-col justify-start items-start">
                  <label
                    htmlFor="message"
                    className="py-2 font-medium text-[16px]"
                    style={{
                      //styleName: Sub-Header 4;
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontSize: "16px",
                      fontWeight: "550",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="Leave us a message..."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    style={{
                      //styleName: Body Text B1;
                      fontFamily: "Noto Sans,sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      borderRadius: "4px",
                    }}
                  />
                  {
                    fieldError.message && (
                      <p role="alert" className="text-[#E24A29]">
                        {fieldError.message}
                      </p>
                    )
                  }

                </div>
              </div>
              {/* <div className="w-full flex flex-col justify-center items-start my-2">
                <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F" />
                <div className="frame-30 my-2 flex " style={{
                  cursor:'pointer'
                }}>
                  <input
                    className="check-square-svgrepo border-slate-950 border-2 cursor-pointer"
                    alt="Check square svgrepo"
                    type="checkbox"
                    style={{
                      cursor:'pointer'
                    }}
                  />
                  <p className="you-agree-to-our">
                    <span className="text-[#08090A] font-normal mx-2" required>
                      You agree to our friendly
                    </span>
                    <span
                    className="text-[#146DFA] font-normal"
                    id="privacy_policy"
                    style={{
                      cursor:'pointer',
                    }}
                  >
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
                    <span className="text-[#08090A] font-normal mx-2" required>
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

              <div className="w-full flex justify-start items-center my-2">
                {/* <input
                  type="submit"
                  className="bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center "
                  property1="default-small"
                  // disabledState
                  value={isLoading ? <Loader /> : `Submit`}
                /> */}
                {/* <input
                  type="submit"
                  className="bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center"
                  property1="default-small"
                  disabled={isLoading || Object.values(formData).some((value) => !value.trim())}
                  value={isLoading ? 'Submitting...' : 'Submit'}
                  style={{
                    backgroundColor: isLoading || Object.values(formData).some((value) => !value.trim()) ? '#d3d3d3' : '#146DFA',
                    cursor: isLoading || Object.values(formData).some((value) => !value.trim()) ? 'not-allowed' : 'pointer',
                  }} 
                /> */}
                <button
                  type="submit"
                  className={`bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center ${isLoading || disabledState ? "disabled" : ""
                    }`}

                  disabled={disabledState}
                  style={{
                    backgroundColor:
                      isLoading || disabledState ? "#d3d3d3" : "#146DFA",
                    cursor:
                      isLoading || disabledState ? "not-allowed" : "pointer",
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
  );
};

export default ContactUsSection;