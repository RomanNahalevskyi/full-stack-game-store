import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getCategory, getCategories } from '@/services/category.service';

export const useCategoriesStore = defineStore('categories', () => {
    const category = ref([]);
    const categories = ref([]);
    const categoryError = ref(null);
    const loading = ref(true);

    const fetchCategory = async (id) => {
        try {
            loading.value = true;
            category.value = await getCategory(id);
            loading.value = false;
        } catch (err) {
            categoryError.value = err;
        }
    };

    const fetchCategories = async () => {
        try {
            loading.value = true;
            categories.value = await getCategories();
            loading.value = false;
        } catch (err) {
            categoryError.value = err;
        }
    };

    return { category, categories, categoryError, fetchCategories, fetchCategory, loading };
});
