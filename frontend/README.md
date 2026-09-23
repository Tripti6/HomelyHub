
 🏠 HomelyHub — Full-Stack Vacation & Property Rental Platform

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)](https://redux-toolkit.js.org/)

*HomelyHub* is a production-ready, full-stack real estate and property rental web application. It offers a seamless experience for travelers to discover, filter, and book rental properties while empowering hosts to manage their property listings effortlessly.

---

## 🌟 Key Highlights & Standout Features

* *🔍 Smart Search & Multi-Filter Engine:* Dynamic client-side and server-side filtering based on location, price per night, guest capacity, and amenities.
* *🔐 Secure Authentication Flow:* JWT & Session-based authentication with protected routes for user profiles, booking history, and host dashboards.
* *💳 Integrated Payment Gateway UI:* Mock payment system with transaction status tracking, invoice creation, and order confirmation modal.
* *✨ Animated & Responsive UI:* Enhanced with GSAP animations for smooth card entry, custom CSS layout, and Ant Design UI primitives.
* *📊 Host Management Dashboard:* Dedicated section for users to upload, edit, and manage their rental accommodations.

---

## 🛠️ Tech Stack & Libraries

| Domain | Technologies Used |
| :--- | :--- |
| *Frontend Framework* | React.js (Vite), JavaScript (ES6+) |
| *State Management* | Redux Toolkit (@reduxjs/toolkit), React Redux |
| *Styling & UI Kit* | CSS3, Ant Design (antd), Material Symbols |
| *Animations & Effects* | GSAP (GreenSock) |
| *Backend API* | Node.js, Express.js |
| *Database & ORM* | MongoDB Atlas, Mongoose |
| *HTTP & Async Tools* | Axios (with central interceptors) |

---

## 🔗 Main API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/v1/rent/listing | Fetch all properties with pagination & filters |
| GET | /api/v1/rent/listing/:id | Fetch detailed info for a single property |
| POST | /api/v1/rent/user/booking/verify-payment | Verify booking payment payload |
| POST | /api/v1/rent/user/signup | Register a new user |
| POST | /api/v1/rent/user/login | Authenticate user & start session |

---


 # System Architecture


HomelyHub/
│
├── backend/                      # Express API & Server Logic
│   ├── controllers/              # Route Logic & Request Handlers
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   └── propertyController.js
│   ├── database/                 # Database Configuration
│   │   └── dbConnection.js
│   ├── models/                   # Mongoose Schemas & Data Models
│   │   ├── bookingModel.js
│   │   ├── propertyModel.js
│   │   └── userModel.js
│   ├── routes/                   # Express API Endpoint Routes
│   │   ├── bookingRoute.js
│   │   ├── propertyRoute.js
│   │   └── userRoute.js
│   ├── utils/                    # Helper Functions & Secret Key Utilities
│   │   └── generateSecretKey.js
│   ├── .env                      # Environment Variables
│   ├── index.js                  # Entry Point for Express Backend
│   └── package.json
│
└── frontend/                     # React + Vite Client Application
    ├── public/                   # Static Assets & Property Images
    ├── src/
    │   ├── components/           # UI Components Categorized by Feature
    │   │   ├── home/             # Header, Footer, FilterModal, Search, Accomodation
    │   │   ├── propertyListing/  # PropertyDetails, Payment, BookingDetails
    │   │   ├── user/             # Login, Signup, Profile, EditProfile
    │   │   ├── LoadingSpinner.jsx
    │   │   └── NotFound.jsx
    │   ├── store/                # Redux Toolkit Slices & Store Configuration
    │   │   ├── bookingSlice.js
    │   │   ├── propertyDetails.js
    │   │   ├── propertySlice.js
    │   │   ├── userSlice.js
    │   │   └── store.js
    │   ├── utils/                # Central Axios Instance & API Wrappers
    │   │   └── index.js
    │   ├── App.css
    │   ├── App.jsx               # Main React Application Component
    │   └── main.jsx              # React DOM Entry Point
    ├── index.html
    ├── vite.config.js
    └── package.json


##############
src/data/staticData.js holds the sample user, properties, property details,
bookings, accomodations and payment details. Set



    # Files 


src/App.jsx                                    current user
src/components/home/Header.jsx                 auth state, logout, reset filters
src/components/home/Search.jsx                 search
src/components/home/Filter.jsx                 filters
src/components/home/PropertyList.jsx           properties + pagination
src/components/propertyListing/PropertyListing.jsx   property details
src/components/propertyListing/PaymentForm.jsx       auth state, save booking
src/components/payment/Payment.jsx             create order, verify payment
src/components/user/Login.jsx                  login
src/components/user/Signup.jsx                 signup
src/components/user/Profile.jsx                current user
src/components/user/EditProfile.jsx            current user, update profile
src/components/user/UpdatePassword.jsx         update password
src/components/user/ForgetPassword.jsx         forgot password
src/components/user/ResetPassword.jsx          reset password
src/components/accomodation/Accomodation.jsx       my accomodations
src/components/accomodation/AccomodationForm.jsx   create accomodation
src/components/myBookings/MyBookings.jsx       my bookings
src/components/myBookings/BookingDetails.jsx   booking details


===================================================================
               HOW TO RUN HOMELYHUB  PROJECT
===================================================================

                
                    +--------------------------+
                    |  2. Open VS Code Terminal|
                    |       cd HomelyHub       |
                    +--------------------------+
                                 |
         +-----------------------+-----------------------+
         |                                               |
         v                                               v
+---------------------------------+   +---------------------------------+
|      TERMINAL 1: BACKEND        |   |      TERMINAL 2: FRONTEND        |
+---------------------------------+   +---------------------------------+
| 1. cd backend                   |   | 1. cd frontend                  |
| 2. npm install                  |   | 2. npm install                  |
| 3. Set up .env file             |   | 3. npm run dev                  |
|    - PORT=5000                  |   +---------------------------------+
|    - MONGO_URI=your_db_url      |                    |
| 4. npm run dev                  |                    |
+---------------------------------+                    v
                 |                            [ React + Vite Client ]
                 v                          (http://localhost:5173)
       [ Node/Express Server ]                         |
       (http://localhost:5000)                         |
                 |                                     |
                 +-----------------+-------------------+
                                   |
                                   v
                     +---------------------------+
                     | 3. Open http://localhost:5173|
                     |     in your Browser       |
                     +---------------------------+
