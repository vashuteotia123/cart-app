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
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     {
    //       console.log(snapshot);
    //     }
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products, loading: false });
    //   });
    this.db.collection("products").onSnapshot((snapshot) => {
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
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated Successfully", docRef);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if (products[index].qty > 0) products[index].qty -= 1;
    // this.setState({
    //   products: products,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    if (products[index].qty > 0)
      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(() => {
          console.log("Decreased Successfully");
        })
        .catch((error) => {
          console.log("Error: ", error);
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
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://images.unsplash.com/photo-1587050722854-2ab489df007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        qty: 5,
        price: 8000,
        title: "Tripod",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 25, fontSize: 20 }}>
          Add a product
        </button> */}
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
