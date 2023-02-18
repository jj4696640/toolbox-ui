import axios from "axios";

const instance = axios.create({
    baseURL: "http://qa-api.toolbox.co.ug/api",
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        return config;
    }
)

export default instance;