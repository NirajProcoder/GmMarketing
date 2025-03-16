// import React from 'react'
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <section className="py-10 ">
      <div className="container flex gap-5">
        {/* Left Section */}
        <div className="leftCol w-[70%] ">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>
            {/* Form Section */}
            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                {/* Full Name */}
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>

                {/* Email */}
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>

              {/* Address 1 */}
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House No. and Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              {/* Address 2 */}
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              {/* City and State */}
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Town / City *"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State / Country *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Postcode / ZIP *</h6>

              {/* Postcode  */}
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="number"
                    className="w-full"
                    label="Postcode *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>
            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal </span>
            </div>

            <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
              {/* Product Info No 1 */}
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    {/* Product Image */}
                    <img
                      src="https://gargcrockerystore.com/wp-content/uploads/2024/06/Ariane-Prime-Flat-Plate-27cm-APRARN000011027-600x600.jpg"
                      alt="Product Image"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  {/* Product Name & Quantity */}
                  <div className="info">
                    <h4 className="text-[14px]">Ariane Prime Fla.... 27cm </h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <div className="text-[14px] font-[500]">₹2999/- </div>
              </div>
              {/* Product Info No 2 */}
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    {/* Product Image */}
                    <img
                      src="https://gargcrockerystore.com/wp-content/uploads/2024/06/Ariane-Prime-Flat-Plate-27cm-APRARN000011027-600x600.jpg"
                      alt="Product Image"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  {/* Product Name & Quantity */}
                  <div className="info">
                    <h4 className="text-[14px]">Ariane Prime Fla.... 27cm </h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <div className="text-[14px] font-[500]">₹2999/- </div>
              </div>
              {/* Product Info No 3 */}
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    {/* Product Image */}
                    <img
                      src="https://gargcrockerystore.com/wp-content/uploads/2024/06/Ariane-Prime-Flat-Plate-27cm-APRARN000011027-600x600.jpg"
                      alt="Product Image"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  {/* Product Name & Quantity */}
                  <div className="info">
                    <h4 className="text-[14px]">Ariane Prime Fla.... 27cm </h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <div className="text-[14px] font-[500]">₹2999/- </div>
              </div>
              {/* Product Info No 4 */}
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    {/* Product Image */}
                    <img
                      src="https://gargcrockerystore.com/wp-content/uploads/2024/06/Ariane-Prime-Flat-Plate-27cm-APRARN000011027-600x600.jpg"
                      alt="Product Image"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  {/* Product Name & Quantity */}
                  <div className="info">
                    <h4 className="text-[14px]">Ariane Prime Fla.... 27cm </h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>
                </div>
                <div className="text-[14px] font-[500]">₹2999/- </div>
              </div>
            </div>

            <Button className="btn-org btn-lg w-full flex gap-2 items-center "> <BsFillBagCheckFill className="text-[20px]" /> Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
