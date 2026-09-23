
// centralized API setup
import axios from 'axios';
import qs from 'qs';

export const axiosInstance = axios.create({
    // Local development ke liye complete Backend Server URL add karein
    baseURL: 'http://localhost:5000/api', 
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
});

