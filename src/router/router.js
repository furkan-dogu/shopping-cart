import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "../components/Navs";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import UpdateProduct from "../pages/UpdateProduct";

const router = () => {
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/updateproduct/:name" element={<UpdateProduct />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
