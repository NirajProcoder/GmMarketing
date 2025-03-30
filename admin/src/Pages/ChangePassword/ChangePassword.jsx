import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from "@mui/lab/LoadingButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Button from "@mui/lab/LoadingButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [isPasswordShow, setisPasswordShow] = useState(false);
  const [isPasswordShow2, setisPasswordShow2] = useState(false);

  return (
    <section className="bg-white w-full ">
      {/* Header */}
      <header className="w-full fixed top-0 left-0  px-4 py-3 flex items-center justify-between z-50">
        {/* Company Logo */}
        <Link to="/">
          <img
            src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            alt="Company Logo"
            className="w-[120px]"
          />
        </Link>

        {/* Buttons Section */}
        <div className="flex items-center gap-0">
          {/* Login Button */}
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className=" !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 !flex gap-1">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>

          {/* Sign Up Button */}
          <NavLink to="/sign-up" exact={true} activeClassName="isActive">
            <Button className=" !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 !flex gap-1">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      {/* Background Image */}
      <img
        src="AdminLoginBackground.web.webp"
        alt="Background Image"
        className="w-full fixed top-0 left-0 opacity-5"
      />

      {/* Login Box */}
      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="/adminlogo.svg" alt="Logo" className="mx-auto" />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back! <br />
          You can Change your password from here
        </h1>

        <br />
        {/* Form Section */}
        <form action="" className="w-full px-8 mt-3">
          {/* New Password */}
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1"> New Password *</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] h-[35px] !min-w-[35px] !text-gray-600 "
                onClick={() => setisPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <FaRegEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1"> Confirm Password *</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow2 === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] h-[35px] !min-w-[35px] !text-gray-600 "
                onClick={() => setisPasswordShow2(!isPasswordShow2)}
              >
                {isPasswordShow2 === false ? (
                  <FaRegEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <Button className="btn-blue btn-lg w-full">Change Password</Button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
