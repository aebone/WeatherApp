import { GET_TODOS_FAILURE, CLEAN_ERROR } from "../actions/errors_actions";

export default function(state = {}, action) {
    switch(action.type) {
        case GET_TODOS_FAILURE:
            return { error: true };
        case CLEAN_ERROR:
            return { error: false };
        default:
            return state;
    }
}