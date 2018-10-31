import axios from 'axios';
import IndexAction from '../actions/index';

const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

class IndexService {

    fetchWeather() {
        const url = ROOT_URL + '&q=' + city + ',us';
        const request = axios.get();

        return request;
    }
}

export default IndexService;