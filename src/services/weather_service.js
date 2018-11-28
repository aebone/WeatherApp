import axios from 'axios';
import { fetchWeather } from '../actions/weather_actions';
import { handleError, cleanError } from '../actions/errors_actions';

class IndexService {

    constructor(city) {
        const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
        const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
        const url = ROOT_URL + '&q=' + city + ',us';
                
        return (dispatch) => {
            return axios.get(url).then((response) => {
                dispatch(fetchWeather(response));
                dispatch(cleanError());
            }).catch((error) => {
                console.log(error);
                dispatch(handleError());
            })
        }
    }
}

export default IndexService;