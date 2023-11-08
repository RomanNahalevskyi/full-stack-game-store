<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { computed, onMounted } from 'vue';
import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton.vue';

const getProducts = useProductsStore();
const cart = useCartStore();

onMounted(() => {
    getProducts.fetchProducts();
});

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
            v-for="product in products"
            :key="product._id"
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :image-url="product.imageUrl"
            :platforms="product.platform"
            @add-to-cart="cart.addItemToCart(product)"
        />
    </section>
</template>
