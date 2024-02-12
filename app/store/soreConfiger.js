

import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./slice/product"
import api from './middleware/api'
import error from './middleware/error'
const store = configureStore({
    reducer: {
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        api,
        error,
    ],
});

export default store;