import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import StatusCode from "../utils/StatusCode";
const initialState = {
    data: [],
    status: "idle"
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action){
    //     state.data = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = StatusCode.LOADING;
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = StatusCode.IDLE;
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusCode.ERROR;
    })
  }
});

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;


export const getProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://api.escuelajs.co/api/v1/products')
	const result = await data.json();
	return result; 
})
// export const prod = () => async (dispatch) => {
//         fetch('https://api.escuelajs.co/api/v1/products')
// 	.then(response => response.json())
// 	.then(data => {
//     dispatch({type: fetchProducts, payload: data})
//   }
//   )
// 	.catch(err => console.error(err));
// }