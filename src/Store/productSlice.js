import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const { createSlice } =require('@reduxjs/toolkit')


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
    //  extraReducers : (builder) => {
    //     builder
    //     .addCase(fetchProducts.pending, (state, action) => {
    //          state.status= STATUSES.LOADING;
    //     })
    //     .addCase(fetchProducts.fulfilled, (state, action) => {
    //         state.status= STATUSES.IDLE;
    //     })
    //     .addCase(fetchProducts.rejected, (state, action) => {
    //         state.status= STATUSES.ERROR;
    //     })
    //  }
});
export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer;

//we cannot call async api into the reducer bcoz reducer act synchronosly and reducers ia a pure function
// So point is how we will get data , for that we need to use Thunk and this is used previously currently had some changes

export function fetchProducts() {
    return async function fetchProductThunk(dispatch,getState){
          dispatch(setStatus(STATUSES.LOADING));
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json();
                 dispatch(setProducts(data));
                 dispatch(setStatus(STATUSES.IDLE));

            } catch (err) {
                console.log(err)
                dispatch(setStatus(STATUSES.ERROR));
            }
    }
}
// This is the flow of thunks
//----------------------------------------


// export const fetchProducts = createAsyncThunk('products/fetch', async () => {

//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json();
//     return data;
// })

// createAsyncThunk generates three action pending, fulfilled, rejected 