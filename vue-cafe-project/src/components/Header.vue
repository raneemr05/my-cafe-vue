<script setup>
defineProps({
    brand: String,
    location: String
})
</script>

<template>
    <div class="container">
        <h1 class="title">{{ brand }}</h1>
        <h6>{{ location }}</h6>
    </div>
</template>

<style scoped>
.container{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding:20px
}

.title{
    color:white;
}
</style>