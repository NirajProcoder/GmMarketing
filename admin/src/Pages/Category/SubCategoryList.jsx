import React, { useContext } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { MyContext } from "../../App";
import Chip from "@mui/material/Chip";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const columns = [
  { id: "image", label: "CATEGORY IMAGE", minWidth: 250 },
  { id: "catName", label: "CATEGORY NAME", minWidth: 250 },
  { id: "subCatName", label: "SUB CATEGORY NAME", minWidth: 400 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

const SubCategoryList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const context = useContext(MyContext);

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
          Sub Category List
          <span className="font-[400] text-[14px]"> (Material UI Table)</span>
        </h2>
        <div className="col w-[30%] ml-auto flex items-center justify-end gap-3">
          <Button className="btn !bg-green-600 !text-white btn-sm">
            Export
          </Button>
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add New Sub Category",
              })
            }
          >
            Add New Sub Category
          </Button>
        </div>
      </div>

      {/* Products Table & Material Ui Table */}
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
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
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {/* Product Name & Image */}
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full rounded-md overflow-hidden group">
                      <Link to="/product/620645">
                        <img
                          src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                          alt="Product Image"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                {/* Category Name */}
                <TableCell>
                  <span className="text-[14px] inline-block p-1 px-2 bg-gray-200 rounded-md ">
                    Crockery
                  </span>
                </TableCell>

                {/* Sub Category Name */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Chip label="Men" color="primary" />
                    <Chip label="Women" color="primary" />
                  </div>
                </TableCell>

                {/* Actions Button */}
                <TableCell width={100}>
                  <div className="flex items-center gap-1">
                    {/* Edit Button */}
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]">
                      <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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

export default SubCategoryList;
