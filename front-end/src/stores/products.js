import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProduct, getProducts } from '@/services/product.service';

export const useProductsStore = defineStore('products', () => {
    const product = ref({});
    const products = ref([]);
    const productError = ref(null);
    const loading = ref(true);

    const fetchProduct = async (id) => {
        try {
            loading.value = true;
            product.value = await getProduct(id);
            loading.value = false;
        } catch (err) {
            productError.value = err;
        }
    };

    const fetchProducts = async () => {
        try {
            loading.value = true;
            products.value = await getProducts();
            loading.value = false;
        } catch (err) {
            productError.value = err;
        }
    };

    return { product, products, productError, fetchProduct, fetchProducts, loading };
});
