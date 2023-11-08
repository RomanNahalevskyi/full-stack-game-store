<script setup>
import GamePlatformIcon from '@/components/icons/GamePlatformIcon.vue';
import { useCartStore } from '@/stores/cart';
import { NCard, NButton } from 'naive-ui';

const cart = useCartStore();

defineProps({
    cartItems: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <n-card v-for="item in cartItems" :key="item._id" size="medium" class="mb-2">
        <img :src="item.imageUrl" alt="img" class="w-full max-w-[250px]" />
        <div class="space-y-2 flex justify-between items-center w-full">
            <p class="text-xl font-bold">{{ item.title }}</p>
            <div class="flex gap-5">
                <GamePlatformIcon :platforms="item.platform" />

                <div class="flex flex-col">
                    <p class="flex justify-center items-center text-xl mb-2">{{ item.price }}$</p>
                    <n-button @click="cart.removeItemFromCart(item._id)" quaternary type="error">
                        Remove
                    </n-button>
                </div>
            </div>
        </div>
    </n-card>
</template>

<style>
.n-card__content {
    @apply flex space-x-4 items-center;
}
</style>
