// import React from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt, FaRegUser } from "react-icons/fa";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="cart bg-white shadow-md rounded-md ">
            {/* Profile Image & Name */}
            <div className="w-full p-5 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0  z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <FaCloudUploadAlt className=" text-white text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <h3>Niraj Procoder</h3>
              <h4 className="text-[13px] font-[500]">
                nirajprocoder@gmail.com
              </h4>
            </div>

            <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
              {/* My Account */}
              <li className="w-full">
                <NavLink
                  to="/my-account"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaRegUser className="text-[17px]" /> My Account
                  </Button>
                </NavLink>
              </li>
              {/* My Orders */}
              <li className="w-full">
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoBagCheckOutline className="text-[17px]" /> My Orders
                  </Button>
                </NavLink>
              </li>
              {/* My List */}
              <li className="w-full">
                <NavLink to="/my-list" exact={true} activeClassName="isActive">
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoMdHeartEmpty className="text-[17px]" /> My List
                  </Button>
                </NavLink>
              </li>
              {/* Logout */}
              <li className="w-full">
                <NavLink to="/logout" exact={true} activeClassName="isActive">
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoIosLogOut className="text-[17px]" /> Logout
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />

            <form action="" className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="Email *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4 gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-lg w-[100px] btn-border">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
