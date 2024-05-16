<template>
  <div class="container">
    <div class="d-flex justify-content-end mt-3">
      <router-link class="btn mx-2" to="/order"><img alt="cart" src="../assets/Clipboard.svg" style="width: 24px">
      </router-link>
      <router-link class="btn mx-2" to="/cart"><img alt="cart" src="../assets/Cart.svg" style="width: 24px">
      </router-link>
      <router-link class="btn mx-2" to="/login"><img alt="personFill" src="../assets/personFill.svg"
                                                     style="width: 24px">
      </router-link>
    </div>
    <div class="d-flex align-items-center" style="height: calc(100vh - (50px + 1rem))">
      <img alt="logo" class="w-25" src="../assets/Logo.jpg"/>
      <div class="ms-5">
        <div style="font-size: 96px">ar’p</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>