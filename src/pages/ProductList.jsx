import React, { Fragment } from "react";
import Annoucement from "../Components/annoucement/Annoucement";
import Navbar from "../Components/navbar/Navbar";
import Newsletter from "../Components/newslatter/Newsletter";
import Products from "../Components/products/Products";
import ProlistCo from "../Components/prolistco/ProlistCo";
import Footer from "../footer/Footer";

function ProductList() {
  return (
    <Fragment>
      <Navbar />
      <Annoucement />
      <ProlistCo />
      <Products />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}

export default ProductList;
