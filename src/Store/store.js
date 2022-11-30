import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice'
import productReducer from './productSlice'

const store = configureStore ({
    reducer : {
        cart: cartReducer,
        product: productReducer
    },
});
export default store;

// const store = configureStore ({
//       reducer : {
//         switch (key) {
//             case value:
                
//                 break;
        
//             default:
//                 break;
//         }
//       }
// })