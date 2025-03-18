// import React from 'react'
import { Button } from "@mui/material";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../components/Badge/Badge";
import { useState } from "react";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else setIsOpenOrderdProduct(index);
  };
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2 </span>
                Orders
              </p>
              {/* Table */}
              <div className="relative overflow-x-auto mt-5">
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
                        <span className="text-primary">
                          675149d9914da0b78a342b261
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">pay_PTD0qEXFhrtpy8</span>
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
                        <span className="text-primary">₹ 2000</span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        nirajprocoder@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        <span className="text-primary">nirajprocoder</span>
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
                                    Ariane Prime Flat Plate 27cm Packing of
                                    12pcs
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
                                  <td className="px-6 py-4 font-[500] ">
                                    ₹ 2999/-
                                  </td>
                                  <td className="px-6 py-4 font-[500] ">
                                    ₹ 2999/-
                                  </td>
                                </tr>

                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      675149d9914da0b78a342b261
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    Ariane Prime Flat Plate 27cm Packing of
                                    12pcs
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
                                  <td className="px-6 py-4 font-[500] ">
                                    ₹ 2999/-
                                  </td>
                                  <td className="px-6 py-4 font-[500] ">
                                    ₹ 2999/-
                                  </td>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
