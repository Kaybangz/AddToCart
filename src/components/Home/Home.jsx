import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import Products from "./ProductsDisplay/Products";

const Home = ({ ProductItems, cartItems, addToCartHandler }) => {
  return (
    <div>
      {/* HEADER SECTION */}
      <Header cartItems={cartItems} />


      {/* PRODUCT DISPLAY SECTION */}
      <Products
        ProductItems={ProductItems}
        addToCartHandler={addToCartHandler}
      />

      {/* FOOTER SECTION */}
      <Footer/>
    </div>
  );
};

export default Home;
