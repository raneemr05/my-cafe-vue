<script setup>
defineProps({
    items: Array
});

import ItemsLayout from './ItemsLayout.vue';
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
                    <button> Add to cart </button>
                </template>
            </ItemsLayout>
        </ul>
    </div>

</template>

<style scoped>
.container{
    background-color: #777;
    padding: 20px;
    color: black;
}

ul{
    padding: 0;
    display: flex;
    justify-content: space-evenly;
}

.menuImg{
    width:120px;
    height:120px;
    border-radius: 50%;
    border: 2px solid brown;
    margin-bottom: 10px
}

.menuImg:hover{
    border: 4px solid brown;
}
</style>