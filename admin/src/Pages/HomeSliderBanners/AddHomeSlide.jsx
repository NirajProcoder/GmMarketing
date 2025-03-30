import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UploadBox from "../../Components/UploadBox/uploadBox";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";

const AddHomeSlide = () => {
  return (
    <section className="p-5 bg-gray-50">
      {/* Form Section */}
      <form action="" className="form py-3 p-8 ">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
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

            <UploadBox multiple={false} />
          </div>
        </div>
        <br />
        <br />
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

export default AddHomeSlide;
