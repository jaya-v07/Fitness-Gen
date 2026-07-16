import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

const getData = (request) => request.then((response) => response.data);

export const api = {
  getAuthHome: () => getData(API.get("/api/auth/home")),

  getLogin: () => getData(API.get("/api/auth/login")),

  signUp: (credentials) => getData(API.post("/api/auth/signup", credentials)),

  login: (credentials) => getData(API.post("/api/auth/login", credentials)),

  saveProfile: (profileData) =>
    getData(API.post("/api/auth/signup/profile", profileData)),
};
