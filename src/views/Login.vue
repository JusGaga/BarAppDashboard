<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header textColor">
            Connexion
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label class="textColor" for="username">email</label>
                <input v-model="email" class="form-control textColor" required type="text">
              </div>
              <div class="form-group">
                <label class="textColor" for="password">Mot de passe</label>
                <input v-model="password" class="form-control textColor" required type="password">
              </div>
              <div>
                <router-link class="textColor" to="/register">S'enregistrer</router-link>
              </div>
              <button class="btn btn-primary" type="submit">Se Connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {signin} from "../services/Auth.ts";
import router from "../router/router.ts";


const email = ref('');
const password = ref("");
const token: any = ref("");

const login = async () => {
  await signin(email.value, password.value).then(res => {
    token.value = res.data.token
  })

  setTimeout(() => {
    localStorage.setItem('token', token.value);
    router.push("/")
  }, 1000);
}
</script>

<style scoped>

</style>
