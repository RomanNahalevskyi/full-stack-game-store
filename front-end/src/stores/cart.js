import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getPaymentIntent } from '@/services/payment.service';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);
    const paymentIntentData = ref(null);
    const loading = ref(false);

    const cartCount = computed(() => cartItems.value.length);
    const totalAmount = computed(() => {
        const total = cartItems.value.reduce((acc, item) => {
            return acc + item.price;
        }, 0);

        return total.toFixed(2);
    });

    const handleBuy = async (userData) => {
        try {
            loading.value = true;

            const formData = {
                ...userData,
                amount: totalAmount.value,
                products: cartItems.value
            };

            paymentIntentData.value = await getPaymentIntent(formData);

            return paymentIntentData.value;
        } catch (err) {
            console.error(err);
            return paymentIntentData.value;
        } finally {
            loading.value = false;
        }
    };

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
        removeAllItemsFromCart,
        handleBuy,
        paymentIntentData,
        loading
    };
});
