
const error = (store) => (next) => (action) => {
    if (action.type === "SHOW_ERROR") {
      
        next(action);
    } else {
        next(action);
    }
};

export default error;