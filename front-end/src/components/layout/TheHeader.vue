<script setup>
import LogoLight from '@/components/logos/LogoLight.vue';
</script>

<template>
    <header class="header bg-[var(--white)] h-24 flex items-center">
        <div class="max-w-[var(--max-content-width)]">
            <div class="flex items-center">
                <LogoLight class="w-52" />
            </div>
        </div>
    </header>
</template>

<style>
.header {
    box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.14);
    padding: 16px 30px 16px 35px;
}
</style>
