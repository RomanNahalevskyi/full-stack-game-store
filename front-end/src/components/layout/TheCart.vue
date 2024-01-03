<script setup>
import CartIcon from '@/components/icons/CartIcon.vue';
import { NBadge, NIcon } from 'naive-ui';

defineProps({
    cartCount: {
        type: Number,
        default: 0
    }
});

const offset = [0, 5];
</script>

<template>
    <RouterLink to="/cart">
        <n-badge :value="cartCount" :max="15" :offset="offset">
            <n-icon size="35">
                <CartIcon />
            </n-icon>
        </n-badge>
    </RouterLink>
</template>
