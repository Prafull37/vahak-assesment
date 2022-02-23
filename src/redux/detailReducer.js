import {ADD_DETAILS,FETCH_DETAILS}  from './action'

const initState={
    data:{
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
        user:{
            name:"",
            mobileNo:"",
            updateonwp:"",
            remarks:""
        }

    }
}


export default function detailReducer(state=initState,action){
    switch(action.type){
        case FETCH_DETAILS:{
            return action.name ==="all" ?  state.data : state.data[action.name]
        }

        case ADD_DETAILS:{
            return {data:{...state.data,...action.payload}}
        }
        default:
            console.log(state)
            return state;
    }
}