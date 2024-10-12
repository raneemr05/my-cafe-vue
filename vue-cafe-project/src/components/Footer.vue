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
        <p> {{ brand }}</p>
        <p> {{ location }} </p>

    </div>
</template>

<style scoped></style>