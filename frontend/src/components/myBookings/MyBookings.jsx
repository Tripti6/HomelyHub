

import React, { useEffect } from "react";
import "../../css/MyBookings.css";
import ProgressSteps from "../ProgressSteps";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

import { useDispatch, useSelector } from "react-redux";
import { fetchBookingDetails, fetchUserBookings } from "../../../store/Booking/booking-action";

const MyBookings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const bookingState = useSelector((state) => state.booking) || {};
  const bookings = bookingState.bookings || [];
  const loading = bookingState.loading || false;

  useEffect(() => {
    dispatch(fetchUserBookings());
  }, [dispatch]);

  console.log("Bookings Data:", bookings);

  const handleBookingClick = (bookingId) => {
    if (bookingId) {
      dispatch(fetchBookingDetails(bookingId));
      navigate(`/user/myBookings/${bookingId}`);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <h3>Nothing booked yet</h3>
      </div>
    );
  }

  return (
    <>
      <ProgressSteps />
      <div className="wow">
        {bookings.map((booking, index) => {
          const property = booking?.property || {};
          const imageUrl = property?.images?.[0]?.url || "/assets/image1.jpeg";
          const propertyName = property?.propertyName || "Property Name Unavailable";
          // Safe key resolution to fix React unique key warning
          const bookingId = `booking?._id || booking?.id || booking-${index}`;

          return (
            <div
              className="main-container"
              onClick={() => handleBookingClick(bookingId)}
              key={bookingId}
            >
              <div className="mybookings-container row">
                <div className="image-container col-lg-3 col-md-3">
                  <img
                    className="booking-img"
                    src={imageUrl}
                    alt={propertyName}
                  />
                </div>
                <div className="booking-information col-lg-9 col-md-9">
                  <h6 className="hotel-name">{propertyName}</h6>
                  <div className="stay-information">
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        bedtime
                      </span>
                      {booking?.numberOfnights || 0} nights
                    </span>
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        calendar_month
                      </span>
                      {booking?.fromDate ? new Date(booking.fromDate).toLocaleDateString() : "N/A"}
                    </span>
                    <span className="material-symbols-outlined icon">
                      arrow_forward
                    </span>
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        calendar_month
                      </span>
                      {booking?.toDate ? new Date(booking.toDate).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                  <h5 className="booking-price">
                    <span className="material-symbols-outlined">payments</span>{" "}
                    Total Price :&#8377; {booking?.price || 0}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyBookings






/*
import React, { useEffect } from "react";
import "../../css/MyBookings.css";
import ProgressSteps from "../ProgressSteps";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

import { useDispatch, useSelector } from "react-redux";
import { fetchBookingDetails, fetchUserBookings } from "../../../store/Booking/booking-action";

const MyBookings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Safe extraction with default array fallback
  const bookingState = useSelector((state) => state.booking) || {};
  const bookings = bookingState.bookings || [];
  const loading = bookingState.loading || false;

  useEffect(() => {
    dispatch(fetchUserBookings());
  }, [dispatch]);

  console.log("Bookings Data:", bookings);

  const handleBookingClick = (bookingId) => {
    dispatch(fetchBookingDetails(bookingId));
    navigate(`/user/myBookings/${bookingId}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <h3>Nothing booked yet</h3>
      </div>
    );
  }

  return (
    <>
      <ProgressSteps />
      <div className="wow">
        {bookings.map((booking) => {
          // Optional chaining to prevent crashes if property is deleted/null
          const property = booking?.property || {};
          const imageUrl = property?.images?.[0]?.url || "/assets/image1.jpeg";
          const propertyName = property?.propertyName || "Property Name Unavailable";

          return (
            <div
              className="main-container"
              onClick={() => handleBookingClick(booking._id)}
              key={booking._id}
            >
              <div className="mybookings-container row">
                <div className="image-container col-lg-3 col-md-3">
                  <img
                    className="booking-img"
                    src={imageUrl}
                    alt={propertyName}
                  />
                </div>
                <div className="booking-information col-lg-9 col-md-9">
                  <h6 className="hotel-name">{propertyName}</h6>
                  <div className="stay-information">
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        bedtime
                      </span>
                      {booking?.numberOfnights || 0} nights
                    </span>
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        calendar_month
                      </span>
                      {booking?.fromDate ? new Date(booking.fromDate).toLocaleDateString() : "N/A"}
                    </span>
                    <span className="material-symbols-outlined icon">
                      arrow_forward
                    </span>
                    <span className="info">
                      <span className="material-symbols-outlined icon">
                        calendar_month
                      </span>
                      {booking?.toDate ? new Date(booking.toDate).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                  <h5 className="booking-price">
                    <span className="material-symbols-outlined">payments</span>{" "}
                    Total Price :&#8377; {booking?.price || 0}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// Extremely important export to fix Vite error!
export default MyBookings;
*/
;

















