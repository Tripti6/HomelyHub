

import { propertDetailsAction } from "./propertyDetails-slice";
import { axiosInstance } from "../../src/utils/axios";

// fetch details of one specific property using its id
export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch(propertDetailsAction.getListRequest());
    const response = await axiosInstance(`/v1/rent/listing/${id}`);
    console.log(response);

    if (!response) {
      throw new Error("Could not fetch any propertyDetails");
    }

    const { data } = response.data;
    dispatch(propertDetailsAction.getPropertyDetails(data));
  } catch (error) {
    console.log("API Error:", error);
    
    // Safety check ke sath error message extraction
    const errorMessage =
      error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : error.message;

    dispatch(propertDetailsAction.getErrors(errorMessage));
  }
};