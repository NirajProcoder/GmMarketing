import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddSubCategory = () => {
  const [productCat, setProductCat] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      {/* Form Section */}
      <form action="" className="form py-3 p-8 ">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-4 mb-3 gap-5">
            {/* Category Information */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Category *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productCat}
                label="Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Crockery</MenuItem>
                <MenuItem value={20}>Kitchen</MenuItem>
                <MenuItem value={30}>Banquet</MenuItem>
              </Select>
            </div>
            {/* Sub Category Information */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Sub Category Name *
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <br />
        </div>
        {/* Publish and View */}
        <div className="w-[250px]">
          <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddSubCategory;
