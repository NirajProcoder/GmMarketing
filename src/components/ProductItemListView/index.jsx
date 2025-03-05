// import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)] flex items-center">
      <div className=" group imgWrapper w-[25%] overflow-hidden rounded-md relative">
        {/* Product Image */}
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
            <img
              src="/Products/Products1.jpg"
              alt="Products"
              className="w-full"
            />
            <img
              src="/Products/Products2.jpg"
              alt="Products"
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        {/* Product Discount */}
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          40%
        </span>

        {/* Product Actions Icons */}
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[40px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          {/* Quick View */}
          <Tooltip title="Quick View" placement="left-start">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:text-white group">
              <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white  hover:!text-white" />
            </Button>
          </Tooltip>
          {/* Compare */}
          <Tooltip title="Compare" placement="left-start">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:text-white group">
              <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          {/* Wishlist */}
          <Tooltip title="Wishlist" placement="left-start">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:text-white group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white  hover:!text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Product Brand Name */}
      <div className="info p-3 py-5 px-8 w-[75%] ">
        <h6 className="text-[15px] !font-[400]">
          <Link to="/" className="link transition-all">
            Ariane
          </Link>
        </h6>

        {/* Product Name */}
        <h3 className="text-[18px] title mt-3 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Ariane Prime Flat Plate 27cm Packing of 12pcs
          </Link>
        </h3>
        {/* Product Description */}
        <p className="font-[14px] mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
          autem alias dolorum cupiditate eos rerum libero ipsum est itaque
          dolores, ratione labore eius recusandae!
        </p>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          {/* Product MRP */}
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            ₹4224/-
          </span>
          {/* Product Price */}
          <span className="price text-primary text-[15px] font-[600]">
            ₹2939/-
          </span>
        </div>
        <div className="mt-3">
          <Button className="btn-org flex gap-2 ">
            <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
