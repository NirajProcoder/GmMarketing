import { useState } from "react";
import Button from "@mui/material/Button";
import QtyBox from "../QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { Rating } from "@mui/material";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[600] mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        consectetur a commodi quisquam suscipit!
      </h1>

      {/* Product Brand */}
      <div className="flex items-conter gap-3">
        <span className="text-gray-400 text-[13px]">
          Brands :<span className="font-[500] text-gray-800">Ariane</span>
        </span>
        {/* Product Rating */}
        <Rating name="small-size" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">Reviews (4)</span>
      </div>
      {/* Price */}
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
          ₹ 789/-
        </span>
        <span className="price text-primary text-[20px] font-[600]">
          ₹ 599/-
        </span>
        {/* Available In Stock  */}
        <span>
          <span className="text-[14px]">
            Available In Stock :- &nbsp;
            <span className="text-green-600 text-[14px] font-bold">
              79 Items
            </span>
          </span>
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 pr-10px mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fugiat,
        qui molestiae nihil recusandae sequi aliquid suscipit magnam voluptates
        magni earum, nobis corrupti delectus aperiam. Quia, dolores. Vel maxime
        inventore nihil consectetur, sit eum necessitatibus dolores atque
        mollitia earum dolorem nisi sunt accusamus voluptate dignissimos ut
        voluptates quisquam laudantium dolorum.
      </p>

      {/* Size Button */}
      <div className="flex items-center gap-3">
        <span className="text-[16px]">Size : </span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>

      {/* Free Shipping */}
      <p className="text-[14px] mt-5 mb-2 text-[#000]">
        Free Shipping (Est. Delivery in 5-7 days)
      </p>

      {/* Product Quantity */}
      <div className="flex items-center gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox />
        </div>

        {/* Add To Cart Button */}
        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
        </Button>
      </div>

      {/* Product Actions Icons  */}
      <div className="flex items-center gap-4 mt-4">
        {/* Add To Wishlist Button */}
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <FaRegHeart className="text-[18px]" />
          Add To Wishlist
        </span>

        {/* Add To Compare Button */}
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <IoGitCompareOutline className="text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
