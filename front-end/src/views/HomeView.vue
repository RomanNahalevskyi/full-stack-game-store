<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { computed } from 'vue';
import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton.vue';

const getProducts = useProductsStore();

getProducts.fetchProducts();

const products = computed(() => getProducts.products ?? []);
</script>

<template>
    <section
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
    >
        <template v-if="getProducts.loading">
            <ProductCardSkeleton v-for="id in 6" :key="id" />
        </template>

        <ProductCard
            v-else
            v-for="{ title, price, imageUrl, description, _id } in products"
            :key="_id"
            :title="title"
            :price="price"
            :description="description"
            :image-url="imageUrl"
        />
    </section>
</template>
