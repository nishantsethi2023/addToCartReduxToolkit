import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
const store = configureStore({
    reducer: {
        CartSlice,
    }
})

export default store;