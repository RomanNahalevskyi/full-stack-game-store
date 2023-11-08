<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';
import { NDialogProvider } from 'naive-ui';

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
                    <n-dialog-provider>
                        <component :is="Component" />
                    </n-dialog-provider>
                </KeepAlive>
            </RouterView>
        </div>
    </main>
</template>

<style scoped></style>
