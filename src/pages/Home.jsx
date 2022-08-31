import React from "react";
import Annoucement from "../Components/annoucement/Annoucement";
import Categories from "../Components/categories/Categories";
import Navbar from "../Components/navbar/Navbar";
import Slider from "../Components/slider/Slider";
import Products from "../Components/products/Products";
import Newsletter from "../Components/newslatter/Newsletter";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Annoucement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
