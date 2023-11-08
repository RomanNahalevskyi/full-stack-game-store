<script setup>
import { getPlatform } from '@/functions';

defineProps({
    platforms: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <component
        v-for="(platform, id) in platforms"
        :key="id"
        :is="getPlatform(platform)"
        class="w-6"
    />
</template>
