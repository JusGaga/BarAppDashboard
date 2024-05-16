import {defineStore} from "pinia";
import {getAllBarmakers} from "../services/Barmaker";

interface Barmaker {
    barmakerId: number;
    name: string;
    email: string;
}

interface BarmakerStoreState {
    barmakers: Barmaker[]
}

export const useBarmakerStore = defineStore("BarmakerStore", {
    state: (): BarmakerStoreState => ({
        barmakers: []
    }),
    actions: {
        async getAllBarmaker() {
            try {
                const response = await getAllBarmakers();
                this.barmakers = response.data
                return response.data
            } catch (error) {
                console.error(error);
            }
        }
    }
})