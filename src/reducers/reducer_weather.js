import { FETCH_WEATHER } from "../actions/index";

// state argument is not application state, 
//it's the reducer state
// [] because we need an array of cities and its weather info as state here
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
    }
    return state; // initial reducer state? (no click)
}