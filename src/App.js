import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    // this.testing();
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        {
          console.log(snapshot);
        }
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products, loading: false });
      });
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
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products..</h1>}
        <div style={styles.total_price}>Total: Rs. {this.getTotalPrice()}</div>
      </div>
    );
  }
}

const styles = {
  total_price: {
    fontSize: 20,
    marginLeft: 40,
  },
};

export default App;
