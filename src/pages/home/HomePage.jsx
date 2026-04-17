import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import axios from "axios";
import "./HomePage.css";
import { formatMoney } from "../../utils/money";

export const HomePage = ({cart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const productRes = await axios.get("/api/products");
        setProducts(productRes.data);

      } catch (error) {
        console.error(error);
      }


    };
    getData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`../../public/images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">{formatMoney(product.priceCents)}</div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="../../public/images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
