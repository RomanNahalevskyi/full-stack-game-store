<script setup>
import EmptyCartIcon from '@/components/icons/EmptyCartIcon.vue';
import { NCard, NButton } from 'naive-ui';
import { useCartStore } from '@/stores/cart';
import GamePlatformIcon from '@/components/icons/GamePlatformIcon.vue';

const cart = useCartStore();
</script>

<template>
    <div v-if="cart.cartItems.length">
        <n-card v-for="item in cart.cartItems" :key="item._id" size="medium">
            <img :src="item.imageUrl" alt="img" class="w-full max-w-[250px]" />
            <div class="space-y-2 flex justify-between items-center w-full">
                <p class="text-xl font-bold">{{ item.title }}</p>
                <div class="flex gap-5">
                    <GamePlatformIcon :platforms="item.platform" />

                    <div class="flex flex-col">
                        <p class="flex justify-center items-center text-xl mb-2">
                            {{ item.price }}$
                        </p>
                        <n-button quaternary type="error"> Remove </n-button>
                    </div>
                </div>
            </div>
        </n-card>
    </div>

    <div v-else class="w-full flex justify-center">
        <EmptyCartIcon />
    </div>
</template>

<style>
.n-card__content {
    @apply flex space-x-4 items-center;
}
</style>
