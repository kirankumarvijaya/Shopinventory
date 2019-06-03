import { ADD_PRODUCT_DATA,DELETE_PROD_DATA } from './actionTypes';


export function addProductData(payload){
    return {
        type:ADD_PRODUCT_DATA,
        payload
    }
}

export function deleteProdData(payload){
    return {
        type:DELETE_PROD_DATA,
        payload
    }
}
