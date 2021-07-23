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
          id: 1,
        },
        {
          price: 90,
          title: "Laptop",
          qty: 5,
          img: "",
          id: 2,
        },
        {
          price: 18,
          title: "U know",
          qty: 15,
          img: "",
          id: 3,
        },
      ],
    };
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    // console.log("Heyy please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
