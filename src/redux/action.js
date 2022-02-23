export const FETCH_DETAILS = "FETCH_DETAILS";
export const ADD_DETAILS =" ADD_DETAILS";

export const fetchDetails=(action)=>{
    return {
        type:FETCH_DETAILS,
        name:action.name
    }
}

export const addDetails=(action)=>{
    return {
        type:FETCH_DETAILS,
        payload:action.payload
    }
}   