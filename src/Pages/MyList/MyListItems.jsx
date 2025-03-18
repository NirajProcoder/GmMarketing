// import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";

const MyListItems = () => {
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to={"/product/620645"} className="group">
          <img
            src="http://localhost:5173/Products/Products2.jpg"
            alt="Products2"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-0 right-0 text-[22px] link transition-all" />
        {/* Product Name */}
        <span className="text-[13px]">Ariane</span>
        <h3 className="text-[15px]">
          <Link className="link">
            Ariane Prime Flat Plate 27cm Packing 12pcs
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2 mb-2">
          {/* Product Price */}
          <span className="price text-[14px] font-[600]">₹2939/-</span>
          {/* Product MRP */}
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            ₹4224/-
          </span>
          {/* Product Offer */}
          <span className="price text-primary text-[14px] font-[600]">
            40% OFF
          </span>
        </div>
        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
