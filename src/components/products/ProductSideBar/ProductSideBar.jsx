import React, { useEffect, useState } from "react";
import "../../../styles/productSideBar.css";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import FilterProduct from "../FilterProduct/FilterProduct";

const ProductSideBar = ({ isSideBar, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  return isSideBar ? (
    <div className="sideBar">
      <h2> ProductSideBar</h2>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;
