<script setup>
import CartIcon from '@/components/icons/CartIcon.vue';

defineProps({
    cartCount: {
        type: Number,
        default: 0
    }
});
</script>

<template>
    <RouterLink to="/cart" class="relative">
        <div class="w-10 mr-2">
            <CartIcon />
        </div>
        <span
            class="rounded-3xl bg-[#46b29d] absolute w-6 flex justify-center text-white top-0 right-0 scale-0"
            :class="{ 'scale-100': cartCount }"
        >
            {{ cartCount }}
        </span>
    </RouterLink>
</template>
