<script setup>
import { NCard, NButton } from 'naive-ui';

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
    }
});
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
                <p class="text-xl font-bold mb-4">{{ price }}$</p>
            </div>

            <n-button strong secondary type="primary"> Add to card </n-button>
        </div>
    </n-card>
</template>

<style></style>
