import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const baseURL = isProduction ?
    "https://Sarah.backendApp.com/api" :
    "http://localhost:5005/api";


export const api = axios.create({
    baseURL,
    withcredentials: true,
    timeout: 10000,
});