import axios from "../utils/axios.ts";

const PREFIX = "barmaker";

export const getAllBarmakers = () => {
    return axios.get(`${PREFIX}`);
}

export const getBarmaker = (barmakerId: number) => {
    return axios.get(`${PREFIX}/${barmakerId}`);
}
