import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox/uploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [productCat, setProductCat] = React.useState("");
  const [productSubCat, setProductSubCat] = React.useState("");
  const [productFeatured, setProductFeatured] = React.useState("");
  const [productRams, setProductRams] = React.useState("");
  const [productWeight, setProductWeight] = React.useState("");
  const [productSize, setProductSize] = React.useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      {/* Form Section */}
      <form action="" className="form py-3 p-8 ">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          {/* Product Name */}
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Name *
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Description *
              </h3>
              <textarea
                type="text"
                className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>

          {/* Dropdown Section first */}
          <div className="grid grid-cols-4 mb-3 gap-4">
            {/* Product Category */}
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

            {/* Product Sub Category */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black ">
                Product Sub Category *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productSubCat}
                label="Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Acrylic</MenuItem>
                <MenuItem value={20}> Melamine </MenuItem>
                <MenuItem value={30}>Ceramic</MenuItem>
              </Select>
            </div>

            {/* Product Price */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Price *
              </h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
              />
            </div>

            {/* Product Old Price */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Old Price *
              </h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
              />
            </div>
          </div>

          {/* Dropdown Section second */}
          <div className="grid grid-cols-4 mb-3 gap-4">
            {/* Product Featured */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Is Featured? *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productFeatured}
                label="Category"
                onChange={handleChangeProductFeatured}
              >
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>

            {/* Product Stock */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Stock *
              </h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
              />
            </div>

            {/* Product Brand */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Brand *
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
              />
            </div>

            {/* Product Discount */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Discount *
              </h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
              />
            </div>
          </div>

          {/* Dropdown Section third */}
          <div className="grid grid-cols-4 mb-3 gap-4">
            {/* Product RAMS */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product RAMS *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productRams}
                label="Category"
                onChange={handleChangeProductRams}
              >
                <MenuItem value={"4GB"}>4GB</MenuItem>
                <MenuItem value={"6GB"}> 6GB </MenuItem>
                <MenuItem value={"8GB"}>8GB</MenuItem>
              </Select>
            </div>
            {/* Product Weight */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black ">
                Product Weight *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productWeight}
                label="Category"
                onChange={handleChangeProductWeight}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>2KG</MenuItem>
                <MenuItem value={20}>4KG</MenuItem>
                <MenuItem value={10}>5KG</MenuItem>
              </Select>
            </div>
            {/* Product Size */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black ">
                Product Size *
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productSize}
                label="Category"
                onChange={handleChangeProductSize}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
              </Select>
            </div>
            {/* Product Rating */}
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Rating *
              </h3>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>

          {/* Media & Images Section */}
          <div className="col w-full p-5 px-0">
            <h3 className="font-[700] text-[18px] mb-3">Media & Images</h3>
            <div className="grid grid-cols-7 gap-4 ">
              {/* Product Image 1 */}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>
              {/* Product Image 2 */}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>
              {/* Product Image 3*/}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>
              {/* Product Image 4*/}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>
              {/* Product Image 5*/}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>
              {/* Product Image 6*/}
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px] " />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    className="w-full h-full ovject-cover"
                    effect="blur"
                    alt={"image"}
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://gargcrockerystore.com/wp-content/uploads/2024/05/Bharat-Square-1-1-150x150.jpg"
                    }
                  />
                </div>
              </div>

              <UploadBox multiple={false} />
            </div>
          </div>
        </div>
        <hr />
        <br />
        {/* Publish and View */}
        <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish and View
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;
