export const FETCH_DETAILS = "FETCH_DETAILS";
export const ADD_DETAILS = " ADD_DETAILS";

export const fetchDetails = (name) => {
    return {
        type: FETCH_DETAILS,
        name: name
    }
}

export const addDetails = (payload) => {
    return {
        type: ADD_DETAILS,
        payload: payload
    }
}   