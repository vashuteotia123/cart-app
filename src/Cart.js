import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9000,
          title: "Mobile Phone",
          qty: 10,
          img: "",
        },
        {
          price: 90,
          title: "Laptop",
          qty: 5,
          img: "",
        },
        {
          price: 18,
          title: "U know",
          qty: 15,
          img: "",
        },
      ],
    };
    // this.testing();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
