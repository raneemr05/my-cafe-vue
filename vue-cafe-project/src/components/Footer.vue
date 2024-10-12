<script setup>

defineProps({
    brand: String,
    location: {
        type: String,
        default: "Worldwide"
    }
})
</script>

<template>
    <div class="container">
        <p> &copy; 2024 {{ brand }}</p> | 
        <p> {{ location }} </p>
    </div>
</template>

<style scoped>
.container{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding:20px
}
</style>