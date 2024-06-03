import React, { useRef, useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
import { useApplyInAJobMutation } from "../../redux/features/careers/careers";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
const JobApplyForm = ({ data }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [acceptTerms, setacceptTerms] = useState(false);
  const [captchaRes, setCaptchaRes] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [submitData, { isLoading, isError, isSuccess, error }] =
    useApplyInAJobMutation();
const [fieldError, setFieldError] = useState({
  name: "",
  email: "",
  address: "",
  state: "",
  postal_code: "",
});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    postal_code: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    console.log(formData);
    // if (formData.name === "") {
    //   //set error for name on useState
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     name: "Please enter your name",
    //   }));
    //   return;
    // } else if (formData.name.match(/^[a-z A-Z]*$/) === null) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     name: "Please enter valid name",
    //   }));

    //   return;
    // } else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     name: "",
    //   }));
    // }

    // if (formData.email === "") {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     email: "Please enter your email",
    //   }));
    //   return;
    // } else if (
    //   formData.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/) == null
    // ) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     email: "Please enter valid email",
    //   }));
    //   return;
    // } else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     email: "",
    //   }));
    // }
    // if (formData.address === "") {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     address: "Please enter your address",
    //   }));
    //   return;
    // } else if (formData.address.match(/^[a-zA-Z0-9 ]*$/) == null) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     address: "Please enter valid address",
    //   }));
    //   return;
    // } else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     address: "",
    //   }));
    // }

    // if (formData.state === "") {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     state: "Please enter your state",
    //   }));
    //   return;
    // } else if (formData.state.match(/^[a-zA-Z ]*$/) == null) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     state: "Please enter valid state",
    //   }));
    //   return;
    // } else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     state: "",
    //   }));
    // }

    // if (formData.postal_code === "") {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     postal_code: "Please enter your postal code",
    //   }));
    //   return;
    // } else if (formData.postal_code.match(/^[0-9]*$/) == null) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     postal_code: "Please enter valid postal code",
    //   }));
    //   return;
    // } else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     postal_code: "",
    //   }));
    // }

    // if (phone_number === "") {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     phone_number: "Please enter your phone number",
    //   }));
    //   return;
    // } else if (phone_number.match(/^[0-9]*$/) == null) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     phone_number: "Please enter valid phone number",
    //   }));
    //   return;
    // } else if (phone_number.length < 10) {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     phone_number: "Please enter valid phone number",
    //   }));
    //   return;
    // }
    // else {
    //   setFieldError((prevData) => ({
    //     ...prevData,
    //     phone_number: "",
    //   }));
    // }

 



  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleCaptchaChange = (response) => {
    setCaptchaRes(response);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      career: String(data.id),
      phone_number,
      resume_file: file,
    });
    //add validation for name,email,address,state,postal_code
    

console.log("hello");



    let formsData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formsData.append(key, value);
    });
    console.log(formsData);
 if (file == null) {
   toast.error("Please upload your resume");
   return;
 }
 console.log(file);
 //check uploaded file is pdf,doc,docx
 if (
   file.type !== "application/pdf" &&
   file.type !== "application/msword" &&
   file.type !==
     "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
 ) {
   toast.error("Please upload pdf,doc,docx file");
   return;
 }
 if (file.size > 5000000) {
   toast.error("Please upload file less than 5MB");
   return;
 }

 console.log(data);
 if (captchaRes === "" || !acceptTerms) {
   toast.error("Please accept terms and condition");
   return;
 }

 if (
   data.name === "" ||
   data.email === "" ||
   data.address === "" ||
   data.state === "" ||
   data.postal === ""
 ) {
   toast.error("Please fill all the fields");
   return;
    } 
    
    formsData.append("career", String(data?.id));
    formsData.append("phone_number", phone_number);
    formsData.append("resume_file", file);
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
      setphone_number("");
    }
  };

  return (
    <main
      style={{ fontFamily: "font-family: Helvetica Neue" }}
      className=" w-full"
    >
      <header>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Appliy for this role
        </h1>
        <p className="text-         [15px]">
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

            <div className=" w-full flex flex-wrap just  items-center gap-10">
              {/* name */}

              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border  rounded-md  border-[#CED4DA]"
                  placeholder="john Doe"
                />
                {fieldError.name && (
                  <p role="alert" className="text-red-700">
                    {fieldError.name}
                  </p>
                )}
              </div>

              {/* phone */}
              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="phone_number"
                  className="block text-lg font-medium text-gray-700"
                >
                  Phone
                </label>
                <PhoneInput
                  containerStyle={{
                    margin: "1px",
                    width: "100%",
                    maxWidth: "330px",
                    border: "1px ",
                    borderRadius: "6px",
                  }}
                  inputStyle={{
                    width: "100%",
                    maxWidth: "330px",
                    height: "50px",
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
                />
                {fieldError.phone_number && (
                  <p role="alert" className="text-red-700">
                    {fieldError.phone_number}
                  </p>
                )}
              </div>
              {/* email */}
              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com            "
                />
                {fieldError.email && (
                  <p role="alert" className="text-red-700">
                    {fieldError.email}
                  </p>
                )}
              </div>
              {/* address */}

              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="address"
                  className="block text-lg font-medium text-gray-700"
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com            "
                />
                {fieldError.adress && (
                  <p role="alert" className="text-red-700">
                    {fieldError.adress}
                  </p>
                )}
              </div>

              {/* state */}
              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="state"
                  className="block text-lg font-medium text-gray-700"
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="Telengana          "
                />
                {fieldError.state && (
                  <p role="alert" className="text-red-700">
                    {fieldError.state}
                  </p>
                )}
              </div>

              {/* postal code */}
              <div className="max-w-[330px]  w-full">
                <label
                  htmlFor="postal_code"
                  className="block text-lg font-medium text-gray-700"
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="12369         "
                />
                {fieldError.postal_code && (
                  <p role="alert" className="text-red-700">
                    {fieldError.postal_code}
                  </p>
                )}
              </div>
            </div>

            {/* upload resumi */}
            <div onClick={handleButtonClick}>
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
              
            </div>

            {/* terms and condition and captcha */}

            <div>
              <ReCaptchaV2
                sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F"
                onChange={handleCaptchaChange}
              />
              <div className="mt-4">
                <label htmlFor="acceptTerms" className="flex items-center">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setacceptTerms((pre) => !pre)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I accept the terms and conditions
                  </span>
                </label>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button
                type="submit"
                disabled={!acceptTerms || captchaRes === ""}
                className={` ${
                  !acceptTerms || captchaRes === ""
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500"
                } text-white px-4 py-2 rounded-md `}
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
