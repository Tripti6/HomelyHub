


import { axiosInstance } from "../../src/utils/axios";
import { setBookingDetails, setBookings, setBookingRequest } from "./booking-slice";

// fetch booking details
export const fetchBookingDetails = (bookingId) => async (dispatch) => {
  try {
    dispatch(setBookingRequest());
    
    const response = await axiosInstance.get(`/v1/rent/user/booking/${bookingId}`, {
      withCredentials: true,
    });
    
    // Dynamic payload fallback for booking details
    const data = response?.data?.data || response?.data?.booking || response?.data;
    dispatch(setBookingDetails(data));
  } catch (error) {
    console.error("Error fetching booking details:", error);
  }
};

// fetch user bookings
export const fetchUserBookings = () => async (dispatch) => {
  try {
    dispatch(setBookingRequest());

    const response = await axiosInstance.get("/v1/rent/user/booking", {
      withCredentials: true, // Login cookies pass karne ke liye
    });
    
    console.log("Raw Backend Bookings Response:", response?.data);

    const responseData = response?.data;
    let bookingsList = [];

    // All possible MERN response formats check
    if (Array.isArray(responseData)) {
      bookingsList = responseData;
    } else if (Array.isArray(responseData?.data)) {
      bookingsList = responseData.data;
    } else if (Array.isArray(responseData?.data?.bookings)) {
      bookingsList = responseData.data.bookings;
    } else if (Array.isArray(responseData?.bookings)) {
      bookingsList = responseData.bookings;
    }

    console.log("Extracted Bookings Array:", bookingsList);
    dispatch(setBookings(bookingsList));
  } catch (error) {
    console.error("Error fetching bookings:", error.response?.data || error.message);
    // Silent fail ki jagah exact error dikhane ke baad reset karein
    dispatch(setBookings([]));
  }
};