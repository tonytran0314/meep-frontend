<script setup>
    import Button from '@/components/buttons/PrimaryButton.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    
    const goToHome = () => {
        router.push({ name: 'Guest' })
    }
</script>

<template>
    <div class="w-full h-screen bg-white dark:bg-gray-900 flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-12 2xl:gap-14">
        <img class="w-2/3 sm:w-1/2 2xl:w-1/3" src="@/assets/not-found.svg" alt="Not Found Illustrator">
        <div class="flex flex-col gap-6 md:gap-10 items-center">
            <div class="text-gray-900 dark:text-blue-50 flex flex-col gap-4 md:gap-6 text-center">
                <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Oops !!!</p>
                <p class="text-sm sm:text-md md:text-lg lg:text-xl">The page you were looking for <br> couldn't be found</p>
            </div>
            <div>
                <Button @click="goToHome" class="flex gap-3 items-center">
                    <font-awesome-icon :icon="['fas', 'home']" class="size-4 md:size-5" />
                    <span class="text-sm md:text-md">Go to Home</span>
                </Button>
            </div>
        </div>
    </div>
</template>