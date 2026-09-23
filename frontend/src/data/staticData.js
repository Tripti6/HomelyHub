/**
 STATIC PLACEHOLDER DATA
 
 Property photos are served from `public/assets` so the UI never depends on a
 third-party placeholder host being up.
 */
const PROPERTY_IMAGES = [
  "/assets/image1.jpeg",
  "/assets/image2.jpeg",
  "/assets/image3.jpeg",
  "/assets/image4.jpeg",
  "/assets/image5.jpeg",
  "/assets/image6.jpeg",
  "/assets/image7.jpeg",
  
  "/assets/imagejpeg",
  "/assets/property2.webp",
  "/assets/property3.webp",
  "/assets/property4.webp",
  "/assets/property5.webp",
  "/assets/property6.webp",
  "/assets/property7.webp",
];

// Six distinct photos per property, stable across reloads.
const propertyImages = (propertyNo) =>
  [0, 1, 2, 3, 4, 5].map((n) => ({
    url: PROPERTY_IMAGES[((propertyNo - 1) * 2 + n) % PROPERTY_IMAGES.length],
  }));

/* ------------------------------------------------------------------ */
/* USER  (was: state.user)                                             */
/* ------------------------------------------------------------------ */
export const STATIC_USER = {
  _id: "user_001",
  name: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "9876543210",
  avatar: { url: "/assets/avatar.png" },
  createdAt: "2024-01-15T10:30:00.000Z",
};

// Flip to `false` to preview the logged-out UI.
export const STATIC_IS_AUTHENTICATED = true;

/* ------------------------------------------------------------------ */
/* AMENITIES                                                           */
/* ------------------------------------------------------------------ */
export const STATIC_AMENITIES = [
  { id: "wifi", name: "Wifi", icon: "wifi" },
  { id: "kitchen", name: "Kitchen", icon: "kitchen" },
  { id: "tv", name: "TV", icon: "tv" },
  { id: "parking", name: "Free parking", icon: "local_parking" },
  { id: "ac", name: "Air conditioning", icon: "ac_unit" },
  { id: "pool", name: "Pool", icon: "pool" },
];

/* ------------------------------------------------------------------ */
/* ADDRESS                                                             */
/* ------------------------------------------------------------------ */
/*const address = (area, city, state, pincode) => ({
  area,
  city,
  state,
  pincode,
  latitude: 19.076,
  longitude: 72.8777,
});*/

/* ------------------------------------------------------------------ */
/* PROPERTIES  (was: state.properties)                                 */
/* ------------------------------------------------------------------ */
/*export const STATIC_PROPERTIES = [
  {
    _id: "prop_001",
    propertyName: "Sunny Beach Cottage",
    slug: "sunny-beach-cottage",
    price: 4500,
    maximumGuest: 4,
    address: address("Juhu", "Mumbai", "Maharashtra", "400049"),
    images: propertyImages(1),
  },
  {
    _id: "prop_002",
    propertyName: "Mountain View Villa",
    slug: "mountain-view-villa",
    price: 7800,
    maximumGuest: 6,
    address: address("Mall Road", "Manali", "Himachal Pradesh", "175131"),
    images: propertyImages(2),
  },
  {
    _id: "prop_003",
    propertyName: "Cozy City Apartment",
    slug: "cozy-city-apartment",
    price: 3200,
    maximumGuest: 3,
    address: address("Koramangala", "Bengaluru", "Karnataka", "560034"),
    images: propertyImages(7),
  },
  {
    _id: "prop_004",
    propertyName: "Lakeside Retreat",
    slug: "lakeside-retreat",
    price: 5600,
    maximumGuest: 5,
    address: address("Lake Pichola", "Udaipur", "Rajasthan", "313001"),
    images: propertyImages(4),
  },
  {
    _id: "prop_005",
    propertyName: "Heritage Haveli Stay",
    slug: "heritage-haveli-stay",
    price: 6900,
    maximumGuest: 8,
    address: address("Amer Road", "Jaipur", "Rajasthan", "302002"),
    images: propertyImages(5),
  },
  {
    _id: "prop_006",
    propertyName: "Backwater Houseboat",
    slug: "backwater-houseboat",
    price: 8200,
    maximumGuest: 4,
    address: address("Punnamada", "Alappuzha", "Kerala", "688006"),
    images: propertyImages(6),
  },
];*/

