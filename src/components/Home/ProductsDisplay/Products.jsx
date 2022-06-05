import React from "react";
import "./styles.css";
import ImageSlider from "../../ImageSlider/ImageSlider";

const Products = ({ ProductItems, addToCartHandler }) => {
  return (
    <main className="productDisplay__wrapper">
      <ImageSlider/>
      <h2 style={{color: "#6013c5", border: "1px solid #6013c5", padding: "1rem", width: "fit-content", borderRadius: "8px", marginBottom: "2rem"}}>Latest Collections</h2>
      <div className="products_card_display">
        {ProductItems.map((item) => {
          return (
            <section key={item.id} className="products__card">
              <div className="card__image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product__details">
                <h2>{item.name}</h2>
                <h3> Price: &#8358; {item.price}</h3>

                <div className="cart__btn">
                  <button
                    className="btn"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
