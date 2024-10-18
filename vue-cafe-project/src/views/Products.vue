<script setup>
import { useProductStore } from '@/stores/ProductStore';
import ProductList from '@/components/ProductList.vue';

// Access the product store
const productStore = useProductStore();
</script>

<template>
    <div class="container">
        <h1> Our Products </h1>
        <p>
            At Sunshine Café, we pride ourselves on offering a delightful selection of fresh, handcrafted treats and
            beverages that brighten your day. Here's a glimpse of what we have to offer:
        </p>
        <h2> Freshly Brewed Coffee </h2>
        <p> Sourced from the finest beans, our coffee is brewed to perfection, whether you prefer a bold espresso or a
            smooth latte. Each cup is crafted with care, delivering rich, aromatic flavors to start your day on the
            right note.
        </p>
        <h2>Signature Salads</h2>
        <p>Light and refreshing, our salads are packed with crisp vegetables and vibrant flavors. Try our seasonal
            specials or create your own, perfect for a healthy and satisfying meal.</p>
        <h2>Smoothies & Fresh Juices </h2>
        <p>Packed with vitamins and bursting with flavor, our smoothies and juices are made from the freshest fruits.
            Whether you need a morning boost or an afternoon refresher, our selection offers a sip of sunshine in every
            glass.</p>

        <h2>Vegan & Gluten-Free Options </h2>
        <p>We believe everyone deserves to enjoy delicious food, which is why we offer a variety of vegan and
            gluten-free options. These are crafted with the same love and attention, ensuring there's something for
            every taste and dietary need.</p>
        <p>Come by and treat yourself to our freshly made delights—each one designed to bring a little sunshine to your
            day! </p>

            <ProductList v-bind:items= "productStore.items"></ProductList>
    </div>

</template>

<style scoped>
.container {
    background-color: #999;
    padding: 20px;
    color: #222;
}
</style>