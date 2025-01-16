<script setup>
    import { reactive } from 'vue'
    import { authStore } from '@/stores/authentication'

    import LoadingButton from '@/components/buttons/LoadingButton.vue'
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import TextField from '@/components/form/TextField.vue'

    const auth = authStore()

    const signupForm = reactive({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const signupHandle = () => {
        auth.signup(signupForm)
    }
</script>

<template>
    <div class="space-y-4 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-blue-50 md:text-2xl">Create Account</h1>
        <form @submit.prevent="signupHandle" class="space-y-4 md:space-y-6">
            <TextField
                v-model="signupForm.name"
                label="Fullname"
                type="text"
                name="name"
                placeholder="Your name" 
                :error="auth.errors.name"
            />

            <TextField
                v-model="signupForm.email"
                label="Email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                :error="auth.errors.email" 
            />
            
            <TextField
                v-model="signupForm.password"
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                :error="auth.errors.password" 
            />

            <TextField
                v-model="signupForm.password_confirmation"
                label="Confirm Password"
                type="password"
                name="confirm-password"
                placeholder="••••••••"
            />

            <LoadingButton v-if="auth.isLoading" class="w-full" />
            <PrimaryButton v-else type="submit" class="w-full">Create Account</PrimaryButton>

            <p class="text-sm font-light text-gray-500">
                Already have an account? 
                <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login Here</router-link>
            </p>
        </form>
    </div>
</template>
