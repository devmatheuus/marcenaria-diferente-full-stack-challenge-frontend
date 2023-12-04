import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://marcenaria-diferente-full-stack.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

export default api;
