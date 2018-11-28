export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export const CLEAN_ERROR = 'CLEAN_ERROR';

export function handleError() {
    return {
        type: GET_TODOS_FAILURE
    }
}

export function cleanError() {

    return {
        type: CLEAN_ERROR
    }
}
