<script setup>
import { StripeElement, StripeElements } from 'vue-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { onBeforeMount, ref } from 'vue';

const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;

const stripeLoaded = ref(false);
const card = ref();
const elms = ref();

onBeforeMount(() => {
    const stripePromise = loadStripe(STRIPE_KEY);

    stripePromise.then(() => {
        stripeLoaded.value = true;
    });
});

const cardOptions = ref({
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
});
</script>

<template>
    <div v-show="true">
        <StripeElements
            v-if="stripeLoaded"
            v-slot="{ elements }"
            ref="elms"
            :stripe-key="STRIPE_KEY"
        >
            <div class="mx-3 p-2.5 rounded-md border-2 border-solid">
                <StripeElement ref="card" :elements="elements" :options="cardOptions" />
            </div>
        </StripeElements>
    </div>
</template>
