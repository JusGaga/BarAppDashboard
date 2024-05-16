<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header textColor">
            S'enregistrer
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label class="textColor" for="username">email</label>
                <input v-model="email" class="form-control" required type="text">
              </div>
              <div class="form-group">
                <label class="textColor" for="password">Mot de passe</label>
                <input v-model="password" class="form-control" required type="password">
              </div>
              <div>
                <router-link class="textColor" to="/register">Se connecter</router-link>
              </div>
              <button class="btn btn-primary" type="submit">S'enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import router from "../router/router.ts";
import {register} from "../services/Auth.ts";


const email = ref('');
const password = ref("");
const token: any = ref("");

const login = async () => {
  await register(email.value, password.value).then(res => token.value = res)

  setTimeout(() => {
    localStorage.setItem('token', token.value);
    router.push("/")
  }, 1000);
}
</script>

<style scoped>

</style>
