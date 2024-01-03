import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '@/stores/cart';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePaymentStore = defineStore('payment', () => {
    const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;
    const stripe = window.Stripe(STRIPE_KEY);
    const cart = useCartStore();

    const stripeLoaded = ref(false);
    const loading = ref(false);
    const initializeStripe = () => {
        const stripePromise = loadStripe(STRIPE_KEY);

        stripePromise.then(() => {
            stripeLoaded.value = true;
        });
    };

    const processPayment = async (elemToken, clientSecret, billingDetails) => {
        try {
            loading.value = true;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: {
                        token: elemToken.token.id
                    },
                    billing_details: billingDetails
                }
            });

            if (result.paymentIntent.status === 'succeeded') {
                cart.removeAllItemsFromCart();
            }
        } catch (err) {
            console.error(err);
        } finally {
            loading.value = false;
        }
    };

    return { initializeStripe, processPayment, stripeLoaded, loading };
});
