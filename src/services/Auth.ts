import axios from "../utils/axios.ts";
import {AxiosResponse} from "axios";

const PREFIX = "/auth"

interface ApiResponse {
    token: string;
}

export const register = (email: string, password: string): Promise<AxiosResponse<ApiResponse>> => {
    return axios.post(`${PREFIX}/register`, {
        email,
        password

    })
}

export const signin = (email: string, password: string): Promise<AxiosResponse<ApiResponse>> => {
    return axios.post(`${PREFIX}/login`, {
        email,
        password
    })
}