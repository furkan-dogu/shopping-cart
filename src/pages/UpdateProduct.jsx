import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(state);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://6587fc9c90fa4d3dabf950ae.mockapi.io/products";
    await axios.put(`${url}/${state.id}`, formData);
    navigate(-1);
  };

  return (
    <div className="container">
      <ProductForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        title="Update"
      />
    </div>
  );
};

export default UpdateProduct;
