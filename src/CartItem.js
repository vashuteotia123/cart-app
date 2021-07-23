import React from "react";

class CartItem extends React.Component {
  increaseQty = () => {
    // console.log("this", this.state);
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  //   testing() {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("done");
  //       }, 5000);
  //     });

  //     promise.then(() => {
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });

  //       console.log("state", this.state);
  //     });
  //   }
  decreaseQty = () => {
    this.setState((prevState) => {
      if (this.state.qty > 0)
        return {
          qty: prevState.qty - 1,
        };
    });
  };
  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              style={styles.icon}
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992651.png"
              onClick={this.increaseQty}
            />
            <img
              alt="decrease"
              style={styles.icon}
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
              onClick={this.decreaseQty}
            />
            <img
              alt="delete"
              style={styles.icon}
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
};

export default CartItem;
