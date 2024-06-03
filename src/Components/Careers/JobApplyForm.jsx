// import "react-phone-input-2/lib/style.css";

// import React, { useRef, useState } from "react";

// import PhoneInput from "react-phone-input-2";
// import ReCaptchaV2 from "react-google-recaptcha";
// import deleteIcon from "../../assets/CareersPage/delete.svg"
// import pdficon from "../../assets/CareersPage/pdfIcon.svg"
// import tick from "../../assets/CareersPage/tick.svg"
// import toast from "react-hot-toast";
// import { useApplyInAJobMutation } from "../../redux/features/careers/careers";

// const JobApplyForm = ({ data }) => {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("")
//   const fileInputRef = useRef(null);
//   const [acceptTerms, setacceptTerms] = useState(false);
//   const [captchaRes, setCaptchaRes] = useState("");
//   const [phone_number, setphone_number] = useState("");
//   const [validEmail, setEmailValid] = useState(true)
//   const [validPhone, setPhoneValid] = useState(true)

//   const [fieldError, setFieldError] = useState({
//     name: "",
//     email: "",
//     address: "",
//     state: "",
//     postal_code: "",
//   });
//   const [submitData, { isLoading, isError, isSuccess, error }] =
//     useApplyInAJobMutation();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     state: "",
//     postal_code: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log({
//       ...formData,
//       career: String(data.id),
//       phone_number,
//       resume_file: file,
//     });


//     // if (formData.name === "") {
//     //   //set error for name on useState
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     name: "Please enter your name",
//     //   }));
//     //   return;
//     // } else if (formData.name.match(/^[a-z A-Z]*$/) === null) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     name: "Please enter valid name",
//     //   }));

//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     name: "",
//     //   }));
//     // }

//     // if (formData.email === "") {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     email: "Please enter your email",
//     //   }));
//     //   return;
//     // } else if (
//     //   formData.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/) == null
//     // ) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     email: "Please enter valid email",
//     //   }));
//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     email: "",
//     //   }));
//     // }
//     // if (formData.address === "") {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     address: "Please enter your address",
//     //   }));
//     //   return;
//     // } else if (formData.address.match(/^[a-zA-Z0-9 ]*$/) == null) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     address: "Please enter valid address",
//     //   }));
//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     address: "",
//     //   }));
//     // }

//     // if (formData.state === "") {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     state: "Please enter your state",
//     //   }));
//     //   return;
//     // } else if (formData.state.match(/^[a-zA-Z ]*$/) == null) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     state: "Please enter valid state",
//     //   }));
//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     state: "",
//     //   }));
//     // }

//     // if (formData.postal_code === "") {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     postal_code: "Please enter your postal code",
//     //   }));
//     //   return;
//     // } else if (formData.postal_code.match(/^[0-9]*$/) == null) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     postal_code: "Please enter valid postal code",
//     //   }));
//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     postal_code: "",
//     //   }));
//     // }

//     // if (phone_number === "") {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     phone_number: "Please enter your phone number",
//     //   }));
//     //   return;
//     // } else if (phone_number.match(/^[0-9]*$/) == null) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     phone_number: "Please enter valid phone number",
//     //   }));
//     //   return;
//     // } else if (phone_number.length < 10) {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     phone_number: "Please enter valid phone number",
//     //   }));
//     //   return;
//     // } else {
//     //   setFieldError((prevData) => ({
//     //     ...prevData,
//     //     phone_number: "",
//     //   }));
//     // }


//     let formsData = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       formsData.append(key, value);
//     });

//     formsData.append("career", String(data?.id));
//     formsData.append("phone_number", phone_number);
//     formsData.append("resume_file", file);

//     // verify email and phone
//     // verifyEmailPhone(formData.email, phone_number).then((data) => {
//     //   if (!data) {
//     //     return;
//     //   }
//     // })

//     const result = await submitData(formsData);

