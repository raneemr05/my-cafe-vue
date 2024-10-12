<script setup>
</script>

<template>
    <li class="items-card">
        <!-- Slot for displaying the image-->
        <slot name="image"></slot>

        <div class="item-description">
            <!-- Slot for item title -->
             <slot name="title"></slot>
             <br>
             <!-- Slot for item price-->
             <slot name="price"></slot> <br>
             <!-- Slot for buttons -->
             <slot name="actions"></slot>
        </div>
    </li>
</template>

<style scoped>
.items-card{
    margin: 20px;
    list-style-type: none;
    display: flex;
    flex: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    border: 1px solid #222;
    padding: 15px;
    background-color: #666;
}
</style>