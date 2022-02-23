import {createStore,combineReducers} from 'redux';
import detailReducer from './detailReducer';

export default function configureStore(){
    const reducer =  combineReducers({
        vahakDetails:detailReducer
    })

    return createStore(reducer);
}