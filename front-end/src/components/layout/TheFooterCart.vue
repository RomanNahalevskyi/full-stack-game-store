<script setup>
import PaymentMethodStripe from '@/components/PaymentMethodStripe.vue';
import { NButton } from 'naive-ui';

defineEmits(['showOrderForm']);
defineProps({
    showStripeCard: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <footer
        class="footer bg-[var(--white)] flex items-center fixed bottom-0 left-0 right-0 z-10 h-20"
    >
        <div class="main-container">
            <div v-if="showStripeCard" class="flex justify-between items-center">
                <PaymentMethodStripe />
            </div>

            <div v-else class="flex justify-between">
                <p class="text-xl font-bold">Make an order</p>

                <n-button @click="$emit('showOrderForm')" class="w-full min-w-[30%]" type="success">
                    Order
                </n-button>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    box-shadow: 0 -4px 44px 0 rgba(0, 0, 0, 0.14);
}
</style>
