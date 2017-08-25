import * as StateTypes from '../store/stateTypes'; 

//All action types come here
export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

export interface RequestWeatherForecastsAction {
    type: 'REQUEST_WEATHER_FORECASTS',
    startDateIndex: number;
}

export interface ReceiveWeatherForecastsAction {
    type: 'RECEIVE_WEATHER_FORECASTS',
    startDateIndex: number;
    forecasts: StateTypes.WeatherForecast[]
}