import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/addProduct.css";
const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}>
      <div className="container-4">
        <div className="h2">
          <h2>Add Product</h2>
        </div>
        <div className="inputs">
          <input
            className="name"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleInp}
          />
          <br />
          <input
            className="desc"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
          />
          <br />
          <input
            className="price"
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleInp}
          />
          <br />
          <input
            className="picture"
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={handleInp}
          />
          <br />
          <input
            className="type"
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleInp}
          />
          <br />
        </div>

        <button
          className="btn-4"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
