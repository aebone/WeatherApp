import axios from 'axios';

const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
    const url = ROOT_URL + '&q=' + city + ',us';
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}