// 
const address = (area, city, state, pincode) => ({
  area,
  city,
  state,
  pincode,
});

export const STATIC_PROPERTIES = [
  // --- ---
  {
    _id: "prop_001",
    propertyName: "Sunny Beach Cottage",
    slug: "sunny-beach-cottage",
    price: 4500,
    maximumGuest: 4,
    address: address("Juhu", "Mumbai", "Maharashtra", "400049"),
    images: propertyImages(1),
  },
  {
    _id: "prop_002",
    propertyName: "Mountain View Villa",
    slug: "mountain-view-villa",
    price: 7800,
    maximumGuest: 6,
    address: address("Mall Road", "Manali", "Himachal Pradesh", "175131"),
    images: propertyImages(2),
  },
  {
    _id: "prop_003",
    propertyName: "Cozy City Apartment",
    slug: "cozy-city-apartment",
    price: 3200,
    maximumGuest: 3,
    address: address("Koramangala", "Bengaluru", "Karnataka", "560034"),
    images: propertyImages(7),
  },
  {
    _id: "prop_004",
    propertyName: "Lakeside Retreat",
    slug: "lakeside-retreat",
    price: 5600,
    maximumGuest: 5,
    address: address("Lake Pichola", "Udaipur", "Rajasthan", "313001"),
    images: propertyImages(4),
  },
  {
    _id: "prop_005",
    propertyName: "Heritage Haveli Stay",
    slug: "heritage-haveli-stay",
    price: 6900,
    maximumGuest: 8,
    address: address("Amer Road", "Jaipur", "Rajasthan", "302002"),
    images: propertyImages(5),
  },
  {
    _id: "prop_006",
    propertyName: "Backwater Houseboat",
    slug: "backwater-houseboat",
    price: 8200,
    maximumGuest: 4,
    address: address("Punnamada", "Alappuzha", "Kerala", "688006"),
    images: propertyImages(12),
  },

  // 
  {
    _id: "prop_007",
    propertyName: "Green Valley Tea Estate Villa",
    slug: "green-valley-tea-estate-villa",
    price: 4100,
    maximumGuest: 2,
    address: address("Chowrasta", "Darjeeling", "West Bengal", "734101"),
    images: propertyImages(13),
  },
  {
    _id: "prop_008",
    propertyName: "Royal Desert Camp",
    slug: "royal-desert-camp",
    price: 5500,
    maximumGuest: 3,
    address: address("Sam Sand Dunes", "Jaisalmer", "Rajasthan", "345001"),
    images: propertyImages(9),
  },
  {
    _id: "prop_009",
    propertyName: "Cloud mist Coffee Plantation Stay",
    slug: "cloud-mist-coffee-plantation-stay",
    price: 3800,
    maximumGuest: 5,
    address: address("Madikeri", "Coorg", "Karnataka", "571201"),
    images: propertyImages(10),
  },
  {
    _id: "prop_010",
    propertyName: "Urban Penthouse Studio",
    slug: "urban-penthouse-studio",
    price: 6500,
    maximumGuest: 2,
    address: address("Cyber City", "Gurugram", "Haryana", "122002"),
    images: propertyImages(11),
  },
  {
    _id: "prop_011",
    propertyName: "Sunset Ocean Breeze Resort",
    slug: "sunset-ocean-breeze-resort",
    price: 9200,
    maximumGuest: 6,
    address: address("Calangute", "Goa", "Goa", "403516"),
    images: propertyImages(8),
  },
  {
    _id: "prop_012",
    propertyName: "Pine Forest Wooden Chalet",
    slug: "pine-forest-wooden-chalet",
    price: 8400,
    maximumGuest: 4,
    address: address("Narkanda", "Shimla", "Himachal Pradesh", "171213"),
    images: propertyImages(3),
  },
  {
    _id: "prop_013",
    propertyName: "Ganga Ghat Heritage Home",
    slug: "ganga-ghat-heritage-home",
    price: 2900,
    maximumGuest: 3,
    address: address("Assi Ghat", "Varanasi", "Uttar Pradesh", "221005"),
    images: propertyImages(11),
  },
  {
    _id: "prop_014",
    propertyName: "Orchard View Homestay",
    slug: "orchard-view-homestay",
    price: 4700,
    maximumGuest: 4,
    address: address("Laxman Jhula", "Rishikesh", "Uttarakhand", "249137"),
    images: propertyImages(2),
  },
  {
    _id: "prop_015",
    propertyName: "Luxury Golf View Villa",
    slug: "luxury-golf-view-villa",
    price: 11000,
    maximumGuest: 8,
    address: address("Banjara Hills", "Hyderabad", "Telangana", "500034"),
    images: propertyImages(6),
  },
  {
    _id: "prop_016",
   propertyName: "Serene Riverside Cabin",
    slug: "serene-riverside-cabin",
    price: 3600,
    maximumGuest: 2,
   address: address("Old Manali", "Manali", "Himachal Pradesh", "175131"),
   images: propertyImages(13),
  },

 
];






