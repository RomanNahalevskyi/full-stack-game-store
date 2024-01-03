<script setup>
import TheFooterCart from '@/components/layout/TheFooterCart.vue';
import EmptyCartIcon from '@/components/icons/EmptyCartIcon.vue';
import CartCard from '@/components/CartCard.vue';
import { NButton, NModal, useDialog, useMessage } from 'naive-ui';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
import OrderForm from '@/components/forms/OrderForm.vue';

const cart = useCartStore();
const dialog = useDialog();
const message = useMessage();

const showModal = ref(false);
const showStripeCard = ref(false);

const confirmDeleteAllProducts = () => {
    dialog.warning({
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete all products?',
        positiveText: 'Delete all',
        negativeText: 'Cancel',
        onPositiveClick: () => {
            cart.removeAllItemsFromCart();
            message.success('Products have been removed');
        }
    });
};

const showOrderForm = () => {
    showModal.value = true;
};

const makeOrder = async (userData) => {
    const result = await cart.handleBuy(userData);

    if (result.status === 'OK') {
        showModal.value = false;
        showStripeCard.value = true;
        message.success(result.message);
    } else {
        message.error(result.message);
    }
};
</script>

<template>
    <div v-if="cart.cartItems.length" :class="{ 'mb-20': cart.cartItems.length }">
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

    <TheFooterCart
        v-if="cart.cartItems.length"
        @show-order-form="showOrderForm"
        :show-stripe-card="showStripeCard"
    />

    <div v-else class="w-full flex justify-center">
        <EmptyCartIcon />
    </div>

    <n-modal
        v-model:show="showModal"
        preset="card"
        style="width: 600px"
        title="Customer Information"
        :bordered="true"
        size="large"
    >
        <div class="w-full">
            <OrderForm @make-order="makeOrder" :loading="cart.loading" />
        </div>
    </n-modal>
</template>
