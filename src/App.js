import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
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
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getTotalPrice = () => {
    const { products } = this.state;
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.qty;
    });
    return totalPrice;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <h1>{this.getTotalPrice()}</h1>
      </div>
    );
  }
}

export default App;
