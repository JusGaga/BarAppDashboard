<script setup>

import {onMounted, ref} from "vue";
import {useBarmakerStore} from "../store/BarmakerStore.ts";

const barmakerStore = useBarmakerStore()
const barmakers = ref([])

onMounted(() => {
  barmakerStore.getAllBarmaker().then((res) => barmakers.value = res)
})
</script>

<template>
  <div style="height:100vh; background: #FCF2E6">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h3 class="mt-5" style="color: #3F3651!important;">Liste des Barmaker</h3>
      </div>
      <div v-for="barmaker in barmakers" :key="barmaker.id" class="col-3 d-flex justify-content-center">
        <router-link :to="`/cocktails/${barmaker.barmaker_id}`" class="mt-4">
          <div class="card" style="height: 250px; width: 250px">
            <div class="card-body d-flex flex-column justify-content-end align-items-end"
                 style="background: url('https://cdn.theforkmanager.com/static/styles/blog_article_header_image/public/wp-blog/3-el-tenedor-atraer-clientes-bartender-restaurante.jpg?itok=RVUU9aiQ'); background-size: cover">
              <h5 class="card-title" style="color: #F35843">{{ barmaker.name }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>
