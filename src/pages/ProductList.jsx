import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const getProduct = async () => {
    try {
      const url = "https://6587fc9c90fa4d3dabf950ae.mockapi.io/products";
      const res = await axios.get(url);
      setData(res.data);
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (err) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : data.length ? (
          <>
            <article id="product-panel" className="col-md-5">
              {data.map((item) => (
                <ProductCard item={item} getProduct={getProduct} />
              ))}
            </article>

            <article className="col-md-5 m-3">
              <CardTotal data={data} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
