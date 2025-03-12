// import React from "react";
import Button from "@mui/material/Button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        {/* Cart Item 1 */}
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/620645" className="block group">
              <img
                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000011021-600x600.jpg"
                alt="Product Image"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/product/620645"} className="link transition-all">
                Ariane Prime Flat Plate 27cm
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 ">
              <span> Qty : </span> <span>2</span>
              <span className="text-primary font-bold">Prie : ₹2999/-</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        {/* Cart Item 2 */}
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/620645" className="block group">
              <img
                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000011021-600x600.jpg"
                alt="Product Image"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/product/620645"} className="link transition-all">
                Ariane Prime Flat Plate 27cm
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 ">
              <span> Qty : </span> <span>2</span>
              <span className="text-primary font-bold">Prie : ₹2999/-</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        {/* Cart Item 3 */}
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/620645" className="block group">
              <img
                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000011021-600x600.jpg"
                alt="Product Image"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/product/620645"} className="link transition-all">
                Ariane Prime Flat Plate 27cm
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 ">
              <span> Qty : </span> <span>2</span>
              <span className="text-primary font-bold">Prie : ₹2999/-</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        {/* Cart Item 4 */}
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/620645" className="block group">
              <img
                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000011021-600x600.jpg"
                alt="Product Image"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to={"/product/620645"} className="link transition-all">
                Ariane Prime Flat Plate 27cm
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 ">
              <span> Qty : </span> <span>2</span>
              <span className="text-primary font-bold">Prie : ₹2999/-</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>
      <br />
      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total Items : 4</span>
            <span className="text-primary font-bold">₹11996/- </span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-primary font-bold">₹199/- </span>
          </div>
        </div>
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax excl.)</span>
            <span className="text-primary font-bold">₹12195/- </span>
          </div>
          <br />
          <div className="flex items-center justify-between w-full gap-5">
            <Link to="/cart" className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full ">View Cart</Button>
            </Link>
            <Link to="/checkout" className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full ">CheckOut</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
