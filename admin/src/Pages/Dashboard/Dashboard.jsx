import React, { useState, PureComponent } from "react";
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
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  { id: "subcategory", label: "SUBCATEGORY", minWidth: 150 },
  { id: "price", label: "PRICE", minWidth: 130 },
  { id: "sales", label: "SALES", minWidth: 100 },
  { id: "action", label: "ACTION", minWidth: 120 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const Dashboard = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else setIsOpenOrderdProduct(index);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [categoryFilterVal, setcategoryFilterVal] = React.useState("");
  const [chart1Data, setChart1Data] = useState([
    {
      name: "JAN",
      TotalSales: 4000,
      TotalUsers: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      TotalSales: 3000,
      TotalUsers: 1398,
      amt: 2210,
    },
    {
      name: "MARCH",
      TotalSales: 2000,
      TotalUsers: 9800,
      amt: 2290,
    },
    {
      name: "APRIL",
      TotalSales: 2780,
      TotalUsers: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      TotalSales: 1890,
      TotalUsers: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      TotalSales: 2390,
      TotalUsers: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "SEPT",
      TotalSales: 3490,
      TotalUsers: 2400,
      amt: 2100,
    },
    {
      name: "OCT",
      TotalSales: 3490,
      TotalUsers: 4900,
      amt: 2100,
    },
    {
      name: "NOV",
      TotalSales: 3490,
      TotalUsers: 2300,
      amt: 2100,
    },
    {
      name: "DEC",
      TotalSales: 3490,
      TotalUsers: 1300,
      amt: 2100,
    },
  ]);

  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
            <span className="font-[400] text-[14px]">(Tailwind Css Table)</span>
          </h2>
        </div>
        {/* Category Filter */}
        <div className="flex items-center w-full pl-5 justify-between pr-5">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Crockery</MenuItem>
              <MenuItem value={20}>Bakery</MenuItem>
              <MenuItem value={30}>Kitchen</MenuItem>
            </Select>
          </div>
          <div className="col w-[25%] ml-auto flex items-center gap-3">
            <Button className="btn !bg-green-600 !text-white">Export</Button>
            <Button className="btn-blue !text-white b">Add Product</Button>
          </div>
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
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>

                    {/* View */}
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                    </Button>
                    {/* Delete */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>
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

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>

                    {/* View */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                    </Button>

                    {/* Delete */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>
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

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>

                    {/* View */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                    </Button>

                    {/* Delete */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>
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

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>

                    {/* View */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px] " />
                    </Button>

                    {/* Delete */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px] " />
                    </Button>
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

      {/* Products Table & Material Ui Table */}
      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Products
            <span className="font-[400] text-[14px]"> (Material UI Table)</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex items-center w-full pl-5 justify-between pr-5">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Crockery</MenuItem>
              <MenuItem value={20}>Bakery</MenuItem>
              <MenuItem value={30}>Kitchen</MenuItem>
            </Select>
          </div>
          <div className="col w-[25%] ml-auto flex items-center gap-3">
            <Button className="btn !bg-green-600 !text-white">Export</Button>
            <Button className="btn-blue !text-white b">Add Product</Button>
          </div>
        </div>

        <br />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Product Details 1 */}
              <TableRow>
                {/* Checkbox */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027-600x600.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <Link to="/product/620645">
                        <h3 className="font-[600] text-[15px] leading-4 hover:text-primary">
                          Ariane Prime Flat Plate 27cm
                        </h3>
                      </Link>
                      <span className="text-[13px]">Ariane </span>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Crockery
                </TableCell>

                {/* SubCategory */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Porcelain
                </TableCell>

                {/* Price */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹ 5999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </TableCell>

                {/* Sales */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span>
                  </p>
                  <Progress value={55} type="success" />
                </TableCell>

                {/* Actions Button */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>

                    {/* View Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>

                    {/* Delete Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Product Details 2 */}
              <TableRow>
                {/* Checkbox */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027-600x600.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <Link to="/product/620645">
                        <h3 className="font-[600] text-[15px] leading-4 hover:text-primary">
                          Ariane Prime Flat Plate 27cm
                        </h3>
                      </Link>
                      <span className="text-[13px]">Ariane </span>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Crockery
                </TableCell>

                {/* SubCategory */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Porcelain
                </TableCell>

                {/* Price */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹ 5999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </TableCell>

                {/* Sales */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span>
                  </p>
                  <Progress value={55} type="success" />
                </TableCell>

                {/* Actions Button */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>

                    {/* View Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>

                    {/* Delete Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Product Details 3 */}
              <TableRow>
                {/* Checkbox */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027-600x600.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <Link to="/product/620645">
                        <h3 className="font-[600] text-[15px] leading-4 hover:text-primary">
                          Ariane Prime Flat Plate 27cm
                        </h3>
                      </Link>
                      <span className="text-[13px]">Ariane </span>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Crockery
                </TableCell>

                {/* SubCategory */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Porcelain
                </TableCell>

                {/* Price */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹ 5999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </TableCell>

                {/* Sales */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span>
                  </p>
                  <Progress value={55} type="success" />
                </TableCell>

                {/* Actions Button */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>

                    {/* View Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>

                    {/* Delete Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Product Details 4 */}
              <TableRow>
                {/* Checkbox */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027-600x600.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <Link to="/product/620645">
                        <h3 className="font-[600] text-[15px] leading-4 hover:text-primary">
                          Ariane Prime Flat Plate 27cm
                        </h3>
                      </Link>
                      <span className="text-[13px]">Ariane </span>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Crockery
                </TableCell>

                {/* SubCategory */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Porcelain
                </TableCell>

                {/* Price */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹ 5999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </TableCell>

                {/* Sales */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span>
                  </p>
                  <Progress value={55} type="success" />
                </TableCell>

                {/* Actions Button */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>

                    {/* View Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>

                    {/* Delete Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Product Details 5 */}
              <TableRow>
                {/* Checkbox */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://gargcrockerystore.com/wp-content/uploads/2024/06/APRARN000018027-600x600.jpg"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <Link to="/product/620645">
                        <h3 className="font-[600] text-[15px] leading-4 hover:text-primary">
                          Ariane Prime Flat Plate 27cm
                        </h3>
                      </Link>
                      <span className="text-[13px]">Ariane </span>
                    </div>
                  </div>
                </TableCell>

                {/* Category */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Crockery
                </TableCell>

                {/* SubCategory */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Porcelain
                </TableCell>

                {/* Price */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹ 5999/-
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      ₹2999/-
                    </span>
                  </div>
                </TableCell>

                {/* Sales */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234</span>
                  </p>
                  <Progress value={55} type="success" />
                </TableCell>

                {/* Actions Button */}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                    </Button>

                    {/* View Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>

                    {/* Delete Button */}

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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

      {/* Chart */}
      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[18px] font-[600]">Total Users & Sales</h2>
          div
        </div>
        {/* Total Users */}
        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-green-600"></span>
            Total Users
          </span>
          {/* Total Sales */}
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-primary"></span>
            Total Sales
          </span>
        </div>
        <LineChart
          width={1000}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="non" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalSales"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </div>
    </>
  );
};

export default Dashboard;
