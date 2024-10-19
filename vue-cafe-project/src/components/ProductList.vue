<script setup>
import ItemsLayout from './ItemsLayout.vue';
import { useCartStore } from '@/stores/AddToCartStore';

defineProps({
    items: Array
});

const cartStore = useCartStore();
// Kebab-case is the recommended naming convention for emit  
// Deining the event emitter, specifying that this component can emit an 'add-to-cart' event
const emit = defineEmits(['add-to-cart']);

// Function triggered when the 'Add to Cart' button is clicked
function addToCart(item){
    // Add the item to the cart in pinia store
    cartStore.addToCart(item);
    //Emits the 'add-to-cart' event to the parent component along with the item
    emit('add-to-cart', item);
    // Log message to confirm the event was emitted to the parent
    console.log(item.name + ' event emitted from the child');
}
</script>

<template>
    <div class="container">
        <h1> Our Products </h1>
        <ul>
            <!-- Basic items list -->
            <!-- <li v-for="item in items" :key="item.id">
                {{ item.name }} - {{ item.price }} - {{ item.img }}
            </li> -->
            <!-- Items list displayed with slots layout-->
            <ItemsLayout v-for="item in items" :key="item.id">
                <!-- # is used in replacement of v-slot -->
                <template v-slot:image>
                    <img :src="item.img" :alt="item.name" class="menuImg">
                </template>
                <template #title>
                    {{ item.name }}
                </template>
                <template #price>
                    ${{ item.price }}
                </template>
                <template #actions>
                    <button @click="addToCart(item)"> Add to cart </button>
                </template>
            </ItemsLayout>
        </ul>
    </div>

</template>

<style scoped>
.container {
    background-color: #999;
    padding: 20px;
    color: black;
}

ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.menuImg {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid brown;
    margin-bottom: 10px
}

.menuImg:hover {
    border: 4px solid brown;
}
</style>