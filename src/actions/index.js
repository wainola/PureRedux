import {ADD_DATA} from '../constants/action-types';

export function addData(data){
    return{
        type:ADD_DATA,
        payload:data
    }
}