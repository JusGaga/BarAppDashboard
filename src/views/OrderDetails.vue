<template>
  <div v-if="order">
    <h1>Détails de la commande</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title textColor">Commande {{ order.order_id }}</h5>
        <p class="card-text textColor">Statut : {{ order.status }}</p>
        <p class="card-text textColor">Prix total : {{ order.totalPrice }} €</p>
        <p class="card-text textColor">Commande passée le : {{ new Date(order.orderAt).toLocaleString() }}</p>
        <p class="card-text textColor">Cocktails :</p>
        <ul>
          <li v-for="cocktail in order.cocktails" :key="cocktail.cocktail_order_id"
              class="d-flex justify-content-between my-2 textColor">
            [{{ cocktail.status }}] {{ cocktail.cocktailName }} - {{ cocktail.price }} €
            <button v-if="hasToken" class="textColor btn btn-warning" @click="updateOrder(cocktail.cocktail_id)">Passer
              au status
              suivant
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>


<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import {getOrder, updateCocktailOrderStatus} from "../services/Order.ts";

const route = useRoute();
const orderId = route.params.orderId

const order = ref(null);
const token = localStorage.getItem('token');
const hasToken = token !== null;

const fetchOrder = async () => {
  try {
    await getOrder(orderId).then(res => {
      order.value = res.data
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la commande :', error);
  }
};
//TODO: probleme de cors
const updateOrder = async (orderCocktailId: number) => {
  try {
    await updateCocktailOrderStatus(orderId, orderCocktailId)
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await fetchOrder();
});
</script>

<style>
</style>
