import mockInventory from '../json/inventory.json';
import {  ADD_PRODUCT_DATA,DELETE_PROD_DATA } from '../container/Homepage/actionTypes';
import {GET_PRODUCTS_DEALER} from '../container/DealerlinkPage/actionTypes';

const initialState= {
    inventoryList:mockInventory.inventory,
    dealerInventory:null
}

export default (prevState=initialState,action) =>{
switch(action.type){
    case ADD_PRODUCT_DATA:{
        prevState.inventoryList.unshift(action.payload);
        return {
            ...prevState
        }
    }
    case GET_PRODUCTS_DEALER:{
        console.log("coming here")
     let dealerListArray = groupBy(prevState.inventoryList);
     console.log("dealerListArray===>",dealerListArray);
     return {
         ...prevState,
         dealerInventory:dealerListArray
     }
    }
    case DELETE_PROD_DATA:{
        for(let i=0;i<prevState.inventoryList.length;i++){
            if(prevState.inventoryList[i].prodName === action.payload.prodName)
                prevState.inventoryList.splice(i,1)
            }
        return{
            ...prevState
        }
    }
    default:{
        return {
            ...initialState
        }
    }
}
}


const groupBy = (items, key) => items.reduce(
        (result, item) => ({
          ...result,
          [item[key]]: [
            ...(result[item[key]] || []),
            item,
          ],
        }), 
        {},
);
