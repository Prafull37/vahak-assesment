import {ADD_DETAILS,FETCH_DETAILS}  from './action'

const initState={
        journey:{
            source:"",
            destination:"",
            cartype:"",
            noOfTravellers:0
        },
        price:{
            amount:0,
            negotiable:false
        },
        contact:{
            name:"",
            mobileNo:"",
            updateonwp:"",
            remarks:""
        }
}


export default function detailReducer(state=initState,action){
    switch(action.type){
        case FETCH_DETAILS:{
            console.log(state)
            return action.name ==="all" ?  state :{[action.name]: state[action.name]}
        }

        case ADD_DETAILS:{
            console.log("Cont",state)
            return {...state,...action.payload}
        }
        default:
            return state;
    }
}