import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsApi from "./productsApi";

const initialState = {
    books:[],
    status:"idle",
    error:null,
    categoryFilter:[],
    ratingFilter:null,
    sortBy:null,
    priceFilter:null,
    searchBook:""
}

export const fetchProductsAsync = createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        // try catch are not shown here because error will be handled with the help of redux state for this slice,
        // this is done just for learning purpose, it can also be done by try catch block but then api promise response will be fulfilled even after error
            const response = await productsApi;
            console.log("products slice async thunk resp:",response)
            return response
    }
)

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        testReducer:(state,action)=>{
            console.log(state.books)
        },
        setFilterByCategory:(state,action)=>{
            state.categoryFilter=action.payload
        },
        setSortBy:(state,action)=>{
            state.sortBy = action.payload
        },
        setRatingFilter:(state,action)=>{
            state.ratingFilter = action.payload
        },
        setPriceFilter:(state,action)=>{
            state.priceFilter = action.payload
        },
        setSearchBy:(state,action)=>{
            state.searchBook = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchProductsAsync.pending,(state,action)=>{
                state.status = "laoding"
                state.error = null
            })
            .addCase(fetchProductsAsync.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.books = action.payload                
            })
            .addCase(fetchProductsAsync.rejected,(state,action)=>{
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer
export const {setSearchBy,testReducer,setFilterByCategory,setRatingFilter,setPriceFilter,setSortBy} = productSlice.actions