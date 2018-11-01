import { FETCH_WEATHER, GET_TODOS_FAILURE } from "../actions/action";

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return action.payload.data;
        case GET_TODOS_FAILURE:
            return { error: true };
        default:
            return state;
    }
}