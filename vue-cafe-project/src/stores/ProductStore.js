import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

// Defin the product store
export const useProductStore = defineStore('productStore', ()=>{

// State: Product Array where the items will be stored globally    
const items =  ref([]);

  onMounted(async () => {
    const response = await fetch("/api/products");
    console.log("Fetching products on mounted stage");
    const data = await response.json();
    items.value = data.products;
  })

  const addProduct = (product) =>{
    items.value.push({ ...product, id: items.value.length + 1});
    console.log(items);
  }

  return { items, addProduct};


});