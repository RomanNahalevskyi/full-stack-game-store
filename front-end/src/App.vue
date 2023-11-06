<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import { reactive } from 'vue';

const categories = reactive([
    { title: 'ps5', id: 1 },
    { title: 'pc', id: 2 },
    { title: 'nintendo', id: 3 }
]);
</script>

<template>
    <TheHeader :categories="categories" />

    <main>
        <div class="main-container h-screen">
            <RouterView v-slot="{ Component }">
                <KeepAlive>
                    <component :is="Component" />
                </KeepAlive>
            </RouterView>
        </div>
    </main>
</template>

<style scoped></style>
