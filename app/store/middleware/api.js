import axios from "axios";
import { apiCallBegan } from "../api";
const api =
    ({ dispatch }) =>(next) =>async (action) => {
        if (action.type !== apiCallBegan.type) return next(action);
        const { url, method, data, onStart, onSuccess, onError,token } = action.payload;
        if (onStart) dispatch({ type: onStart });

        try{
            const response = await axios.request({
                baseURL: process.env.API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token&&token?.token}`
                },
                url,
                method,
                data,
            });
console.log(response)
            dispatch({ type: onSuccess, payload: response.data });
        }catch (error) {
            if (onError)
                dispatch({ type: onError, payload: { error: error.message } });
            dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
        }
    };

export default api;