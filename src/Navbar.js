import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://img-premium.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1627070688~hmac=03eac2988dbf5743a05de6752fdd29ff"
          alt="cart image"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    postion: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    postion: "absolute",
    marginRight: -9,
    top: -9,
    zIndex: 2,
  },
};

export default Navbar;
