import React, { useContext } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar/Progress";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  { id: "subcategory", label: "SUBCATEGORY", minWidth: 150 },
  { id: "price", label: "PRICE", minWidth: 130 },
  { id: "sales", label: "SALES", minWidth: 100 },
  { id: "action", label: "ACTION", minWidth: 120 },
];

const Products = () => {
  const [categoryFilterVal, setcategoryFilterVal] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const context = useContext(MyContext);

  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">
          Products
          <span className="font-[400] text-[14px]"> (Material UI Table)</span>
        </h2>
        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
          <Button className="btn !bg-green-600 !text-white btn-sm">
            Export
          </Button>
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            Add Product
          </Button>
        </div>
      </div>

      {/* Products Table & Material Ui Table */}
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        {/* Category Filter */}
        <div className="flex items-center w-full px-5 justify-between">
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

          <div className="col w-[20%] ml-auto">
            <SearchBox />
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
    </>
  );
};

export default Products;
