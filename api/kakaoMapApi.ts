import axios from "axios";

const server = axios.create({
    baseURL: "http://127.0.0.1:8080/",
})

export const kakaoMapApi = async() => {
    try {
        const response = await server.get("/api/map");
        return response.data
    }catch (error) {
        return error
    }
}