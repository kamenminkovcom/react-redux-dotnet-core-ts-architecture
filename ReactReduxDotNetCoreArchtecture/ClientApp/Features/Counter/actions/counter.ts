import { IncrementCountAction, DecrementCountAction} from '../../../actions/actionTypes';

export const actionCreators = {
    increment: () => <IncrementCountAction>{ type: 'INCREMENT_COUNT' },
    decrement: () => <DecrementCountAction>{ type: 'DECREMENT_COUNT' }
};