export const STATIC_TOTAL_PROPERTIES = STATIC_PROPERTIES.length;

/* ------------------------------------------------------------------ */
/* PROPERTY DETAILS  (was: state.propertydetails)                      */
/* ------------------------------------------------------------------ */
export const STATIC_PROPERTY_DETAILS = {
  ...STATIC_PROPERTIES[0],
  description:
    "A bright, airy cottage a two minute walk from the beach. Wake up to the sound of the waves, cook in a fully equipped kitchen, and watch the sunset from the private terrace. Perfect for a family getaway or a quiet weekend away from the city.",
  amenities: STATIC_AMENITIES,
  currentBookings: [
    { fromDate: "2026-09-10", toDate: "2026-09-14" },
    { fromDate: "2026-10-01", toDate: "2026-10-05" },
  ],
};

/* ------------------------------------------------------------------ */
/* BOOKINGS  (was: state.booking)                                      */
/* ------------------------------------------------------------------ */
export const STATIC_BOOKINGS = [
  {
    _id: "booking_001",
    property: STATIC_PROPERTIES[0],
    numberOfnights: 3,
    fromDate: "2026-09-10",
    toDate: "2026-09-13",
    guests: 2,
    price: 13500,
  },
  {
    _id: "booking_002",
    property: STATIC_PROPERTIES[1],
    numberOfnights: 4,
    fromDate: "2026-11-02",
    toDate: "2026-11-06",
    guests: 4,
    price: 31200,
  },
];

export const STATIC_BOOKING_DETAILS = STATIC_BOOKINGS[0];

/* ------------------------------------------------------------------ */
/* ACCOMODATION  (was: state.accomodation)                             */
/* ------------------------------------------------------------------ */
export const STATIC_ACCOMODATION = [
  {
    _id: "accom_001",
    propertyName: "Sunny Beach Cottage",
    chekInTime: "13:00",
    chekOutTime: "10:00",
    maximumGuest: 4,
    price: 4500,
    address: address("Juhu", "Mumbai", "Maharashtra", "400049"),
    images: propertyImages(1),
  },
  {
    _id: "accom_002",
    propertyName: "Cozy City Apartment",
    chekInTime: "14:00",
    chekOutTime: "11:00",
    maximumGuest: 3,
    price: 3200,
    address: address("Koramangala", "Bengaluru", "Karnataka", "560034"),
    images: propertyImages(3),
  },
];

/* ------------------------------------------------------------------ */
/* PAYMENT  (was: state.payment)                                       */
/* ------------------------------------------------------------------ */
export const STATIC_PAYMENT_DETAILS = {
  checkinDate: "2026-09-10",
  checkoutDate: "2026-09-13",
  totalPrice: 13500,
  propertyName: "Sunny Beach Cottage",
  address: address("Juhu", "Mumbai", "Maharashtra", "400049"),
  guests: 2,
  nights: 3,
  name: "John Doe",
  phoneNumber: "9876543210",
};

export const STATIC_ORDER_DATA = {
  orderId: "ORDER_STATIC_0001",
  amount: STATIC_PAYMENT_DETAILS.totalPrice,
};
