<script setup>
import {useCocktailStore} from "../store/CocktailStore.ts";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const cocktailStore = useCocktailStore()
const cocktails = ref([])
const route = useRoute()
const id = route.params.barmakerId

const addToCart = (cocktailId, size) => {
  cocktailStore.addToCart({cocktails_id: cocktailId, size});
  console.log(cocktailStore.cart)
};

onMounted(() => {
  cocktailStore.getAllCocktailsByBarmaker(id).then((res) => cocktails.value = res)
})

</script>
<template>
  <div style="background: #FCF2E6">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h3 class="mt-5" style="color: #3F3651!important;">Carte des cocktail</h3>
      </div>
      <div class="d-flex flex-wrap">
        <div v-for="cocktail in cocktails" :key="cocktail.cocktail_id"
             class="col-3 d-flex align-items-center flex-column">
          <router-link :to="`/cocktails/details/${cocktail.cocktail_id}`" class="mt-4">
            <div class="card" style="height: 250px; width: 250px">
              <div class="card-body d-flex flex-column justify-content-end align-items-end"
                   style="background: url('https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?cs=srgb&dl=pexels-dima-valkov-1186343-2795026.jpg&fm=jpg'); background-size: cover">
                <h5 class="card-title" style="color: #F35843">{{ cocktail.name }}</h5>
              </div>
            </div>
          </router-link>
          <div class="d-flex justify-content-between w-75 mt-2">
            <button class="btn btn-warning"
                    @click="addToCart(cocktail.cocktail_id, 0)">
              S
            </button>
            <button class="btn btn-warning"
                    @click="addToCart(cocktail.cocktail_id, 1)">
              M
            </button>
            <button class="btn btn-warning"
                    @click="addToCart(cocktail.cocktail_id, 2)">
              L
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
