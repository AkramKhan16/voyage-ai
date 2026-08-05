import axios from "axios";

const API = axios.create({
    baseURL: "https://voyage-ai-backend-luxk.onrender.com"
});

export const registerUser = (userData) => {
    return API.post("/register", userData);
};

export const loginUser = (userData) => {
    return API.post("/login", userData);
};