//All specific types for the store comes here

export interface WeatherForecastsState {
    isLoading: boolean;
    startDateIndex: number;
    forecasts: WeatherForecast[];
}

export interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export interface CounterState {
    count: number;
}
