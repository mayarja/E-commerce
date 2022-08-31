import React, { Fragment } from "react";
import Annoucement from "../Components/annoucement/Annoucement";
import Navbar from "../Components/navbar/Navbar";
import Newsletter from "../Components/newslatter/Newsletter";
import PageSingleco from "../Components/pagesigleco/PageSingleco";
import Footer from "../footer/Footer";

function PageSingleProduct() {
  return (
    <Fragment>
      <Navbar />
      <Annoucement />
      <PageSingleco />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}

export default PageSingleProduct;
