<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import Products from './components/ProductList.vue';
import Navbar from './components/Navbar.vue';

const brand = "My Sunshine Cafe";
const location = "London";


// An array to store the cart values
const cart = ref([]);

function addToCart(product){
  // Push items in to the cart array
  cart.value.push(product);
  console.log(product.name + " for $ " + product.price + 
  " added to the cart successfully");
}
</script>

<template>
  <div class="container">
    <p>Vue Cafe</p>
    <!-- Passing the static data as props
    <Header brand="Sunshine Cafe"></Header>
    <Footer brand="Sunshine Cafe"></Footer> -->
    <!-- Passing dynamic data as props -->
     <Header :brand :location></Header>
     <Navbar></Navbar>
     <RouterView></RouterView>
     <!-- <h2 style="text-align: center;"> Cart: {{ cart.length }} item(s)</h2>
      Passing an array of objects as props -->
    <!--  <Products :items @add-to-cart="addToCart"></Products> -->
     <Footer :brand></Footer>
  </div>
</template>

<style scoped>
</style>
