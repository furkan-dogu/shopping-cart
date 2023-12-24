import ProductForm from "../components/ProductForm";
import axios from "axios";
import { useState } from "react";

const newData = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: "",
};

const NewProduct = () => {

  const [formData, setFormData] = useState(newData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://6587fc9c90fa4d3dabf950ae.mockapi.io/products";
    await axios.post(url, formData);
    setFormData(newData);
  };
  return (
    <div className="container">
      <ProductForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        title="New"
      />
    </div>
  );
};

export default NewProduct;
