import axios from "axios";
import { BACKEND_URL } from "../config";

const api = axios.create({baseURL: BACKEND_URL});

export const getbulk = async () =>{
    const response = await api.get("/api/v1/blog/bulk");
    return response.data;
}

