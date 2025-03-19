// import React from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField } from "@mui/material";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

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
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
            
            <ProductDetailsComponent />
           
          </div>
        </div>

        {/* Product Tabs Information */}
        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            {/* Product Description */}
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Product Description
            </span>
            {/* Product Details */}
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            {/* Product Reviews */}
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {/* Product Description Information */}
          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
                dolore facere nesciunt laborum minus facilis nam vel molestiae
                autem minima recusandae enim sit ipsa quae ea error ullam fuga
                mollitia, delectus officiis, at fugit! Id quasi iure quibusdam
                velit blanditiis at? Quis necessitatibus corrupti et, dolorum
                consequuntur vitae quia est?
              </p>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                sapiente sint suscipit, voluptate laborum accusantium blanditiis
                dolores deleniti. Voluptate eum in possimus nobis cumque
                necessitatibus, nemo voluptatem! Ipsa accusamus, sed atque ex
                excepturi voluptas molestias ullam dolores repudiandae
                voluptatibus
              </p>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus perferendis harum voluptate sed fugiat doloribus,
                mollitia aperiam animi veritatis quae natus perspiciatis tempora
                impedit! In praesentium quae, totam voluptas tenetur quibusdam
                error,
              </p>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                totam? Velit, provident modi, magni culpa id sit minima
                aspernatur
              </p>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ratione doloremque maiores? Doloremque exercitationem at itaque
              </p>
            </div>
          )}
          {/* Product Details Information  */}
          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-900 uppercase font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-[500]">
                        35L x 24W x 37-45H(Front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 18.5W x 16.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 24W x 18.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-[500]">
                        35L x 24W x 37-45H(Front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 18.5W x 16.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 24W x 18.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-[500]">
                        35L x 24W x 37-45H(Front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 18.5W x 16.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 24W x 18.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-[500]">
                        35L x 24W x 37-45H(Front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 18.5W x 16.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5L x 24W x 18.5H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Product Reviews Information */}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer ">
                <h2 className="text-[18px] ">Customer Questions & Answers </h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"
                          alt="Image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Niraj Procoder</h4>
                        <h4 className="text-[13px] mb-0">05/03/2025</h4>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Rem aut adipisci velit iste mollitia nisi
                          perferendis voluptate ducimus dolorem reiciendis! Nam
                          ipsa aperiam explicabo nihil similique neque,
                          cupiditate ut harum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"
                          alt="Image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Niraj Procoder</h4>
                        <h4 className="text-[13px] mb-0">05/03/2025</h4>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Rem aut adipisci velit iste mollitia nisi
                          perferendis voluptate ducimus dolorem reiciendis! Nam
                          ipsa aperiam explicabo nihil similique neque,
                          cupiditate ut harum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"
                          alt="Image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Niraj Procoder</h4>
                        <h4 className="text-[13px] mb-0">05/03/2025</h4>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Rem aut adipisci velit iste mollitia nisi
                          perferendis voluptate ducimus dolorem reiciendis! Nam
                          ipsa aperiam explicabo nihil similique neque,
                          cupiditate ut harum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>

                <br />
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      className="w-full"
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      multiline
                      rows={5}
                    />
                    <br /> <br />
                    <Rating name="size-small" defaultValue={4} />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductsSlider items={6}></ProductsSlider>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
