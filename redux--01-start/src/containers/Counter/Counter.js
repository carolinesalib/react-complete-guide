import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {add, decrement, deleteResult, increment, storeResult, subtract} from "../../store/actions/index";

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 8" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDecrementCounter: () => dispatch(decrement()),
        onIncrementCounter: () => dispatch(increment()),
        onAddCounter: () => dispatch(add()),
        onSubtractCounter: () => dispatch(subtract()),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
