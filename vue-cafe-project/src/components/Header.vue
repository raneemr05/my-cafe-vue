<script setup>
defineProps({
    brand: String,
    location: String
})
</script>

<template>
    <div class="container">
        <h1>{{ brand }}</h1>
        <h6>{{ location }}</h6>
    </div>
</template>

<style scoped>
</style>