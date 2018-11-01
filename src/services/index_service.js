import axios from 'axios';
import fetchWeather from '../actions/index';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

class IndexService {

    constructor(city) {

        const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
        const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
        const url = ROOT_URL + '&q=' + city + ',us';
        
        return (dispatch) => {
            return axios.get(url).then((response) => {
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                })
            }).catch((error) => {
               dispatch({
                    type: GET_TODOS_FAILURE,
                    payload: error,
                    error: true
                })
            })
        }
    }
}

export default IndexService;