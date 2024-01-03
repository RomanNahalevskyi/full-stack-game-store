<script setup>
import { StripeElement, StripeElements } from 'vue-stripe-js';
import StripeIcon from '@/components/icons/StripeIcon.vue';
import { usePaymentStore } from '@/stores/payment';
import { useCartStore } from '@/stores/cart';
import { NButton, NIcon } from 'naive-ui';
import { onBeforeMount, ref } from 'vue';

const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;

const payment = usePaymentStore();
const cart = useCartStore();
const complete = ref(false);
const card = ref();
const elms = ref();

onBeforeMount(() => {
    payment.initializeStripe();
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

const handleCardChange = (event) => {
    complete.value = event.complete;
};

const payWithStripe = async () => {
    const cardElement = card.value.stripeElement;
    const elemToken = await elms.value.instance.createToken(cardElement);
    const clientSecret = cart.paymentIntentData.data.paymentIntent.client_secret;
    const billingDetails = {
        name: 'Test Roman'
    };

    await payment.processPayment(elemToken, clientSecret, billingDetails);
};
</script>

<template>
    <div class="w-full flex justify-between items-center">
        <div class="w-full">
            <StripeElements
                v-if="payment.stripeLoaded"
                v-slot="{ elements }"
                ref="elms"
                :stripe-key="STRIPE_KEY"
            >
                <div class="mx-3 p-2.5 rounded-md border-2 border-solid">
                    <StripeElement
                        ref="card"
                        :elements="elements"
                        :options="cardOptions"
                        @change="handleCardChange"
                    />
                </div>
            </StripeElements>
        </div>

        <n-button
            @click="payWithStripe"
            :disabled="!complete"
            class="w-full min-w-[30%]"
            color="#5469d4"
            :loading="payment.loading"
        >
            <template #icon>
                <n-icon>
                    <StripeIcon />
                </n-icon>
            </template>
            Pay with Stripe
        </n-button>
    </div>
</template>
