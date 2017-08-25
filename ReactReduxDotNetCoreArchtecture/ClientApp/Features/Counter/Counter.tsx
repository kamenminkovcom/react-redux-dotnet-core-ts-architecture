import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../../store/initialState';
import {CounterState} from '../../store/stateTypes';
import * as actions from './actions/counter';

type CounterProps =
    CounterState
    & typeof actions.actionCreators
    & RouteComponentProps<{}>;

class Counter extends React.Component<CounterProps, {}> {
    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.props.count }</strong></p>

            <button onClick={ () => { this.props.increment() } }>Increment</button>
            <button onClick={ () => { this.props.decrement() } }>Decrement</button>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    actions.actionCreators                 // Selects which action creators are merged into the component's props
)(Counter) as typeof Counter;