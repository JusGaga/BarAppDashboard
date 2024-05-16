import axios from "../utils/axios.ts";

const PREFIX = "order"

export const getOrders = () => {
    return axios.get(`${PREFIX}`)
}

export const getOrder = (id: number) => {
    return axios.get(`${PREFIX}/${id}`)
}


export const createOrder = (cocktails: any[]) => {
    return axios.post(`${PREFIX}/create`, {cocktails})
}

export const updateCocktailOrderStatus = (Id: number, cocktailId: number) => {
    return axios.put(`${PREFIX}/update/${Id}/cocktail/${cocktailId}`)
}

export const deleteOrder = (id: number) => {
    return axios.delete(`${PREFIX}/delete/${id}`)
}