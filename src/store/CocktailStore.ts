import {defineStore} from "pinia";
import {getCocktail, getCocktailByBarmakerId} from "../services/Cocktail.ts";
import {createOrder} from "../services/Order.ts";

interface cocktailOrdered {
    cocktails_id: number,
    size: number
}

export const useCocktailStore = defineStore("CocktailStore", {
    state: () => ({
        cocktails: [],
        cart: [] as cocktailOrdered[]
    }),
    actions: {
        async getAllCocktailsByBarmaker(id: number) {
            try {
                const response = await getCocktailByBarmakerId(id);
                this.cocktails = response.data
                return response.data
            } catch (error) {
                console.error(error);
            }
        },

        addToCart(cocktail: cocktailOrdered) {
            this.cart.push(cocktail)
        },

        async getCocktailDetails(id: number) {
            try {
                const response = await getCocktail(id);
                return response.data
            } catch (error) {
                console.error(error);
            }
        },

        async createOrder() {
            try {
                const response = await createOrder(this.cart)
                this.cart = []
                return response.data
            } catch (error) {
                console.error(error);
            }
        }


    }
})