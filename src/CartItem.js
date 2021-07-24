import React from "react";

const CartItem = (props) => {
  const { price, title, qty, img } = props.product;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
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
            onClick={() => props.onIncreaseQuantity(props.product)}
          />
          <img
            alt="decrease"
            style={styles.icon}
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
            onClick={() => props.onDecreaseQuantity(props.product)}
          />
          <img
            alt="delete"
            style={styles.icon}
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
            onClick={() => props.onDeleteProduct(props.product.id)}
          />
        </div>
      </div>
    </div>
  );
};

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
