import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist"))?.items || [],
};

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addToWishlist:(state,action)=>{
            const itemExits= state.items.find((item)=>
                item.id === action.payload.id
            );
            if(!itemExits){
                state.items.push((action.payload))
            }
        },
        removeFromWishlist:(state,action)=>{
            state.items=state.items.filter((item)=>
            item.id !== action.payload
        );
        },
        clearWishlist:(state)=>{
            state.items=[]
        },

    },
});
export const {addToWishlist,removeFromWishlist,clearWishlist}=wishlistSlice.actions;

export default wishlistSlice.reducer;