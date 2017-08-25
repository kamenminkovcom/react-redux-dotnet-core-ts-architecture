import { Reducer } from 'redux';
import {CounterState} from '../../../store/stateTypes';
import { IncrementCountAction, DecrementCountAction } from '../../../actions/actionTypes';

type KnownAction = IncrementCountAction | DecrementCountAction;

const reducer: Reducer<CounterState> = (state: CounterState, action: KnownAction) => {
    switch (action.type) {
    case 'INCREMENT_COUNT':
        return { count: state.count + 1 };
    case 'DECREMENT_COUNT':
        return { count: state.count - 1 };
    default:
        // The following line guarantees that every action in the KnownAction union has been covered by a case above
        const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    // i (or default inital state if none was supplied)
    return state || { count: 0 };
};

export default reducer;