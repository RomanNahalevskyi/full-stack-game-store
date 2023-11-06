<script setup>
import { NCard, NSkeleton } from 'naive-ui';
</script>

<template>
    <n-card>
        <template #cover>
            <n-skeleton class="!h-52" />
        </template>

        <div class="mt-3">
            <n-skeleton text class="max-w-2xl py-3" />
            <n-skeleton text class="max-w-2xl py-5 my-4" />
            <n-skeleton text class="max-w-2xl py-2 mb-4" />
        </div>
    </n-card>
</template>
