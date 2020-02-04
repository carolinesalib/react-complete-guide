import React, {Component} from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredienets: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 2,
        }
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredienets} />
            </div>
        );
    }
}

export default Checkout;
