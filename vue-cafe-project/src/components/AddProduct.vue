<script setup>
import { reactive } from 'vue';
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore();

const newProduct = reactive({
    name: '',
    price: 0,
    img: '',
});

// Add product when submit is clicked
const onSubmit = async () =>{
    try{
      const response = await fetch('/api/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct), 
       });
       const data = await response.json();

       //Add the product to the pinia store
       productStore.addProduct(data.product);
       console.log("New product added to the store");
    }
    catch(error){
      console.error("Failed to add product: ", error);
    }
}

</script>

<template>
  <div class="container">
    <h1> Add Product</h1>
    <form @submit.prevent="onSubmit">
      <label for="itemName"> Name: </label>
      <input type="text" name="itemName" v-model="newProduct.name" required>
      <label for="itemPrice"> Price: </label>
      <input type="number" name="itemPrice" v-model="newProduct.price" required>
      <label for="itemImage"> Upload Image </label>
      <input type="text" name="itemImage" v-model="newProduct.img" required>
      <button type="submit"> Add Product</button>
    </form>

  </div>

</template>

<style scoped>
.container {
  background-color: #999;
  padding: 20px;
  color: black;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

label,
p {
  margin: 10px 0 5px;
}

input,
select,
button {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  accent-color: brown;
}

button {
  background-color: #ff6347;
  color: white;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: #e5533d;
}
</style>