<script setup>
import {useCocktailStore} from "../store/CocktailStore.ts";
import {onMounted, ref} from "vue";

const cocktailStore = useCocktailStore();
const carts = ref([]);
const total = ref(0);

const createOrder = () => {
  cocktailStore.createOrder().then(res => {
    console.log(res);
  });
};

const preloadCocktailDetails = async () => {
  for (const cartItem of carts.value) {
    console.log(carts.value, cartItem);
    try {
      await cocktailStore.getCocktailDetails(cartItem.cocktails_id).then(res => {
        if (cartItem.size === 0) total.value = total.value + res.price_s;
        if (cartItem.size === 1) total.value = total.value + res.price_m;
        if (cartItem.size === 2) total.value = total.value + res.price_l; // Correction here
        cartItem.details = res;
      });
    } catch (error) {
      console.error(`Error fetching cocktail details for ID ${cartItem.cocktails_id}:`, error);
    }
  }
};

onMounted(async () => {
  carts.value = cocktailStore.cart;
  await preloadCocktailDetails();
});
</script>

<template>
  <div style="background: #FCF2E6; height: 100vh">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h3 class="mt-5" style="color: #3F3651!important;">Panier</h3>
      </div>
      <div>
        <div v-for="(cartItem, index) in carts" :key="index" class="card" style="width: 100%; margin: 10px;">
          <div class="card-body d-flex justify-content-between align-items-end">
            <div>
              <h5 class="card-title" style="color:#3F3651!important;">{{ cartItem?.details?.name }}</h5>
              <!-- Check if details is defined -->
              <p class="card-text" style="color:#3F3651!important;">Taille:
                <span v-if="cartItem.size === 0" style="color:#3F3651!important;">S</span>
                <span v-else-if="cartItem.size === 1" style="color:#3F3651!important;">M</span>
                <span v-else-if="cartItem.size === 2" style="color:#3F3651!important;">L</span>
              </p>
            </div>
            <div>
              <span v-if="cartItem.size === 0" style="color:#3F3651!important;">{{
                  cartItem?.details?.price_s
                }} €</span>
              <!-- Check if details is defined -->
              <span v-else-if="cartItem.size === 1" style="color:#3F3651!important;">{{
                  cartItem?.details?.price_m
                }} €</span> <!-- Check if details is defined -->
              <span v-else-if="cartItem.size === 2" style="color:#3F3651!important;">{{
                  cartItem?.details?.price_l
                }} €</span> <!-- Check if details is defined -->
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div class="d-flex flex-column align-items-end">
            <p v-if="total !== 0" style="color: #3F3651!important;"> Total : {{ total }} €</p>
            <button class="btn btn-success" @click="createOrder()">Commander</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
