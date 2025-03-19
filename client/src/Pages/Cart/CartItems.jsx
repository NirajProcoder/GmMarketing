// import React from 'react'
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";

const CartItems = (props) => {
  // Cart Size
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  //   Cart Qty
  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  //   Cart Size
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  //   Cart Qty
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
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
        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size : {selectedSize}
              <GoTriangleDown />
            </span>
            {/* Size Menu */}
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty : {selectedQty}
              <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
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
      </div>
    </div>
  );
};

export default CartItems;
