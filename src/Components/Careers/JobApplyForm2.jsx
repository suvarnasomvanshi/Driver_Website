import "react-phone-input-2/lib/style.css";

import React, { useEffect, useRef, useState } from "react";

import PhoneInput from "react-phone-input-2";
import ReCaptchaV2 from "react-google-recaptcha";
import deleteIcon from "../../assets/CareersPage/delete.svg";
import pdficon from "../../assets/CareersPage/pdfIcon.svg";
import tick from "../../assets/CareersPage/tick.svg";
import toast from "react-hot-toast";
import { useApplyInAJobMutation } from "../../redux/features/careers/careers";
import { validateData } from "../../utils/Validation";
import LoadingSpinner from "../common/LoadingSpiner";

const JobApplyForm = ({ data }) => {
  const [file, setFile] = useState(null);
  const [fileName,setFileName] = useState("");
    const [disabledState, setdisabledState] = useState(true);
  const fileInputRef = useRef(null);
  const [acceptTerms, setacceptTerms] = useState(false);
  const [captchaRes, setCaptchaRes] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [submitData, { isLoading, isError, isSuccess, error }] =
    useApplyInAJobMutation();
  const [fieldError, setFieldError] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    postal_code: "",
    phone_number: "",
    captchaError: "",
    fileError: "",
    termsError: "",
  }); 
  const resetFields = () => {
    setName("");
    setEmail("");
    setAddress("");
    setState("");
    setPostal_code("");
    setphone_number("");
    setFile("");
    setFileName("");
    setacceptTerms(false);
    setCaptchaRes("");
  };

  const handlefileupload = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handledeleteFile = (e) => {
    setFile("");
    setFileName("");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleCaptchaChange = (response) => {
    setCaptchaRes(response);
  };


  useEffect(() => {
    console.log("useEffect", file,captchaRes,acceptTerms);
    if (!name.match(/^[a-z A-Z]*$/)) {
      setFieldError((prevData) => ({
        ...prevData,
        name: "Please enter valid name",
      }));
    } else {
      setFieldError((prevData) => ({
        ...prevData,
        name: "",
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
    

    if (!address.match(/^[a-z #,:/ A-Z0-9 ]*$/)) {
      setFieldError((prevData) => ({
        ...prevData,
        address: "Please enter valid address",
      }));
    } else {
      setFieldError((prevData) => ({
        ...prevData,
        address: "",
      }));
    }

    if (!state.match(/^[a-zA-Z0-9]*$/)) {
      setFieldError((prevData) => ({
        ...prevData,
        state: "Please enter valid state",
      }));
    } else {
      setFieldError((prevData) => ({
        ...prevData,
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
    if (phone_number !== "") {
       if (!phone_number.match(/^[0-9]*$/)) {
         setFieldError((prevData) => ({
           ...prevData,
           phone_number: "Please enter valid phone number",
         }));
       } else if (phone_number.length < 10) {
         setFieldError((prevData) => ({
           ...prevData,
           phone_number: "Please enter valid phone number",
         }));
       } else {
         setFieldError((prevData) => ({
           ...prevData,
           phone_number: "",
         }));
       }
    }
   console.log(file);
    if (file) {
      if (file?.size > 5000000) {
        toast.error("File size is too large", { id: 25 });
        return;
      }
      // check file type
      if (
        file.type !== "application/pdf" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        file.type !== "application/msword"
      ) {
        toast.error("Please upload valid file type", { id: 25 });
        return;
      }
      
    }
    if (captchaRes === "") {
      setFieldError((prevData) => ({
        ...prevData,
        captchaError: "Please verify captcha",
      }));
    } else {
      setFieldError((prevData) => ({
        ...prevData,
        captchaError: "",
      }));
    }
    if (!acceptTerms) {
      setFieldError((prevData) => ({
        ...prevData,
        termsError: "Please accept terms and conditions",
      }));
    } else {
      setFieldError((prevData) => ({
        ...prevData,
        termsError: "",
      }));
      }
    console.log("useEffect", file,captchaRes,acceptTerms);
    //  if (
    //    fieldError.name == "" &&
    //    fieldError.email == "" &&
    //    fieldError.address == "" &&
    //    fieldError.state == "" &&
    //    fieldError.postal_code == "" &&
    //    fieldError.phone_number == "" &&
    //    fieldError.fileError == "" &&
    //    fieldError.captchaError == "" &&
    //    fieldError.termsError == "" 
    //  ) {
     if (
       name !== "" &&
       email !== "" &&
       address !== "" &&
       state !== "" &&
       postal_code !== "" &&
       phone_number !== "" &&
       captchaRes !== "" &&
       file &&
       acceptTerms 
     ) {
       setdisabledState(false);
     } else {
       setdisabledState(true);
     }
  }, [acceptTerms, address, email, file, name, phone_number, postal_code, state,captchaRes]);




  const handleSubmit = async (e) => {
    e.preventDefault();
    // check file is uploaded or not
  
   
    
  
    // if empty return
    // if (
    //   !name === "" &&
    //   !email === "" &&
    //   !address === "" &&
    //   !state === "" &&
    //   !postal_code === "" &&
    //   !phone_number === "" &&
    //   file &&
    //   acceptTerms
    // ) {
    //   return;
    // }
    //  if (
    //    fieldError.name == "" &&
    //    fieldError.email == "" &&
    //    fieldError.address == "" &&
    //    fieldError.state == "" &&
    //    fieldError.postal_code == "" &&
    //    fieldError.phone_number == "" &&
    //    fieldError.fileError == "" &&
    //    fieldError.captchaError == "" &&
    //    fieldError.termsError == "" 
    //  ) {
    // console.log("fieldErorr", fieldError);
    if (
      fieldError.name !== '' ||
      fieldError.email !== '' ||
      fieldError.address !== '' ||
      fieldError.state !== '' ||
      fieldError.postal_code !== '' ||
      fieldError.phone_number !== '' ||
      fieldError.fileError !== '' ||
      fieldError.captchaError !== '' ||
      fieldError.termsError !== '' 
    ) {
      toast.error("Please fill the form correctly");
      return;
    }
   
    //file size check
    
    // check captcha
    if (captchaRes === "") {
      toast.error("Please verify captcha", { id: 25 });
      return;
    }
    // check captcha expire or not
    if (captchaRes === null) {
      toast.error("Captcha expired", { id: 25 });
      return;
    }

    let formsData = new FormData();
    formsData.append("name", name);
    formsData.append("email", email);
    formsData.append("address", address);
    formsData.append("state", state);
    formsData.append("postal_code", postal_code);
    formsData.append("career", String(data?.id));
    formsData.append("phone_number", phone_number);
    formsData.append("resume_file", file);
    const result = await submitData(formsData);
    console.log(result);
    if (result) {
      toast.success("Your successfully submit the spplication", { id: 25 });
      setacceptTerms(false);
      setCaptchaRes("");
      setFile("");
      setphone_number("");
      setdisabledState(true);
      resetFields();
    }
  };

  return (
    <main
      style={{ fontFamily: "font-family: Helvetica Neue" }}
      className=" w-full"
    >
      <header>
        <h1 className="job-form-head text-xl md:text-2xl lg:text-3xl font-bold">
          Apply for this role
        </h1>
        <p className="job-form-subhead text-[15px]"
        style={{
          //styleName: Body Text B1;
          fontFamily: 'Noto Sans',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0em',
          textAlign: 'left',
          marginTop:'12px'
        }}
        >
          Enter the details and share your resume below. We’ll get back to you
          if your application is shortlisted.
        </p>
      </header>

      <section className="w-full ">
        <div className="max-w-6xl flex mt-2">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4 my-10  w-full flex flex-col justify-center  gap-3 md:gap-5"
          >
            {/* name to postal code */}

            <div className="w-full flex flex-wrap items-center gap-10">
              {/* name */}

              <div className="max-w-[330px] w-full pb-[20px]">
                <label
                  htmlFor="name"
                  className="job-form-label block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md border-[#CED4DA]"
                  placeholder="John Doe"
                  style={{
                    borderColor: fieldError.name ? "#E24A29" : "",
                  }}
                />
                {fieldError.name && (
                  <p role="alert" className="text-[#E24A29]">
                    {fieldError.name}
                  </p>
                )}
              </div>

              {/* phone */}
              <div className="max-w-[330px] w-full pb-[20px]">
                <label
                  htmlFor="phone_number"
                  className="job-form-label block text-lg font-medium text-gray-700"
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
                    autoFocus: true,
                  }}
                  // onClick={(e)=>{setPhoneValid(true)}}
                />
                {fieldError.phone_number && (
                  <p role="alert" className="text-[#E24A29]">
                    {fieldError.phone_number}
                  </p>
                )}
              </div>
              {/* email */}
              <div className="max-w-[330px] w-full pb-[20px]">
                <label
                  htmlFor="email"
                  className="job-form-label block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com"
                  style={{
                    borderColor: fieldError.email ? "#E24A29" : "",
                  }}
                  // onClick={(e)=>{setEmailValid(true)}}
                />
                {fieldError.email && (
                  <p role="alert" className="text-[#E24A29]">
                    {fieldError.email}
                  </p>
                )}
              </div>

              {/* address */}
              <div className="max-w-[330px]  w-full pb-[20px]">
                <label
                  htmlFor="address"
                  className="job-form-label block text-lg font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com"
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

              {/* state */}
              <div className="max-w-[330px] w-full pb-[20px]">
                <label
                  htmlFor="state"
                  className="job-form-label block text-lg font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="Telengana"
                  style={{
                    borderColor: fieldError.state ? "#E24A29" : "",
                  }}
                />
                {fieldError.state && (
                  <p role="alert" className="text-[#E24A29]">
                    {fieldError.state}
                  </p>
                )}
              </div>

              {/* postal code */}
              <div className="max-w-[330px] w-full pb-[20px]">
                <label
                  htmlFor="postal_code"
                  className="job-form-label block text-lg font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  value={postal_code}
                  onChange={(e) => setPostal_code(e.target.value)}
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="XXX181"
                  style={{
                    borderColor: fieldError.postal_code ? "#E24A29" : "",
                  }}
                />
                {fieldError.postal_code && (
                  <p role="alert" className="text-[#E24A29]">
                    {fieldError.postal_code}
                  </p>
                )}
              </div>
            </div>

            {/* upload resumi */}
            <div>
              {/* {file && <p>{file?.name}</p>} */}
              <div
                className="upperRow"
                style={{
                  display: "flex",
                }}
              >
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="max-w-[265px] w-full  font-bold rounded-md border border-blue-400 text-blue-400 px-4 py-3"
                  style={{
                    border:
                      fileName === ""
                        ? "1px solid #146DFA"
                        : "1px solid #EBEDF0",
                    color: fileName === "" ? "#146DFA" : "#3C4043",
                    fontWeight: fileName === "" ? "500" : "400",
                  }}
                >
                  {/* Upload Resume */}
                  {fileName === "" ? (
                    "Upload Resume"
                  ) : (
                    <div style={{ display: "flex" }}>
                      <img
                        src={pdficon}
                        alt=""
                        title="PDF file"
                        style={{ cursor: "pointer" }}
                      />
                      <span className="pl-[10px]">{fileName}</span>
                    </div>
                  )}
                </button>

                <input
                  ref={fileInputRef}
                  // onChange={(e) => {
                  //   setFile(e.target.files[0]);
                  // }}
                  onChange={handlefileupload}
                  accept=".pdf"
                  type="file"
                  style={{ display: "none" }}
                />
                {fileName === "" ? (
                  ""
                ) : (
                  <img
                    src={deleteIcon}
                    alt="deleteIcon"
                    title="Delete file"
                    onClick={handledeleteFile}
                    style={{ cursor: "pointer", paddingLeft: "10px" }}
                  />
                )}
              </div>
              <p
                className="p-0 ml-1 text-sm"
                style={{
                  //styleName: Body Text B2;
                  // font-family: Noto Sans;
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#6D747A",
                }}
              >
                {fileName !== "" ? (
                  <span style={{ display: "flex" }}>
                    <img
                      src={tick}
                      alt="tick"
                      title="File uploaded"
                      style={{ cursor: "pointer" }}
                    />
                    File Uploaded
                  </span>
                ) : (
                  "DOC, DOCX or PDF. Max size 5 MB."
                )}
              </p>
              {fieldError.fileError && (
                <p role="alert" className="text-[#E24A29]">
                  {fieldError.fileError}
                </p>
              )}
            </div>
            {/* <div onClick={handleButtonClick}>
              {file && <p>{file?.name}</p>}

              <button
                type="button"
                className="max-w-[265px] w-full  font-bold rounded-md border border-blue-400 text-blue-400 px-4 py-3"
              >
                Upload Resume
              </button>
              <input
                ref={fileInputRef}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                accept=".pdf"
                type="file"
                style={{ display: "none" }}
              />
              <p className="p-0 ml-1 text-sm">
                DOC, DOCX or PDF. Max size 5 MB.
              </p>
            </div> */}

            {/* terms and condition and captcha */}

            <div className="reCaptcha-container">
              <ReCaptchaV2
                sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"
                onChange={handleCaptchaChange}
                className="reCaptcha-container"
              />
              <div className="mt-4">
                <label
                  htmlFor="acceptTerms"
                  className="flex items-center pl-[1px]"
                >
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setacceptTerms((pre) => !pre)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    style={{
                      borderRadius: "10px",
                    }}
                  />

                  <div
                    className="job-privacy-policy ml-2 text-sm text-[#08090A] pl-[10px]"
                    style={{ cursor: "text" }}
                  >
                    You agree to our friendly
                    <span
                      className="text-[#146DFA]"
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      privacy policy{" "}
                    </span>
                  </div>
                  {fieldError.policyError && (
                    <p role="alert" className="text-[#E24A29]">
                      {fieldError.policyError}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button
                type="submit"
                className={` text-white px-4 py-2 rounded-md ${
                  isLoading || disabledState ? "disabled" : ""
                }`}
                disabled={disabledState}
                style={{
                  width: '118px',
                  height: '48px',
                  padding: '12px, 18px, 12px, 18px',
                  borderRadius: '6px',
                  backgroundColor:
                    isLoading || disabledState ? "#d3d3d3" : "#146DFA",
                  cursor:
                    isLoading || disabledState ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? <LoadingSpinner /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default JobApplyForm;
