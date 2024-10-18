import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Products from "@/views/Products.vue";

import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";

// Define your routes
const routes =[ 
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About},
    { path: "/products", name: "Products", component: Products},
    { path: "/contact", name: "ContactUs", component: Contact },
    { path: "/:pathMatch(.*)*", name:"NotFound", component: NotFound}
];

// Create a new router instance, createWebHistory enables navigation without reloading the entire page
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export the router instance so it can be used in your vue app
export default router;



