import {Reducer} from 'redux';
import {ReceiveWeatherForecastsAction, RequestWeatherForecastsAction} from '../../../actions/actionTypes';
import {WeatherForecastsState} from '../../../store/stateTypes';
type KnownAction = RequestWeatherForecastsAction | ReceiveWeatherForecastsAction;

const unloadedState: WeatherForecastsState = { startDateIndex: null, forecasts: [], isLoading: false };

const reducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState, action: KnownAction) => {
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};

export default reducer;
