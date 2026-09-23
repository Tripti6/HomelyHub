

// managing booking
// store all bookings
// store individual booking details
// track the API loading status
// Add new bookings when a booking is created
// updating the booking data when we recv it from the backend

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  bookingDetails: {},
  loading: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // 1. API request start hone par loading true karna
    setBookingRequest(state) {
      state.loading = true;
    },
    // 2. All bookings set karna
    setBookings(state, action) {
      state.bookings = action.payload;
      state.loading = false;
    },
    // 3. New booking add karna
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      state.loading = false;
    },
    // 4. Single booking details store karna
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
      state.loading = false;
    },
  },
});

// FIX: setBookingRequest ko bhi yahan export me add kiya
export const {
  setBookingRequest,
  setBookings,
  addBooking,
  setBookingDetails,
} = bookingSlice.actions;

export default bookingSlice;