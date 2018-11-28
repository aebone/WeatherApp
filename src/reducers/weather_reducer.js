import { FETCH_WEATHER } from "../actions/weather_actions";

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return action.payload.data;
        default:
            return state;
    }
}