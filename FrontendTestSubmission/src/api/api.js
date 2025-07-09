import axios from "axios";

export default axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
});

console.log("URL:", import.meta.env.VITE_BACKEND_URL);
