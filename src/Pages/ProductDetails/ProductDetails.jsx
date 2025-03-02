// import React from 'react'

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
  return (
    <>
      <div className="py-5 ">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Crockery
            </Link>

            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Lorem Ipsum Dolor Sit Amet Consectetur
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%]">
            <h1 className="text-[22px] font-[600] mb-2">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>
            <div className="flex items-conter gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands :<span className="font-[500] text-gray-800">Ariane</span>
              </span>

              <Rating
                name="small-size"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Reviews (4)</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                ₹789/-
              </span>
              <span className="price text-primary text-[18px] font-[600]">
                ₹599/-
              </span>
            </div>
            <br />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              fugiat, qui molestiae nihil recusandae sequi aliquid suscipit
              magnam voluptates magni earum, nobis corrupti delectus aperiam.
              Quia, dolores. Vel maxime inventore nihil consectetur, sit eum
              necessitatibus dolores atque mollitia earum dolorem nisi sunt
              accusamus voluptate dignissimos ut voluptates quisquam laudantium
              dolorum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
