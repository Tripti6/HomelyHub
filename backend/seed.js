
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { Property } from "./Models/propertyModel.js";

const MONGO_URI = "mongodb+srv://tasu:tanu123@cluster0.pjg7xmm.mongodb.net/?appName=Cluster0";

// Cloudinary Image URLs
const cloudImages = [
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015683/image9_kljxwh.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015683/image10_ibsqwt.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015684/image11_a3ycgm.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015684/image12_eyiiuk.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015683/image13_qsasft.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015684/image14_x8spmg.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015691/image15_ghfsmj.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015684/image16_bnz7mu.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015686/image17_cxjbfi.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015689/image18_ep8s83.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015687/image20_p0r8zd.jpg",
  "https://res.cloudinary.com/dlv84c4ug/image/upload/v1790015688/image23_qvbfna.jpg"
];

// Local Assets Images (1 to 6)
const localImages = [
  "/assets/image1.jpeg",
  "/assets/image2.jpeg",
  "/assets/image3.jpeg",
  "/assets/image4.jpeg",
  "/assets/image5.jpeg",
  "/assets/image6.jpeg"
];

// Schema Requirement: At least 6 images array
const getPropertyImages = (idx) => [
  { public_id: `cloud_${idx}_1`, url: cloudImages[idx % cloudImages.length] },
  { public_id: `cloud_${idx}_2`, url: cloudImages[(idx + 1) % cloudImages.length] },
  { public_id: `cloud_${idx}_3`, url: cloudImages[(idx + 2) % cloudImages.length] },
  { public_id: `cloud_${idx}_4`, url: cloudImages[(idx + 3) % cloudImages.length] },
  { public_id: `local_${idx}_1`, url: localImages[idx % localImages.length] },
  { public_id: `local_${idx}_2`, url: localImages[(idx + 1) % localImages.length] }
];

// Schema Valid Amenities (Exact Allowed Enums + Material Icons)
const sampleAmenities = [
  { name: "Wifi", icon: "wifi" },
  { name: "Kitchen", icon: "soup_kitchen" },
  { name: "Ac", icon: "ac_unit" },
  { name: "Waching Machine", icon: "local_laundry_service" },
  { name: "Tv", icon: "tv" },
  { name: "Free Parking", icon: "local_parking" }
];

const sampleProperties = [
  {
    propertyName: "Sunny Beach Cottage",
    description: "A bright, airy cottage a two-minute walk from the beach. Wake up to the sound of waves, cook in a fully equipped kitchen, and watch sunsets from the private terrace.",
    price: 4500,
    maximumGuest: 4,
    address: { area: "Juhu", city: "Mumbai", state: "Maharashtra", pincode: 400049 },
    images: getPropertyImages(0),
    amenities: sampleAmenities
  },
  {
    propertyName: "Mountain View Villa",
    description: "Scenic retreat perched on alpine hills. Offers heated floors, wooden architecture, floor-to-ceiling glass windows, and breathtaking pine forest views.",
    price: 7800,
    maximumGuest: 6,
    address: { area: "Mall Road", city: "Manali", state: "Himachal Pradesh", pincode: 175131 },
    images: getPropertyImages(1),
    amenities: sampleAmenities
  },
  {
    propertyName: "Cozy City Apartment",
    description: "Sleek and modern high-rise studio located right in the heart of the tech startup capital. Walkable to premium restaurants, cafes, and nightlife.",
    price: 3200,
    maximumGuest: 3,
    address: { area: "Koramangala", city: "Bengaluru", state: "Karnataka", pincode: 560034 },
    images: getPropertyImages(2),
    amenities: sampleAmenities
  },
  {
    propertyName: "Lakeside Retreat",
    description: "Peaceful waterfront bungalow with direct lake access. Features a private deck for outdoor dining and evening campfire arrangements.",
    price: 5600,
    maximumGuest: 5,
    address: { area: "Lake Pichola", city: "Udaipur", state: "Rajasthan", pincode: 313001 },
    images: getPropertyImages(3),
    amenities: sampleAmenities
  },
  {
    propertyName: "Heritage Haveli Stay",
    description: "Experience royal Rajasthani hospitality in a restored 18th-century palace property equipped with courtyard fountains and authentic traditional decor.",
    price: 6900,
    maximumGuest: 8,
    address: { area: "Amer Road", city: "Jaipur", state: "Rajasthan", pincode: 302002 },
    images: getPropertyImages(4),
    amenities: sampleAmenities
  },
  {
    propertyName: "Backwater Houseboat",
    description: "Tranquil floating house cruising through lush palm groves. Includes onboard personal chef serving fresh local seafood delicacies.",
    price: 8200,
    maximumGuest: 4,
    address: { area: "Punnamada", city: "Alappuzha", state: "Kerala", pincode: 688006 },
    images: getPropertyImages(5),
    amenities: sampleAmenities
  },
  {
    propertyName: "Green Valley Tea Estate Villa",
    description: "Nestled inside a historic tea plantation. Enjoy fresh morning mist, organic tea tasting sessions, and serene hillside trekking paths.",
    price: 4100,
    maximumGuest: 2,
    address: { area: "Chowrasta", city: "Darjeeling", state: "West Bengal", pincode: 734101 },
    images: getPropertyImages(6),
    amenities: sampleAmenities
  },
  {
    propertyName: "Royal Desert Camp",
    description: "Luxury safari glamping tents under starry night skies. Features folk dance performances, camel safari tours, and authentic local buffet dinners.",
    price: 5500,
    maximumGuest: 3,
    address: { area: "Sam Sand Dunes", city: "Jaisalmer", state: "Rajasthan", pincode: 345001 },
    images: getPropertyImages(7),
    amenities: sampleAmenities
  },
  {
    propertyName: "Cloud Mist Coffee Plantation Stay",
    description: "Rustic homestay surrounded by aromatic coffee plants and spice gardens. Features cozy hammocks, fire-pits, and fresh local filter coffee.",
    price: 3800,
    maximumGuest: 5,
    address: { area: "Madikeri", city: "Coorg", state: "Karnataka", pincode: 571201 },
    images: getPropertyImages(8),
    amenities: sampleAmenities
  },
  {
    propertyName: "Urban Penthouse Studio",
    description: "Sophisticated luxury penthouse featuring panoramic city views, high-speed Wi-Fi, private jacuzzi, and smart home automated controls.",
    price: 6500,
    maximumGuest: 2,
    address: { area: "Cyber City", city: "Gurugram", state: "Haryana", pincode: 122002 },
    images: getPropertyImages(9),
    amenities: sampleAmenities
  },
  {
    propertyName: "Sunset Ocean Breeze Resort",
    description: "Vibrant beachside getaway just steps away from white sands, beach shacks, and water sports hubs. Perfect spot for party lovers and beachgoers.",
    price: 9200,
    maximumGuest: 6,
    address: { area: "Calangute", city: "Goa", state: "Goa", pincode: 403516 },
    images: getPropertyImages(10),
    amenities: sampleAmenities
  },
  {
    propertyName: "Pine Forest Wooden Chalet",
    description: "An authentic pine-wood log cabin set in snow-dusted valleys. Features a stone fireplace, hot tub, and board games for warm indoor family fun.",
    price: 8400,
    maximumGuest: 4,
    address: { area: "Narkanda", city: "Shimla", state: "Himachal Pradesh", pincode: 171213 },
    images: getPropertyImages(11),
    amenities: sampleAmenities
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully!");

    await Property.deleteMany({});
    console.log("Previous database properties cleared!");

    await Property.create(sampleProperties);
    console.log("Database seeded successfully!");

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed!");
  }
};

seedDatabase();


