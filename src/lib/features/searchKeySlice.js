import { createSlice } from '@reduxjs/toolkit';
const searchKeySlice = createSlice({
  name: 'search',
  initialState: {
    searchKey: "",
    // subscriptionStatus: 'inactive', // Initialize subscription status as 'inactive'
  },
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
   
    },

    setUpdatedSearchKey: (state, action) => {
      state.searchKey = action.payload;
 
    },

    // // Extend the searchKeySlice with a new action to set the subscription status
    // setSubscriptionStatus: (state, action) => {
    //   state.subscriptionStatus = action.payload;
    // },

    logOutUser: (state) => {
      state.searchKey = null;
      // state.subscriptionStatus = 'inactive'; // Reset the subscription status upon logout
    },
  },
});

export const searchKeyReducer = searchKeySlice.reducer;

export const { setSearchKey } = searchKeySlice.actions;