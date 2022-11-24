import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

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
    <>
      {product ? (
        <>
          <h2>Add Product</h2>

          <input
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleInp}
            value={product.name}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
            value={product.description}
          />
          <br />
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleInp}
            value={product.price}
          />
          <br />
          <input
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={handleInp}
            value={product.picture}
          />
          <br />
          <input
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleInp}
            value={product.type}
          />
          <br />

          <button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/products");
            }}>
            Save
          </button>
        </>
      ) : (
        <h3>LOading...</h3>
      )}
    </>
  );
};

export default EditProduct;
