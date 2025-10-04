import { createSlice, curret } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //original state ["pizza"]
    clearCart: (state) => {
      //console.log(state)--[pizza] --local vraiable
      //console.log(curret(state));  --[pizza] --local state
      //state=[];
      //console.log(state)--[]  --but it just changing the local var not updating the original var.
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
