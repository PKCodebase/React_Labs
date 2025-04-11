
import { UPDATE_CNAME, UPDATE_PRICE } from "./courseTypes"
import { UPDATE_DURATION,UPDATE_TRAINER } from "./courseTypes";

export const  updateCname = (updatedCname) =>{
    return {
        type : UPDATE_CNAME,
        payload: updatedCname
    };
}


export const updatePrice = (updatedPrice)=>{
    return{
        type:UPDATE_PRICE,
        payload:updatedPrice
    }
}

export const updateDuration = (updatedDuration)=>{
    return{
        type:UPDATE_DURATION,
        payload:updatedDuration
    }
}

 export const updateTrainer = (updatedTrainer)=>{
    return{
        type:UPDATE_TRAINER,
        payload:updatedTrainer
    }
}
