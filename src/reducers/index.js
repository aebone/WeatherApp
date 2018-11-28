import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer'
import ErrorReducer from './errors_reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  error: ErrorReducer
});

export default rootReducer;
