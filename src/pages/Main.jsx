import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main className="main">
      <div className="main-div">
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn px-4"
            onClick={() => navigate("/newproduct")}
          >
            New Product
          </button>
          <button
            className="btn px-4 ms-3"
            onClick={() => navigate("/productlist")}
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
