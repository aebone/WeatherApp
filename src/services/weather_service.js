import axios from 'axios';
import { fetchWeather } from '../actions/action';
import { handleError } from '../actions/action';

class IndexService {

    constructor(city) {
        const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
        const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
        const url = ROOT_URL + '&q=' + city + ',us';
                
        return (dispatch) => {
            return axios.get(url).then((response) => {
                dispatch(fetchWeather(response))
            }).catch((error) => {
                dispatch(handleError(error))
            })
        }
    }
}

export default IndexService;