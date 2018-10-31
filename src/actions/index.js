import IndexService from '../services/index_service';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const request = new IndexService(city);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}