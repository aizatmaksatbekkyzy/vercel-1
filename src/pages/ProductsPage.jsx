import React, { useState } from "react";
import ProductSideBar from "../components/products/ProductSideBar/ProductSideBar";
import ProductsList from "../components/products/ProductsList/ProductsList";

import "../styles/productsPage.css";
const ProductsPage = () => {
  const [page] = useState(1);
  const [isSideBar, setIsSideBar] = useState(true);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div className="productsPage">
      <ProductSideBar isSideBar={isSideBar} setPage={setPage} />
      <ProductsList
        page={page}
        setPage={setPage}
        changeSideBarStatus={changeSideBarStatus}
      />
    </div>
  );
};

export default ProductsPage;
