import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./styles.css";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>₹{product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days minimum</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
                 {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!product.inStock}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
