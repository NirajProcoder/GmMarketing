import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent/ProductDetailsComponent";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CartPage from "./Pages/Cart/CartPage";
import Verify from "./Pages/Verify/Verify";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import toast, { Toaster } from "react-hot-toast";
import Checkout from "./Pages/Checkout/Checkout";
import MyAccount from "./Pages/MyAccount/MyAccount";

const MyContext = createContext();

function App() {
  // Product Details Modal
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = React.useState("lg");
  const [fullWidth] = React.useState(true);
  const [ isLogin, setIsLogin ] = useState(true);

  // Cart Drawer Function
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {/* Changed to directly provide values */}
          <Header />
          <Routes>
            {/* Product Listing Page */}
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            {/* Product Details Page */}
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            {/* Login Page */}
            <Route path={"/login"} exact={true} element={<Login />} />
            {/* Register Page */}
            <Route path={"/register"} exact={true} element={<Register />} />
            {/* Cart Page */}
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            {/* Verify Page */}
            <Route path={"/verify"} exact={true} element={<Verify />} />
            {/* Forgot Password */}
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />}/>
            {/* Checkout */}
            <Route path={"/checkout"} exact={true} element={<Checkout />}/>
            {/* My Account */}
            <Route path={"/my-account"} exact={true} element={<MyAccount />}/>
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative ">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-6 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };
