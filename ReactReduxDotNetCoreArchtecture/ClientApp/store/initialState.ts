import * as StateTypes from './stateTypes';

export interface ApplicationState {
    counter: StateTypes.CounterState,
    weatherForecasts: StateTypes.WeatherForecastsState
}

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}