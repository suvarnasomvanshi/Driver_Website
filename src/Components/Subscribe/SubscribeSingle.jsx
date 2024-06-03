import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { base_url } from "../../utils/utils";
import { Link } from "react-router-dom";

const SubscribeSingle = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")

  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(enteredEmail)) {
      // valid
      setError(false)
    } else {
      setError(true)
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Submitting the form")
    const newData = {
      email: data.bmail,
    };
    console.log(newData);
    fetch(`${base_url}/blog/store-email/`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.message) {
          toast.success("Subscribed Successfully");

        } else {
          toast.error("This email is already Subscribed");
        }
      })
      .catch((error) => {
        console.error("API request error: " + error);
      });
  };
  return (
    <div className="w-full h-1/4 flex flex-col justify-evenly items-start gradient_card py-5 px-[16px]">
      <form
        className={`w-full formValidation mt-[20px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex justify-start items-center formValidation mt-[20px]">
          <input
            placeholder="Enter your email"
            {...register("bmail", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
            style={{
              color: '#08090A',
              border: error ? '1px solid #E24A29' : '',
              outline: 'none',
              marginBottom:'10px'
            }}
            value={email}
            onChange={handleEmail}
            aria-invalid={errors.bmail ? "true" : "false"}
            className="px-[16px] h-[48px] rounded-[4px] flex-grow-1 w-full border border-[#CED4DA] text-[16px] font-normal text-[#6D747A] max-w-[392px]"
          />
          {errors.bmail && (
            <p role="alert" className="error" style={{marginBottom:'5px'}}>
              {errors.bmail.message}
            </p>
          )}
          {error && <p role="alert" className="error text-[#E24A29]" style={{ color: '$E24A29',marginBottom:'10px' }}>
            Enter a valid Email address
          </p>}
        </div>
        <div className="text-sm text-[#3C4043] mt-[16px]"
          style={{
            fontFamily: 'Noto Sans',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
          By submitting, you agree to our privacy policy. For more information
          on our privacy practices, please review our
          <Link to="/privacypolicy" className="text-[#146DFA] ">
            {"   "}Privacy Policy
          </Link>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center bg-[#146DFA] rounded-md px-[18px] py-[12px] text-white text-[16px] font-normal mt-[16px]"
          disabled={email === ""}
          style={{
            cursor: email === "" ? 'no-drop' : 'pointer',
            backgroundColor: email === "" ? "#146DFA33" : "#146DFA"
          }}
        >
          Submit
        </button>
      </form>
      {/* <form className="">
          <input type="text" placeholder="Your email address" required />
          <button type="button">
            <FaArrowRight className="text-white" />
          </button>
        </form> */}
    </div>
  );
};

export default SubscribeSingle