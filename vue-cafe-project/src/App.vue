<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import Products from './components/ProductList.vue';
import Navbar from './components/Navbar.vue';
import { useCartStore } from './stores/AddToCartStore'; // Importing cart store

const brand = "My Sunshine Cafe";
const location = "London";
const cartStore = useCartStore();
</script>

<template>
  <div class="container">
    <p>Vue Cafe</p>
    <!-- Passing the static data as props
    <Header brand="Sunshine Cafe"></Header>
    <Footer brand="Sunshine Cafe"></Footer> -->
    <!-- Passing dynamic data as props -->
     <Header v-bind:brand=brand v-bind:location =location></Header>
     <Navbar></Navbar>
     <h2 style="text-align: center;"> Cart: {{ cartStore.cart.length}} item(s)</h2>
     <RouterView></RouterView>
      <!-- Passing an array of objects as props -->
    <!--  <Products :items @add-to-cart="addToCart"></Products> -->
     <Footer :brand></Footer>
  </div>
</template>

<style scoped>
</style>
