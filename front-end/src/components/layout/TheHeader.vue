<script setup>
import { RouterLink } from 'vue-router';
import LogoLightIcon from '@/components/icons/LogoLightIcon.vue';
import TheCart from '@/components/layout/TheCart.vue';

defineProps({
    categories: {
        type: Array,
        default: () => []
    },
    cartCount: {
        type: Number,
        default: 0
    }
});
</script>

<template>
    <header class="header bg-[var(--white)] flex items-center fixed top-0 left-0 right-0 z-10 h-20">
        <div class="main-container">
            <div class="flex items-center justify-between">
                <div>
                    <RouterLink to="/">
                        <LogoLightIcon class="w-52" />
                    </RouterLink>
                </div>

                <div>
                    <ul class="flex gap-6">
                        <li v-for="{ title, id } in categories" :key="id">
                            <RouterLink
                                class="uppercase font-bold text-[#3d3d3d]"
                                to="/"
                            >
                                {{ title }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <TheCart :cart-count="cartCount" />
            </div>
        </div>
    </header>
</template>

<style>
.header {
    box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.14);
}
</style>
