<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import Products from './components/Products.vue';

const brand = "My Sunshine Cafe";
const location = "London";

const items =  ref([
  { id: 1, name: 'Cappuccino', price: 4.5, img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cappucino-32dbfba.jpg' },
  { id: 2, name: 'Espresso', price: 3.0, img: 'https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg' },
  { id: 3, name: 'Latte', price: 4.0, img: 'https://www.allrecipes.com/thmb/Wh0Qnynwdxok4oN0NZ1Lz-wl0A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9428203-9d140a4ed1424824a7ddd358e6161473.jpg' },
  { id: 4, name: 'Mocha', price: 4.5, img: 'https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg' },
  { id: 5, name: 'Hot Chocolate', price: 3.5, img: 'https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-3.jpg' },
  { id: 6, name: 'Special TDG ', price: 5, img: 'https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-3.jpg' }
]);

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
     <h2 style="text-align: center;"> Cart: {{ cart.length }} item(s)</h2>
     <!-- Passing an array of objects as props -->
     <Products :items @add-to-cart="addToCart"></Products>
     <Footer :brand></Footer>

  </div>
</template>

<style scoped>
</style>
