<script setup>
import { NButton, NForm, NFormItem, NInput } from 'naive-ui';
import { rules } from '@/utils/validationRules';
import { ref } from 'vue';

const emit = defineEmits(['makeOrder']);
defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});

const formValue = ref({
    userData: {
        fullName: '',
        address: '',
        phone: '',
        email: ''
    }
});

const formRef = ref();

const sendUserData = () => {
    formRef.value?.validate((errors) => {
        if (!errors) {
            emit('makeOrder', formValue.value.userData);
        }
    });
};
</script>

<template>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="medium">
        <div class="flex flex-col w-full">
            <n-form-item label="Full Name" path="userData.fullName">
                <n-input v-model:value="formValue.userData.fullName" placeholder="Full Name" />
            </n-form-item>
            <n-form-item label="Address" path="userData.address">
                <n-input v-model:value="formValue.userData.address" placeholder="Address" />
            </n-form-item>
            <n-form-item label="Phone" path="userData.phone">
                <n-input
                    v-model:value="formValue.userData.phone"
                    placeholder="Phone Number"
                ></n-input>
            </n-form-item>
            <n-form-item label="Email" path="userData.email">
                <n-input v-model:value="formValue.userData.email" placeholder="Email"></n-input>
            </n-form-item>
            <n-form-item style="display: flex; justify-content: flex-end">
                <n-button @click="sendUserData" :loading="loading" strong type="primary">
                    Make an order
                </n-button>
            </n-form-item>
        </div>
    </n-form>
</template>
