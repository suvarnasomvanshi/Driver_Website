import React, { useRef, useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useApplyInAJobMutation } from "../../redux/features/careers/careers";
const JobApplyForm = ({ data }) => {
  const [file, setFile] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const fileInputRef = useRef(null);
  const [acceptTerms, setacceptTerms] = useState(false);
  const [captchaRes, setCaptchaRes] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [submitData, { isLoading, isError, isSuccess, error }] =
    useApplyInAJobMutation();

  const [formData,setFormData] = useState({});

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

  const onSubmit = (data) => {
    console.log(data);
    console.log(phone_number);
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
    if (isLoading) {
      return;
    }
    if (isError) {
      toast.error(error.message);
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
    } else {
      setFormData(data);
      handleSubmit2()
    }

    // const newData = {
    //   email: data.mail,
    // };
    // fetch(`${base_url}/blog/store-email/`, {
    //   method: "POST",
    //   body: JSON.stringify(newData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     if (data.message) {
    //       toast("Subscribed Successfully");
    //     } else {
    //       toast("This email is already Subscribed");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("API request error: " + error);
    //   });
  };

  const handleSubmit2 = async () => {
    // e.preventDefault();
    // console.log({
    //   ...formData,
    //   career: String(data.id),
    //   phone_number,
    //   resume_file: file,
    // });
    console.log(formData);
    let formsData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formsData.append(key, value);
    });
    console.log(formsData);

    formsData.append("career", String(data?.id));
    formsData.append("phone_number", phone_number);
    formsData.append("resume_file",file);
    if (formsData === null || formsData === undefined || formsData === "") {
      
      console.log(formsData);
      const result = await submitData(formsData);
      console.log(result);
    }

    // post data to backend carrer/career_apply/

    // fetch(`${base_url}/carrer/career_apply`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((res) => console.log(res))
    //   .catch((error) => {
    //     console.error("API request error: " + error);
    //   });
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
        <p className="text-[15px]">
          Enter the details and share your resume below. We’ll get back to you
          if your application is shortlisted.
        </p>
      </header>

      <section className="w-full ">
        <div className="max-w-6xl flex mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
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
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border  rounded-md  border-[#CED4DA]"
                  placeholder="john Doe"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 20,
                    pattern: {
                      value: /^[A-Z a-z]+$/i,
                      message: "Please enter a valid name",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p role="alert" className="text-red-700">
                    {errors.name.message}
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
                  {...register("mail", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[a-z.0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                  className="mt-1 py-3 px-4 max-w-[330px]  w-full border rounded-md border-[#CED4DA]"
                  placeholder="contact@company.com"
                />
                {errors.mail && (
                  <p role="alert" className="text-red-700">
                    {errors.mail.message}
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
                  placeholder="1234 Main St"
                  {...register("adress", {
                    required: "Address is required",
                    maxLength: 20,
                    pattern: {
                      value: /^[A-Z a-z0-9]+$/i,
                      message: "Please enter a valid adress",
                    },
                  })}
                  aria-invalid={errors.adress ? "true" : "false"}
                  className="mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md
                border-[#CED4DA]"
                />
                {errors.adress && (
                  <p role="alert" className="text-red-700">
                    {errors.adress.message}
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
                  {...register("state", {
                    required: "State is required",
                    maxLength: 20,
                    pattern: {
                      value: /^[A-Z a-z0-9]+$/i,
                      message: "Please enter a valid Sate",
                    },
                  })}
                  aria-invalid={errors.state ? "true" : "false"}
                  className="mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md
                border-[#CED4DA]"
                  placeholder="Telengana"
                />
                {errors.state && (
                  <p role="alert" className="text-red-700">
                    {errors.state.message}
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
                  {...register("postal_code", {
                    required: "Postal code is required",
                    maxLength: 20,
                    pattern: {
                      value: /^[A-Za-z0-9]+$/i,
                      message: "Please enter a valid postal code",
                    },
                  })}
                  className="mt-1 py-3 px-4 max-w-[330px] w-full border rounded-md
                border-[#CED4DA]"
                  placeholder="12369 "
                />
                {errors.postal_code && (
                  <p role="alert" className="text-red-700">
                    {errors.postal_code.message}
                  </p>
                )}
              </div>
            </div>

            {/* upload resumi */}
            < >
              {file && <p>{file?.name}</p>}

              <button
                type="button"
                className="max-w-[265px] w-full  font-bold rounded-md border border-blue-400 text-blue-400 px-4 py-3"
                onClick={handleButtonClick}
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
            </>

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
