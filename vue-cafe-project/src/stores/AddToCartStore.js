import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cartStore', () =>{

//state: cart data
const cart = ref([]);

// actions: Add to cart method 
function addToCart(product){
    // Push items in to the cart array
    cart.value.push(product);
    console.log(product.name + " for $ " + product.price + 
    " added to the cart successfully");
  }

  //remove from cart

  return { cart, addToCart}
})