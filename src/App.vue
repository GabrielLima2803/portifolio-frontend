<script setup>
import { FooterComponent } from './components';
</script>

<template>
  <div class="bg">
    <v-app class="container">
        <router-view />
    </v-app>
    <FooterComponent class="z-index" />
  </div>
</template>

<style scoped>
.container {
  max-width: 968px;
  margin: 0 auto;
  background-color: #0b111e;
}
.bg{
  background-color: #0b111e;
}

.z-index{
  z-index: 3;
}
</style>
