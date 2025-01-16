<script setup>
    import { reactive } from 'vue'
    import { authStore } from '@/stores/authentication'

    import LoadingButton from '@/components/buttons/LoadingButton.vue'
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import TextField from '@/components/form/TextField.vue'
    import ErrorAlert from '@/components/form/ErrorAlert.vue'

    const loginData = reactive({
        email: null,
        password: null
    })

    const auth = authStore()

    const loginHandle = () => {
        auth.login(loginData)
    }
</script>

<template>
    <div class="bg-white dark:bg-gray-800 space-y-4 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-blue-50 md:text-2xl">Log In</h1>
        <form @submit.prevent="loginHandle" class="space-y-4 md:space-y-6">

            <TextField
                v-model="loginData.email"
                label="Email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                :error="auth.errors.email"
            />
            
            <TextField
                v-model="loginData.password"
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                :error="auth.errors.password"
            />

            <ErrorAlert v-show="auth.errors.message">{{ auth.errors.message }}</ErrorAlert>
            
            <LoadingButton v-if="auth.isLoading" class="w-full" />
            <PrimaryButton v-else type="submit" class="w-full">Log In</PrimaryButton>

            <p class="text-sm font-light text-gray-500">
                Don't have an account yet?
                <router-link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign Up here
                </router-link>
            </p>
        </form>
    </div>
</template>
