import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const responce = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error:", error);
      });
    dispatch(setProducts(responce.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
