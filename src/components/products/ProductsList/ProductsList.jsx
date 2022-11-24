import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";

const ProductsList = ({ page, setPage, changeSideBarStatus }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 6;
  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(51, 52, 51)",
      }}>
      <h2
        style={{
          backgroundColor: "rgb(51, 52, 51)",
          color: "rgb(8, 209, 149)",
          marginTop: "10px",
          marginLeft: "10px",
        }}>
        Products List<></>
      </h2>

      <button
        style={{
          borderRadius: "55px",
          height: "35px",
          width: " 150px",
          backgroundColor: "rgb(8, 209, 149)",
          marginTop: "-10px",
          marginLeft: "10px",
          fontSize: " 15px",
        }}
        onClick={changeSideBarStatus}>
        Filter & Side Bar
      </button>

      {products ? (
        currentData().map(item => <ProductCard key={item.id} item={item} />)
      ) : (
        <h3>Loading...</h3>
      )}
      <Pagination
        style={{
          marginLeft: "480px",
        }}
        color="success"
        count={count}
        page={page}
        onChange={handlePage}
      />
    </div>
  );
};

export default ProductsList;
