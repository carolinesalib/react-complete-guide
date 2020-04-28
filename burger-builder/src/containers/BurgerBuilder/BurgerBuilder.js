import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from '../../store/actions';
import {connect} from "react-redux";

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    // more modern than use the constructor (sugar syntax)
    state = {
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        // axios.get('https://react-by-burger-ab41a.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     })
        //     .catch(() => {
        //         this.setState({ error: true });
        //     });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        const queryParams = [];

        for (let i in this.props.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]))
        }

        queryParams.push('price=' + this.props.totalPrice);

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    };

    render () {
        const disabledInfo = {
            ...this.props.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName }),
        onIngredientRemoved: (ingredientName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
