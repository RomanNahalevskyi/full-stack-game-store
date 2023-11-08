<script setup>
import EmptyCartIcon from '@/components/icons/EmptyCartIcon.vue';
import { useCartStore } from '@/stores/cart';
import CartCard from '@/components/CartCard.vue';
import { NButton, useDialog } from 'naive-ui';

const cart = useCartStore();
const dialog = useDialog();

const confirmDeleteAllProducts = () => {
    dialog.warning({
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete all products?',
        positiveText: 'Delete all',
        negativeText: 'Cancel',
        onPositiveClick: () => {
            cart.removeAllItemsFromCart();
        },
        onNegativeClick: () => {}
    });
};
</script>

<template>
    <div v-if="cart.cartItems.length">
        <CartCard :cart-items="cart.cartItems" />

        <div class="flex justify-between items-center px-5 py-6">
            <p class="text-xl font-bold">Total amount</p>

            <div class="flex flex-col">
                <p class="flex justify-center items-center text-xl mb-2">{{ cart.totalAmount }}$</p>
                <n-button @click="confirmDeleteAllProducts" quaternary type="error">
                    Remove all
                </n-button>
            </div>
        </div>
    </div>

    <div v-else class="w-full flex justify-center">
        <EmptyCartIcon />
    </div>
</template>
