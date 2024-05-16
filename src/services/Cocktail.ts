import axios from "../utils/axios.ts";

const PREFIX = "cocktail"

export const getAllCocktails = () => {
    return axios.get(`${PREFIX}`)
}

export const getCocktail = (id: number) => {
    return axios.get(`${PREFIX}/${id}`)
}

export const getCocktailByBarmakerId = (id: number) => {
    return axios.get(`${PREFIX}/barmaker/${id}`)
}

export const createCocktail = (name: string, ingredients: string, priceS: number, priceM: number, priceL: number, barmerkerId: number, category: number[]) => {
    return axios.post(`${PREFIX}/create`, {name, ingredients, priceS, priceM, priceL, barmerkerId, category})
}

export const updateCocktail = (id: number, name: string, ingredients: string, priceS: number, priceM: number, priceL: number) => {
    return axios.put(`${PREFIX}/update/${id}`, {name, ingredients, priceS, priceM, priceL})
}

export const deleteId = (id: number) => {
    return axios.delete(`${PREFIX}/delete/${id}`)
}