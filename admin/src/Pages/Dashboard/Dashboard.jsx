import React, { useState } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes/DashboardBoxes";
import { Button } from "@mui/material";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge/Badge";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar/Progress";
import { AiOutlineEdit } from "react-icons/ai";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { GoTrash } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";

const Dashboard = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else setIsOpenOrderdProduct(index);
  };
  return (
    <>
      <div className="w-full py-2 px-5 bg-[#f1f1f1] border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3 ">
            Good Morning, <br /> Niraj Procoder
          </h1>
          <p>
            Her's What happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button className="btn-blue !capitalize">
            <FaPlus /> &nbsp; Add Product
          </Button>
        </div>
        <img
          src="/Dashboard Image.jpg"
          alt="Dashboard Image"
          className="w-[250px]"
        />
      </div>
      <DashboardBoxes />

      {/* Products Table & Tailwind Css Table */}
      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Products
            <span className="font-[400] text-[14px]"> (Tailwind Css Table)</span>
          </h2>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            {/* Table Header */}
            <thead className="text-xs text-gray-900 uppercase font-medium">
              {/* Table Row Information */}
              <tr>
                {/* Checkbox */}
                <th scope="col" className="px-6 pr-0 py-3" width="10%">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                {/* Product */}
                <th scope="col" className="px-0 py-3 whitespace-nowrap">
                  Product
                </th>
                {/* Category */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Category
                </th>
                {/* Sub Category */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                  Sub Category
                </th>
                {/* Price */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                {/* Sales */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                {/* Action */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Content */}
            <tbody>
              {/* Table Content No 1 */}
              <tr className="odd:bg-white even:bg-gray-50 border-b 0 border-gray-200">
                {/* Checkbox */}
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                {/* Product Information */}
                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    {/* Product Image */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/620645"}>
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    {/* Product Name & Brand */}
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to="/product/620645">
                          Ariane Prime Flat Plate 27cm Packing 12pcs
                        </Link>
                      </h3>
                      <span className="text-[12px]">Ariane</span>
                    </div>
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-2"> Crockery </td>
                {/* Sub Category */}
                <td className="px-6 py-2">Porcelain</td>
                {/* Price */}
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500px]">
                      ₹3999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </td>
                {/* Sale */}
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span> sale
                  </p>
                  <Progress value={50} type="success" />
                </td>
                {/* Action Button */}
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    {/* Edit */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>

                    {/* View */}
                    <Tooltip title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                      </Button>
                    </Tooltip>
                    {/* Delete */}

                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
                <td className="px-6 py-2"></td>
              </tr>
              {/* Table Content No 2 */}
              <tr className="odd:bg-white even:bg-gray-50 border-b 0 border-gray-200">
                {/* Checkbox */}
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                {/* Product Information */}
                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    {/* Product Image */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/620645"}>
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    {/* Product Name & Brand */}
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to="/product/620645">
                          Ariane Prime Flat Plate 27cm Packing 12pcs
                        </Link>
                      </h3>
                      <span className="text-[12px]">Ariane</span>
                    </div>
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-2"> Crockery </td>
                {/* Sub Category */}
                <td className="px-6 py-2">Porcelain</td>
                {/* Price */}
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500px]">
                      ₹3999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </td>
                {/* Sale */}
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span> sale
                  </p>
                  <Progress value={50} type="success" />
                </td>
                {/* Action Button */}
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    {/* Edit */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>

                    {/* View */}
                    <Tooltip title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                      </Button>
                    </Tooltip>
                    {/* Delete */}

                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
                <td className="px-6 py-2"></td>
              </tr>
              {/* Table Content No 3 */}
              <tr className="odd:bg-white even:bg-gray-50 border-b 0 border-gray-200">
                {/* Checkbox */}
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                {/* Product Information */}
                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    {/* Product Image */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/620645"}>
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    {/* Product Name & Brand */}
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to="/product/620645">
                          Ariane Prime Flat Plate 27cm Packing 12pcs
                        </Link>
                      </h3>
                      <span className="text-[12px]">Ariane</span>
                    </div>
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-2"> Crockery </td>
                {/* Sub Category */}
                <td className="px-6 py-2">Porcelain</td>
                {/* Price */}
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500px]">
                      ₹3999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </td>
                {/* Sale */}
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span> sale
                  </p>
                  <Progress value={50} type="success" />
                </td>
                {/* Action Button */}
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    {/* Edit */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>

                    {/* View */}
                    <Tooltip title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                      </Button>
                    </Tooltip>
                    {/* Delete */}

                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
                <td className="px-6 py-2"></td>
              </tr>
              {/* Table Content No 4 */}
              <tr className="odd:bg-white even:bg-gray-50 border-b 0 border-gray-200">
                {/* Checkbox */}
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                {/* Product Information */}
                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    {/* Product Image */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/620645"}>
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    {/* Product Name & Brand */}
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to="/product/620645">
                          Ariane Prime Flat Plate 27cm Packing 12pcs
                        </Link>
                      </h3>
                      <span className="text-[12px]">Ariane</span>
                    </div>
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-2"> Crockery </td>
                {/* Sub Category */}
                <td className="px-6 py-2">Porcelain</td>
                {/* Price */}
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500px]">
                      ₹3999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </td>
                {/* Sale */}
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span> sale
                  </p>
                  <Progress value={50} type="success" />
                </td>
                {/* Action Button */}
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    {/* Edit */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>

                    {/* View */}
                    <Tooltip title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                      </Button>
                    </Tooltip>
                    {/* Delete */}

                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
                <td className="px-6 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      {/* Recent Orders Tailwind Css Table */}
      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            {/* Table Header */}
            <thead className="text-xs text-gray-900 uppercase font-medium">
              <tr>
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>

            {/* Table Content 1*/}
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderdProduct(0)}
                  >
                    {isOpenOrderdProduct === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    675149d9914da0b78a342b261
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    pay_PTD0qEXFhrtpy8
                  </span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Niraj Procoder
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  +91 1234567890
                </td>
                <td className="px-6 py-4 font-[500] ">
                  <span className="block w-[350px]">
                    Plot No 454A, Industrial Area Phase II, Near Passport
                    Office, Chandigarh, India
                  </span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  160002
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className="text-primary font-[600]">₹ 2000</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  nirajprocoder@gmail.com
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className="text-primary font-[600]">nirajprocoder</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <Badge status="confirm" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  18-03-2025
                </td>
              </tr>
              {isOpenOrderdProduct === 0 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-900 uppercase font-medium">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap "
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* sub table content 1 */}
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675149d9914da0b78a342b261
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Ariane Prime Flat Plate 27cm Packing of 12pcs
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                                alt="Product Image"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              1 Doz
                            </td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                          </tr>

                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675149d9914da0b78a342b261
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Ariane Prime Flat Plate 27cm Packing of 12pcs
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                                alt="Product Image"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              1 Doz
                            </td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* Table Content 2 */}
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderdProduct(1)}
                  >
                    {isOpenOrderdProduct === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    675149d9914da0b78a342b261
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    pay_PTD0qEXFhrtpy8
                  </span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Niraj Procoder
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  +91 1234567890
                </td>
                <td className="px-6 py-4 font-[500] ">
                  <span className="block w-[350px]">
                    Plot No 454A, Industrial Area Phase II, Near Passport
                    Office, Chandigarh, India
                  </span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  160002
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className="text-primary font-[600]">₹ 2000</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  nirajprocoder@gmail.com
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className="text-primary font-[600]">nirajprocoder</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <Badge status="confirm" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  18-03-2025
                </td>
              </tr>
              {isOpenOrderdProduct === 1 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-900 uppercase font-medium">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap "
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* sub table content 1 */}
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675149d9914da0b78a342b261
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Ariane Prime Flat Plate 27cm Packing of 12pcs
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                                alt="Product Image"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              1 Doz
                            </td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                          </tr>

                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675149d9914da0b78a342b261
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Ariane Prime Flat Plate 27cm Packing of 12pcs
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027.jpg"
                                alt="Product Image"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              1 Doz
                            </td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                            <td className="px-6 py-4 font-[500] ">₹ 2999/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
