import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../SideBar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvalabilityFilter, setIsOpenAvalabilityFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      {/* Shop By Category Filter  */}
      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Crockery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Melamine"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Porcelain"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Banquet Ware"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Kitchen"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bar Accessories"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bar Accessories"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bar Accessories"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* Availability Filter */}
      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenAvalabilityFilter(!isOpenAvalabilityFilter)}
          >
            {isOpenAvalabilityFilter === true ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenAvalabilityFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Out of Stock (2)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* Size Filter */}
      <div className="box mt-3">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (2)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (2)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (2)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      {/* Price Filter */}
      <div className="box mt-4">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Price
        </h3>

        <RangeSlider />
        <div className="flex pt-4 pb-2 riceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: {50}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {50000}</strong>
          </span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="box mt-4">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Rating
        </h3>
        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
