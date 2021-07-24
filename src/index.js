import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpNB_sAZXN25HEPnrBHCTlsXinRh03H2o",
  authDomain: "cart-react-5c06b.firebaseapp.com",
  projectId: "cart-react-5c06b",
  storageBucket: "cart-react-5c06b.appspot.com",
  messagingSenderId: "215608027571",
  appId: "1:215608027571:web:0b0fc86bf1cace716543c6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
