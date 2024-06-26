import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import ProductsSlice from "./ProductsSlice";
import { thunk } from 'redux-thunk';
import logger from 'redux-logger'; // Custom middleware

const store = configureStore({
    reducer: {
        CartSlice,
        products: ProductsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;