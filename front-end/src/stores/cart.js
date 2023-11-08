import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    const cartCount = computed(() => cartItems.value.length);

    const addItemToCart = async (product) => {
        cartItems.value.push(product);
    };

    return { addItemToCart, cartCount, cartItems };
});
