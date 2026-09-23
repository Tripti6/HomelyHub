
import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [],
    totalProperties: 0,
    searchParams: {},
    loading: false,
    error: null,
  },
  reducers: {
    getRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProperties(state, action) {
      state.loading = false;
      state.properties = action.payload.properties || [];
      state.totalProperties = action.payload.totalProperties || 0;
      state.error = null;
    },
    getErrors(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSearchParams(state, action) {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
  },
});

// Dono names export kar diye hain taaki kabhi import mismatch ka error na aaye
export const propertyAction = propertySlice.actions;
export const propertyActions = propertySlice.actions;

export default propertySlice;







