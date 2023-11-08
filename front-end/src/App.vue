<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';

const getCategories = useCategoriesStore();
const cart = useCartStore();

onMounted(() => {
    getCategories.fetchCategories();
});
</script>

<template>
    <TheHeader :categories="getCategories.categories" :cart-count="cart.cartCount" />

    <main class="pt-20">
        <div class="main-container h-full">
            <RouterView v-slot="{ Component }">
                <KeepAlive>
                    <component :is="Component" />
                </KeepAlive>
            </RouterView>
        </div>
    </main>
</template>

<style scoped></style>
