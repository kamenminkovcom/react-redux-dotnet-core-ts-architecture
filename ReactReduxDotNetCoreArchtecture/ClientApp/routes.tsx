import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './Features/Home/Home';
import FetchData from './Features/WeatherForecast/FetchData';
import Counter from './Features/Counter/Counter';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;
