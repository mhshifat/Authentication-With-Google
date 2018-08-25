import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { STRIPE_KEY } from "../keys";
import { connect } from "react-redux";
import { stripePayment } from "../store/reducers/actions/stripePayment";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Get Credits for Emaily"
        amount={500}
        currency="USD"
        stripeKey={STRIPE_KEY}
        token={token => this.props.stripePayment(token)}
      >
        <button className="waves-effect waves-light btn-small">
          Get Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  { stripePayment }
)(Payments);