//     if (result.data) {
//       toast.success("Your successfully submit the spplication", { id: 25 });
//       setFormData({
//         name: "",
//         email: "",
//         address: "",
//         state: "",
//         postal_code: "",
//       });
//       setacceptTerms(false);
//       setCaptchaRes("");
//       setFile("");
//       setFileName("");
//       setphone_number("");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]:
//         type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     }));
//   }

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleCaptchaChange = (response) => {
//     setCaptchaRes(response);
//   };

//   // async function verifyEmailPhone(email, phone) {
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   setEmailValid(emailRegex.test(email))
//   //   setPhoneValid(phone.length === 12)
//   //   if (emailRegex.test(email) && (phone.length === 12)) {
//   //     return true
//   //   }
//   //   else {
//   //     return false
//   //   }
//   // }

//   const handlefileupload = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name)
//   }

//   const handledeleteFile = (e) => {
//     setFile("");
//     setFileName("")
//   }

//   return (
//     <main
//       style={{ fontFamily: "font-family: Helvetica Neue" }}
//       className=" w-full"
//     >
//       <header>
//         <h1 className="job-form-head text-xl md:text-2xl lg:text-3xl font-bold">
//           Apply for this role
//         </h1>
//         <p className="job-form-subhead text-[15px]">
//           Enter the details and share your resume below. We’ll get back to you
//           if your application is shortlisted.
//         </p>
//       </header>

//       <section className="w-full ">
//         <div className="max-w-6xl flex mt-8">
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4 my-10  w-full flex flex-col justify-center  gap-3 md:gap-5"
//           >
//             {/* name to postal code */}

//             <div className="w-full flex flex-wrap items-center gap-10">
//               {/* name */}

//               <div className="max-w-[330px] w-full pb-[20px]">
//                 <label
//                   htmlFor="name"
//                   className="job-form-label block text-lg font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="job-form-input mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md border-[#CED4DA]"
//                   placeholder="John Doe"
//                 />
//                 {fieldError.name && (
//                   <p role="alert" className="text-red-700">
//                     {fieldError.name}
//                   </p>
//                 )}
//               </div>

//               {/* phone */}
//               <div className="max-w-[330px] w-full pb-[20px]">
//                 <label
//                   htmlFor="phone_number"
//                   className="job-form-label block text-lg font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <PhoneInput
//                   containerStyle={{
//                     margin: "1px",
//                     width: "100%",
//                     maxWidth: "330px",
//                     // borderColor: validPhone ? "" : "red",
//                     borderColor: fieldError.phone_number ? "red" : "",
//                     border: "1px",
//                     borderRadius: "6px",
//                   }}
//                   inputStyle={{
//                     width: "100%",
//                     maxWidth: "330px",
//                     height: "50px",
//                     color: '#08090A'
//                   }}
//                   dropdownStyle={{ height: "50px" }}
//                   country={"in"}
//                   value={phone_number}
//                   onChange={(phone) => setphone_number(phone)}
//                   inputProps={{
//                     name: "phone_number",
//                     required: true,
//                     autoFocus: true,
//                   }}
//                   // onClick={(e) => { setPhoneValid(true) }}
//                 />
//                 {/* {validPhone
//                   ?
//                   ""
//                   :
//                   <span className="text-[#E24A29] h-5"> Please enter a valid phone number </span>
//                 } */}
//                 {fieldError.phone_number && (
//                   <p role="alert" className="text-red-700">
//                     {fieldError.phone_number}
//                   </p>
//                 )}
//               </div>

//               {/* email */}
//               <div className="max-w-[330px] w-full pb-[20px]">
//                 <label
//                   htmlFor="email"
//                   className="job-form-label block text-lg font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
//                   placeholder="contact@company.com"
//                   style={{
//                     // borderColor: validEmail ? "" : "red",
//                     borderColor: fieldError.email ? "" : "red",
//                   }}
//                   // onClick={(e) => { setEmailValid(true) }}
//                 />
//                 {/* {validEmail
//                   ?
//                   ""
//                   :
//                   <span className="text-[#E24A29] h-5"> Please enter a valid email ID </span>
//                 } */}
//                 {/* {fieldError.email && (
//                   <p role="alert" className="text-red-700">
//                     {fieldError.email}
//                   </p>
//                 )} */}
//               {/* </div> */}

//                 {/* address */}
//                 <div className="max-w-[330px]  w-full pb-[20px]">
//                   <label
//                     htmlFor="address"
//                     className="job-form-label block text-lg font-medium text-gray-700"
//                   >
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                     className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
//                     placeholder="contact@company.com"
//                   />
//                   {fieldError.address && (
//                     <p role="alert" className="text-red-700">
//                       {fieldError.address}
//                     </p>
//                   )}
//                 </div>

//                 {/* state */}
//                 <div className="max-w-[330px] w-full pb-[20px]">
//                   <label
//                     htmlFor="state"
//                     className="job-form-label block text-lg font-medium text-gray-700"
//                   >
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                     className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
//                     placeholder="Telengana"
//                   />
//                   {fieldError.state && (
//                     <p role="alert" className="text-red-700">
//                       {fieldError.state}
//                     </p>
//                   )}
//                 </div>

//                 {/* postal code */}
//                 <div className="max-w-[330px] w-full pb-[20px]">
//                   <label
//                     htmlFor="postal_code"
//                     className="job-form-label block text-lg font-medium text-gray-700"
//                   >
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     id="postal_code"
//                     name="postal_code"
//                     value={formData.postal_code}
//                     onChange={handleChange}
//                     required
//                     className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
//                     placeholder="XXX181"
//                   />
//                   {/* {fieldError.postal_code && (
//                     <p role="alert" className="text-red-700">
//                       {fieldError.postal_code}
//                     </p>
//                   )} */}
//                 </div>
//               </div>

//               {/* upload resumi */}
//               <div>
//                 {/* {file && <p>{file?.name}</p>} */}
//                 <div className="upperRow"
//                   style={{
//                     display: 'flex',
//                   }}
//                 >
//                   <button
//                     onClick={handleButtonClick}
//                     type="button"
//                     className="max-w-[265px] w-full  font-bold rounded-md border border-blue-400 text-blue-400 px-4 py-3"
//                     style={{
//                       border: fileName === "" ? "1px solid #146DFA" : "1px solid #EBEDF0",
//                       color: fileName === "" ? "#146DFA" : "#3C4043",
//                       fontWeight: fileName === "" ? "500" : "400",
//                     }}
//                   >
//                     {/* Upload Resume */}
//                     {fileName === ""
//                       ?
//                       "Upload Resume"
//                       :
//                       <div style={{ display: "flex" }}>
//                         <img src={pdficon} alt="" title="PDF file" style={{ cursor: 'pointer' }} />
//                         <span className="pl-[10px]">
//                           {fileName}
//                         </span>
//                       </div>
//                     }
//                   </button>
//                   <input
//                     ref={fileInputRef}
//                     // onChange={(e) => {
//                     //   setFile(e.target.files[0]);
//                     // }}
//                     onChange={handlefileupload}
//                     accept=".pdf"
//                     type="file"
//                     style={{ display: "none" }}
//                   />
//                   {fileName === ""
//                     ?
//                     ""
//                     :
//                     <img
//                       src={deleteIcon}
//                       alt="deleteIcon"
//                       title="Delete file"
//                       onClick={handledeleteFile}
//                       style={{ cursor: 'pointer', paddingLeft: '10px' }}
//                     />
//                   }

//                 </div>
//                 <p className="p-0 ml-1 text-sm"
//                   style={{
//                     //styleName: Body Text B2;
//                     // font-family: Noto Sans;
//                     fontSize: '14px',
//                     fontWeight: '400',
//                     lineHeight: '21px',
//                     letterSpacing: '0em',
//                     textAlign: 'left',
//                     color: '#6D747A'
//                   }}
//                 >
//                   {fileName !== ""
//                     ?
//                     <span style={{ display: 'flex' }}>
//                       <img src={tick} alt="tick" title="File uploaded" style={{ cursor: 'pointer' }} />
//                       File Uploaded
//                     </span>
//                     :
//                     "DOC, DOCX or PDF. Max size 5 MB."}
//                 </p>
//               </div>

//               {/* terms and condition and captcha */}

//               <div className="reCaptcha-container">
//                 <ReCaptchaV2
//                   sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"
//                   onChange={handleCaptchaChange}
//                   className="reCaptcha-container"
//                 />
//                 <div className="mt-4">
//                   <label htmlFor="acceptTerms" className="flex items-center pl-[1px]">
//                     <input
//                       type="checkbox"
//                       id="acceptTerms"
//                       name="acceptTerms"
//                       checked={acceptTerms}
//                       onChange={() => setacceptTerms((pre) => !pre)}
//                       className="form-checkbox h-5 w-5 text-blue-600"
//                       style={{
//                         borderRadius: '10px'
//                       }}
//                     />
//                     <div className="job-privacy-policy ml-2 text-sm text-[#08090A] pl-[10px]" style={{ cursor: 'text' }}>
//                       You agree to our friendly
//                       <span className="text-[#146DFA]" style={{ cursor: 'pointer' }}> privacy policy </span>
//                     </div>
//                   </label>
//                 </div>
//               </div>

//               <div className=" flex justify-center items-center">
//                 <button
//                   type="submit"
//                   id="job-submit-button"
//                   disabled={!acceptTerms || captchaRes === ""}
//                   className={` ${!acceptTerms || captchaRes === ""
//                     ? "bg-gray-300 cursor-not-allowed"
//                     : "bg-blue-500"
//                     } text-white px-4 py-2 rounded-md `}
//                   style={{
//                     width: '118px',
//                     height: '48px',
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default JobApplyForm;

import "react-phone-input-2/lib/style.css";

import React, { useRef, useState } from "react";

import PhoneInput from "react-phone-input-2";
import ReCaptchaV2 from "react-google-recaptcha";
import deleteIcon from "../../assets/CareersPage/delete.svg"
import pdficon from "../../assets/CareersPage/pdfIcon.svg"
import tick from "../../assets/CareersPage/tick.svg"
import toast from "react-hot-toast";
import { useApplyInAJobMutation } from "../../redux/features/careers/careers";

const JobApplyForm = ({ data }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef(null);
  const [acceptTerms, setacceptTerms] = useState(false);
  const [captchaRes, setCaptchaRes] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [validEmail, setEmailValid] = useState(true)
  const [validPhone, setPhoneValid] = useState(true)

  const [submitData, { isLoading, isError, isSuccess, error }] =
    useApplyInAJobMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    postal_code: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleCaptchaChange = (response) => {
    setCaptchaRes(response);
  };

  async function verifyEmailPhone(email, phone) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email))
    setPhoneValid(phone.length === 12)
    if (emailRegex.test(email) && (phone.length === 12)) {
      return true
    }
    else {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      career: String(data.id),
      phone_number,
      resume_file: file,
    });

    let formsData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formsData.append(key, value);
    });

    formsData.append("career", String(data?.id));
    formsData.append("phone_number", phone_number);
    formsData.append("resume_file", file);

    // verify email and phone
    verifyEmailPhone(formData.email, phone_number).then((data) => {
      if (!data) {
        return;
      }
    })

    const result = await submitData(formsData);

    if (result.data) {
      toast.success("Your successfully submit the spplication", { id: 25 });
      setFormData({
        name: "",
        email: "",
        address: "",
        state: "",
        postal_code: "",
      });
      setacceptTerms(false);
      setCaptchaRes("");
      setFile("");
      setFileName("");
      setphone_number("");
    }
  };

  const handlefileupload = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name)
  }

  const handledeleteFile = (e) => {
    setFile("");
    setFileName("")
  }

  return (
    <main
      style={{ fontFamily: "font-family: Helvetica Neue" }}
      className=" w-full"
    >
      <header>
        <h1 className="job-form-head text-xl md:text-2xl lg:text-3xl font-bold">
          Apply for this role
        </h1>
        <p className="job-form-subhead text-[15px]">
          Enter the details and share your resume below. We’ll get back to you
          if your application is shortlisted.
        </p>
      </header>

      <section className="w-full ">
        <div className="max-w-6xl flex mt-8">
          <form
            onSubmit={handleSubmit}
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md border-[#CED4DA]"
                  placeholder="John Doe"
                />
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
                  }}
                  inputStyle={{
                    width: "100%",
                    maxWidth: "330px",
                    height: "50px",
                    color: '#08090A'
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
                  onClick={(e) => { setPhoneValid(true) }}
                />
                {validPhone
                  ?
                  ""
                  :
                  <span className="text-[#E24A29] h-5"> Please enter a valid phone number </span>
                }
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com"
                  style={{
                    borderColor: validEmail ? "" : "red",
                  }}
                  onClick={(e) => { setEmailValid(true) }}
                />
                {validEmail
                  ?
                  ""
                  :
                  <span className="text-[#E24A29] h-5"> Please enter a valid email ID </span>
                }
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
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com"
                />
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
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="Telengana"
                />
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
                  value={formData.postal_code}
                  onChange={handleChange}
                  required
                  className="job-form-input mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="XXX181"
                />
              </div>
            </div>

            {/* upload resumi */}
            <div>
              {/* {file && <p>{file?.name}</p>} */}
              <div className="upperRow"
                style={{
                  display: 'flex',
                }}
              >
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="max-w-[265px] w-full  font-bold rounded-md border border-blue-400 text-blue-400 px-4 py-3"
                  style={{
                    border: fileName === "" ? "1px solid #146DFA" : "1px solid #EBEDF0",
                    color: fileName === "" ? "#146DFA" : "#3C4043",
                    fontWeight: fileName === "" ? "500" : "400",
                  }}
                >
                  {/* Upload Resume */}
                  {fileName === ""
                    ?
                    "Upload Resume"
                    :
                    <div style={{ display: "flex" }}>
                      <img src={pdficon} alt="" title="PDF file" style={{ cursor: 'pointer' }} />
                      <span className="pl-[10px]">
                        {fileName}
                      </span>
                    </div>
                  }
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
                {fileName === ""
                  ?
                  ""
                  :
                  <img
                    src={deleteIcon}
                    alt="deleteIcon"
                    title="Delete file"
                    onClick={handledeleteFile}
                    style={{ cursor: 'pointer', paddingLeft: '10px' }}
                  />
                }

              </div>
              <p className="p-0 ml-1 text-sm"
                style={{
                  //styleName: Body Text B2;
                  // font-family: Noto Sans;
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '21px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#6D747A'
                }}
              >
                {fileName !== ""
                  ?
                  <span style={{ display: 'flex' }}>
                    <img src={tick} alt="tick" title="File uploaded" style={{ cursor: 'pointer' }} />
                    File Uploaded
                  </span>
                  :
                  "DOC, DOCX or PDF. Max size 5 MB."}
              </p>
            </div>

            {/* terms and condition and captcha */}

            <div className="reCaptcha-container">
              <ReCaptchaV2
                sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"
                onChange={handleCaptchaChange}
                className="reCaptcha-container"
              />
              <div className="mt-4">
                <label htmlFor="acceptTerms" className="flex items-center pl-[1px]">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setacceptTerms((pre) => !pre)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    style={{
                      borderRadius: '10px'
                    }}
                  />
                  <div className="job-privacy-policy ml-2 text-sm text-[#08090A] pl-[10px]" style={{ cursor: 'text' }}>
                    You agree to our friendly
                    <span className="text-[#146DFA]" style={{ cursor: 'pointer' }}> privacy policy </span>
                  </div>
                </label>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button
                type="submit"
                id="job-submit-button"
                disabled={!acceptTerms || captchaRes === ""}
                className={` ${!acceptTerms || captchaRes === ""
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500"
                  } text-white px-4 py-2 rounded-md `}
                style={{
                  width: '118px',
                  height: '48px',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default JobApplyForm;
