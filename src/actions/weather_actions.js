export const FETCH_WEATHER = 'FETCH_WEATHER';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export function fetchWeather(response) {
    return {
        type: FETCH_WEATHER,
        payload: response
    }
}