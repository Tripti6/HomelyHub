
// get all properties
//1. start api req
//2. Tell redux loading started
//3. Get search parameters
//4. call backend api
//5. Wait for resposne
//6. Get property data
//7. Send data to Redux store
//8. If error => send error to redux

//dispatch  => SEND to Redux
// getState => GET from Redux






import { propertyAction } from "./property-slice";
import axios from "axios";

export const getAllProperties = () => async (dispatch, getState) => {
  try {
    dispatch(propertyAction.getRequest());

    // Safe searchParams extraction (Handles both store slice names)
    const stateProperties = getState().properties || getState().property || {};
    const searchParams = stateProperties.searchParams || {};

    // API request to backend
    const response = await axios.get("http://localhost:5000/api/v1/rent/listing", {
      params: { ...searchParams },
      withCredentials: true,
    });

    if (!response || !response.data) {
      throw new Error("No response received from backend server");
    }

    const responseData = response.data;

    // Dynamic payload checking for properties list
    let propertiesList = [];
    if (Array.isArray(responseData)) {
      propertiesList = responseData;
    } else if (Array.isArray(responseData.data)) {
      propertiesList = responseData.data;
    } else if (Array.isArray(responseData.properties)) {
      propertiesList = responseData.properties;
    } else if (Array.isArray(responseData.elements)) {
      propertiesList = responseData.elements;
    }

    const totalCount =
      responseData.totalProperties ||
      responseData.count ||
      responseData.all_properties ||
      propertiesList.length;

    // Dispatching extracted properties & count to Redux
    dispatch(
      propertyAction.getProperties({
        properties: propertiesList,
        totalProperties: totalCount,
      })
    );
  } catch (error) {
    console.error("Backend Connection Error:", error);

    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to connect to backend server";

    dispatch(propertyAction.getErrors(errorMessage));

    // Fallback to exit loading screen gracefully
    dispatch(
      propertyAction.getProperties({
        properties: [],
        totalProperties: 0,
      })
    );
  }
};