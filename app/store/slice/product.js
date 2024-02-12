
import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from '../action_creater/api'
const initialState = {
    product: [],
    loading: false,
    error: null,
    message:null,
    messageType:null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        apiLoading: (state, action) => {
            state.loading = true;
            state.message=null
            state.messageType=null
        },
        apiLoadingField: (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.message=null
            state.messageType=null
        },
        singleProduct: (state, action) => {
            state.product = [action.payload];
            state.loading = false;
            state.message=null
            state.messageType=null
        },
        updateProduct:(state, action) => {
          
            state.product = [action.payload];
            state.loading = false;
            state.messageType="updated"
            state.message=`${action.payload.title} updated successfully`
        },
        insertProduct:(state, action) => {        
            state.product.push(action.payload)
            state.loading = false;
            state.messageType="inserted"
            state.message=`${action.payload.title} inserted successfully`
        },
        deleteProduct:(state, action) => {
         
            state.messageType="Deleted"
            state.loading = false;
            state.message=`${action.payload.title} deleted successfully`
        },
        getProduct: (state, action) => {
            state.product = action.payload
            state.loading = false;
            state.messageType=null
            state.message=null
        }
    }
})

const url = "/products"
export const getById = (userData) => apiCallBegan({
    url:`${url}/${userData}`,
    onStart: apiLoading.type,
    onSuccess: singleProduct.type,
    onError: apiLoadingField.type,
})
export const insert = (userData) => apiCallBegan({
    url,
    method: 'POST',
    onStart: apiLoading.type,
    onSuccess: insertProduct.type,
    onError: apiLoadingField.type,
    data:userData
})
export const update = (userData,id) => apiCallBegan({
    url:`${url}/${id}`,
    method: 'PATCH',
    onStart: apiLoading.type,
    onSuccess: updateProduct.type,
    onError: apiLoadingField.type,
    data: userData
})
export const remove = (id) => apiCallBegan({
    url:`${url}/${id}`,
    method: 'DELETE',
    onStart: apiLoading.type,
    onSuccess: deleteProduct.type,
    onError: apiLoadingField.type,
  
})
export const get = () => apiCallBegan({
    url: url,
    onStart: apiLoading.type,
    onSuccess: getProduct.type,
    onError: apiLoadingField.type,
})
export const { getProduct, updateProduct,insertProduct,deleteProduct,singleProduct, apiLoading, apiLoadingField } = productSlice.actions
export default productSlice.reducer