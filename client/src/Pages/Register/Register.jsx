// import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Create an Account
          </h3>
          {/* Form Section */}
          <form action="" className="w-full mt-5">
            {/* Full Name */}
            <div className="form-group w-full mb-5">
              <TextField
                type="text"
                id="name"
                label="Full Name *"
                variant="outlined"
                className="w-full"
              />
            </div>
            {/* Email */}
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email id *"
                variant="outlined"
                className="w-full"
              />
            </div>

            {/* Password */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
              {/* Show Password & Hide Password */}
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => {
                  setIsPasswordShow(!isPasswordShow);
                }}
              >
                {isPasswordShow === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            {/* Register Button */}
            <div className="flex items-center w-full mt-3 mb-3">
              <Button className="btn-org btn-lg w-full">Register</Button>
            </div>
            {/* Login Link */}
            <p className="text-center">
              Already have an account?
              <Link
                className="link text-[14px] font-[600] text-primary"
                to={"/login"}
              >
                &nbsp; Login
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or continue with social Account
            </p>
            {/* Google Login */}
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
