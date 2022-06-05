import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { ProductItems } from "./Data/Data";
import Paystack from "./components/Paystack/Paystack";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  //SAVING CARTITEMS TO LOCAL STORAGE
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });

  //ADDING ITEM TO CARTITEMS AND INCREASING THE QUANTITY OF ITEM
  const addToCartHandler = (product) => {
    const existInCart = cartItems.find((item) => item.id === product.id);

    if (existInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existInCart, quantity: existInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //REDUCING ITEM QUANTITY AND DELETING ITEM FROM CARTITEMS IF QUANTITY EQUALS TO 0
  const removeFromCartHandler = (product) => {
    const existInCart = cartItems.find((item) => item.id === product.id);

    if (existInCart.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existInCart, quantity: existInCart.quantity - 1 }
            : item
        )
      );
    }
  };

  //DELETING ITEM FROM CARTITEMS REGARDLESS OF ITEM QUANTITY
  const deleteItem = (product) => {
    const existInCart = cartItems.filter((item) => item.id !== product.id);

    setCartItems(existInCart);
  };

  //CLEARING ALL THE ITEMS IN THE CART
  const clearCartItems = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              ProductItems={ProductItems}
              addToCartHandler={addToCartHandler}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCartHandler={addToCartHandler}
              removeFromCartHandler={removeFromCartHandler}
              clearCartItems={clearCartItems}
              deleteItem={deleteItem}
            />
          }
        />

        <Route path="/checkout" element={<Paystack />} />
      </Routes>
    </div>
  );
};

export default App;
