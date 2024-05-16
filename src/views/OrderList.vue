<template>
  <div class="container">
    <h1>Liste des commandes</h1>
    <div v-for="order in orders" :key="order.order_id" class="card my-4">
      <router-link :to="`/order/${order.order_id}`">
        <div class="card-body">
          <h5 class="card-title textColor">Commande : {{ order.order_id }}</h5>
          <p class="card-text textColor">Statut : {{ order.status }}</p>
          <p class="card-text textColor">Prix total : {{ order.totalPrice }} €</p>
          <p class="card-text textColor">Cocktails :</p>
          <ul>
            <li v-for="cocktail in order.cocktails" :key="cocktail.cocktail_order_id" class="textColor">
              {{ cocktail.cocktailName }} - {{ cocktail.price }} €
            </li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {getOrders} from "../services/Order.ts";

const orders = ref([]);

const fetchOrders = async () => {
  try {
    const response = await getOrders()
    orders.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes :', error);
  }
};

onMounted(() => {
  fetchOrders();
});
</script>

<style>
/* Styles Bootstrap */
</style>
