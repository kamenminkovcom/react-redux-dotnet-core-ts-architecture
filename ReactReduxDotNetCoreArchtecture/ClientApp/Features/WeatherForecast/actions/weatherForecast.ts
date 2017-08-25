import { fetch, addTask } from 'domain-task';
import {ReceiveWeatherForecastsAction, RequestWeatherForecastsAction} from '../../../actions/actionTypes';
import {ApplicationState, AppThunkAction} from '../../../store/initialState';
import {WeatherForecast} from '../../../store/stateTypes';

type KnownAction = ReceiveWeatherForecastsAction | RequestWeatherForecastsAction;

export const actionCreators = {
    requestWeatherForecasts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
            let fetchTask = fetch(`/api/SampleData/WeatherForecasts?startDateIndex=${ startDateIndex }`)
                .then(response => response.json() as Promise<WeatherForecast[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
                });

            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
        }
    }
};
