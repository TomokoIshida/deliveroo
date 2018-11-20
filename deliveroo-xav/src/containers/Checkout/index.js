import React from "react";
import axios from "axios";
import { Elements } from "react-stripe-elements";

import Header from "../../components/Header";
import CheckoutForm from "../../components/CheckoutForm";
import Cart from "../../components/Cart";

import "./style.css";

class Checkout extends React.Component {
  render() {
    console.log(this.props.location.total);
    return (
      <div>
        <Header />
        <div className="checkout-background">
          <div className="container">
            <div className="checkout-infos">
              <h2>Adresse de livraison</h2>
              <Elements>
                <CheckoutForm
                // total={this.props.location.total}
                // cart={this.props.location.submittedCart}
                />
              </Elements>
            </div>
            <div className="checkout-cart">
              cart
              {/* <Elements>
                <Cart
                  total={this.props.total}
                  cart={this.props.submittedCart}
                />
              </Elements> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
