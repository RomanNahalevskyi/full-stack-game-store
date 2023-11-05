import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProduct, getProducts } from '@/services/product.service';

export const useProductsStore = defineStore('products', () => {
    const product = ref({});
    const products = ref([]);
    const productError = ref(null);

    const fetchProduct = async (id) => {
        try {
            product.value = await getProduct(id);
        } catch (err) {
            productError.value = err;
        }
    };

    const fetchProducts = async () => {
        try {
            products.value = await getProducts();
        } catch (err) {
            productError.value = err;
        }
    };

    return { product, products, productError, fetchProduct, fetchProducts };
});
