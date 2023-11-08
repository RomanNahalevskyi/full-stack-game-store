import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    let cartItems = ref([]);

    const cartCount = computed(() => cartItems.value.length);
    const totalAmount = computed(() => {
        const total = cartItems.value.reduce((acc, item) => {
            return acc + item.price;
        }, 0);

        return total.toFixed(2);
    });

    const addItemToCart = (product) => {
        cartItems.value.push(product);
    };

    const removeItemFromCart = (id) => {
        cartItems.value = cartItems.value.filter((item) => item._id !== id);
    };

    const removeAllItemsFromCart = () => {
        cartItems.value = [];
    };

    return {
        addItemToCart,
        cartCount,
        cartItems,
        totalAmount,
        removeItemFromCart,
        removeAllItemsFromCart
    };
});
