import axios from "../utils/axios.ts";

const PREFIX = "category"

export const getAllCategories = () => {
    return axios.get(`${PREFIX}`)
}

export const getCategories = (id: number) => {
    return axios.get(`${PREFIX}/${id}`)
}

export const createCategory = (name: string, barmakerId: number) => {
    return axios.post(`${PREFIX}/create`, {name, barmakerId})
}

export const updateCategory = (id: number, name: string) => {
    return axios.put(`${PREFIX}/update/${id}`, {name})
}

export const deleteCategory = (id: number) => {
    return axios.delete(`${PREFIX}/delete/${id}`)
}