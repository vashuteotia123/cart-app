import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 9000,
      title: "Mobile Phone",
      qty: 10,
      img: "",
    };
  }
  render() {
    const { price, title, qty } = this.state;
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
            />
            <img
              alt="decrease"
              style={styles.icon}
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
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
