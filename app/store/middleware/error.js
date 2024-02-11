'use client'
const error = (store) => (next) => (action) => {
    if (action.type === "SHOW_ERROR") {
        console.log(action.payload.error);
        next(action);
    } else {
        next(action);
    }
};

export default error;