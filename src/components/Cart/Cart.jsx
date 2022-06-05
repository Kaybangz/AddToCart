import React from "react";
import "./styles.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  addToCartHandler,
  removeFromCartHandler,
  clearCartItems,
  deleteItem,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );


  return (
    <div style={{ paddingBottom: "3rem" }}>
      <Link className="goHome" to="/">
        <span>&#8592;</span> Home
      </Link>

      <main className="cart__items">
        <div className="header">
          <h2>Cart Items ({cartItems.length})</h2>
        </div>

        {cartItems.length === 0 && (
          <div className="empty__cart">
            <img
              src="https://thumbs.gfycat.com/GrizzledAncientKob-size_restricted.gif"
              alt="empty cart gif"
              style={{ borderRadius: "6px" }}
            />
            <h3>No item(s) in cart yet, but here's a gif of a cute cat...</h3>
          </div>
        )}

        <section className="cart_item_wrapper">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="cart_item_container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart_item_image"
                />

                <section className="item_details_container">
                  <div className="cart_item_name">
                    <h3>{item.name}</h3>
                    <h4>&#8358;{item.price}</h4>
                  </div>

                  <div className="increment_decrement_func">
                    <button
                      className="cart_item_remove"
                      onClick={() => removeFromCartHandler(item)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h4>Quantity: {item.quantity}</h4>
                    <button
                      className="cart_item_add"
                      onClick={() => addToCartHandler(item)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <div className="item_qty_display">
                    <h4>
                      Quantity Price: &#8358; {item.quantity * item.price}
                    </h4>
                  </div>

                  <div className="delete_item">
                    <button
                      className="delete_item_btn"
                      onClick={() => deleteItem(item)}
                    >
                      <RiDeleteBin5Line />
                      Delete Item
                    </button>
                  </div>
                </section>
              </div>
            );
          })}
        </section>

        {cartItems.length !== 0 && (
          <section className="cart_items_total">
            <div className="total__price">
              <h3>Total Price:</h3>
              <h4>&#8358; {totalPrice}</h4>
            </div>

            <button className="delete_all_items" onClick={clearCartItems}>
              <MdOutlineDeleteSweep />
              Clear cart
            </button>
          </section>
        )}

        {cartItems.length !== 0 && (
          <section className="stripe_btn_container">
            <Link to="/checkout" state={{totalAmount:  totalPrice}}>
              <button className="stripe_btn">Proceed to checkout</button>
            </Link>
          </section>
        )}
      </main>
    </div>
  );
};

export default Cart;
