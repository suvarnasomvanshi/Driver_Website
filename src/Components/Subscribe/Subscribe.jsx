import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { base_url } from "../../utils/utils";
import { Link } from "react-router-dom";

const Subscribe = () => {
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
    if (
          !data.mail.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    ) {
      toast("Please enter a valid email");
      return;
    }
    const newData = {
      email: data.mail,
    };
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
    <div className="w-full h-1/4 flex flex-col justify-evenly items-start gradient_card py-5 pb-[30px] px-[16px]">
      <div className="text-[20] font-medium"
        style={{
          fontFamily: 'Helvetica Neue-Medium',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        Subscribe for insights & updates
      </div>
      <div className="text-sm text-[#3C4043] mt-2"
        style={{
          fontFamily: 'Noto Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        By submitting, you agree to our privacy policy. For more information on
        our privacy practices, please review our
        <Link to="/privacypolicy" className="text-[#146DFA] ">
          {"   "}Privacy Policy
        </Link>
      </div>
      <form
        className={`w-full flex justify-center items-center formValidation mt-[20px]`}
        onSubmit={handleSubmit(onSubmit)}
        style={{
          // border:error ? '1px solid #E24A29' : '',
        }}
      >
        <input
          placeholder="Your email address"
          {...register("mail", {
            required: "Your email address",
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "Please enter a valid email",
            },
          })}
          style={{
            color: '#08090A',
            border:error ? '1px solid #E24A29' : '',
            outline:'none'
          }}
          value={email}
          onChange={handleEmail}
          aria-invalid={errors.mail ? "true" : "false"}
          className="px-[16px] h-[48px] rounded-[4px] flex-grow-1 w-full border border-[#CED4DA] text-[16px] font-normal text-[#6D747A]"
        />
        {errors.mail && (
          <p role="alert" className="error">
            {errors.mail.message}
          </p>
        )}
        {error && <p role="alert" className="error text-[#E24A29]" style={{color:'$E24A29'}}>
            Enter a valid Email address
          </p> }
        <button
          type="submit"
          className="h-[48px] min-w-[48px] flex justify-center items-center bg-[#2B6997] rounded-full ms-[16px]"
        >
          <FaArrowRight className="text-white" />
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

export default Subscribe;
