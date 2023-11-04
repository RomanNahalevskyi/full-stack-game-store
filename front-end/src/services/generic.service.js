import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const request = async ({ url, method, data = {} }) => {
    return await axios[method](`${API_URL}${url}`, data);
};
