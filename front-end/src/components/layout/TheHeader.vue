<script setup>
import { RouterLink } from 'vue-router';
import LogoLight from '@/components/logos/LogoLight.vue';

defineProps({
    categories: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <header class="header bg-[var(--white)] flex items-center">
        <div class="main-container">
            <div class="flex items-center justify-between">
                <div>
                    <RouterLink to="/">
                        <LogoLight class="w-52" />
                    </RouterLink>
                </div>

                <div>
                    <ul class="flex gap-6">
                        <li v-for="{ title, id } in categories" :key="id">
                            <RouterLink
                                class="uppercase font-bold text-[#3d3d3d]"
                                :to="`categories/${title}`"
                            >
                                {{ title }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.header {
    box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.14);
}
</style>
