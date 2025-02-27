<script setup>
    import Button from '@/components/buttons/PrimaryButton.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    
    const goToHome = () => {
        router.push({ name: 'Guest' })
    }
</script>

<template>
    <div class="w-full h-screen bg-white dark:bg-gray-900 flex justify-center items-center gap-10">
        <img src="@/assets/not-found.svg" alt="Not Found Illustrator">
        <div class="flex flex-col gap-10">
            <div class="text-gray-900 dark:text-blue-50 flex flex-col gap-6">
                <p class="text-8xl font-bold">Oops !!!</p>
                <p class="text-3xl">The page you were looking for <br> couldn't be found</p>
            </div>
            <div>
                <Button @click="goToHome" class="flex gap-3 items-center">
                    <font-awesome-icon :icon="['fas', 'home']" class="size-5" />
                    <span>Go to Home</span>
                </Button>
            </div>
        </div>
    </div>
</template>