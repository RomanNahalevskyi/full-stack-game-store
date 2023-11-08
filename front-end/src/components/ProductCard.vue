<script setup>
import { NCard, NButton } from 'naive-ui';
import GamePlatformIcon from '@/components/icons/GamePlatformIcon.vue';

defineProps({
    title: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    platforms: {
        type: Array,
        default: () => []
    },
    inCart: {
        type: Boolean,
        default: false
    }
});

defineEmits(['addToCart', 'removeItemFromCart']);
</script>

<template>
    <n-card>
        <template #cover>
            <img alt="cover" :src="imageUrl" class="w-2" />
        </template>

        <div class="pt-5 flex flex-col justify-between h-full">
            <div>
                <p class="text-xl font-bold mb-4">{{ title }}</p>
                <p class="mb-4">{{ description }}</p>

                <div class="flex justify-between items-center mb-4">
                    <p class="text-xl font-bold">{{ price }}$</p>
                    <div class="flex gap-3">
                        <GamePlatformIcon :platforms="platforms" />
                    </div>
                </div>
            </div>

            <n-button
                v-if="inCart"
                @click="$emit('removeItemFromCart')"
                strong
                secondary
                type="error"
            >
                Remove from cart
            </n-button>

            <n-button v-else @click="$emit('addToCart')" strong secondary type="primary">
                Add to card
            </n-button>
        </div>
    </n-card>
</template>

<style></style>
