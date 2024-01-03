export const rules = {
    userData: {
        fullName: {
            required: true,
            message: 'Please input your full name',
            trigger: ['input', 'blur']
        },
        address: {
            required: true,
            message: 'Please input your address',
            trigger: ['input', 'blur']
        },
        phone: {
            required: true,
            message: 'Please input your phone number',
            trigger: ['input', 'blur']
        },
        email: {
            required: true,
            message: 'Please input your email',
            trigger: ['input', 'blur']
        }
    }
};
