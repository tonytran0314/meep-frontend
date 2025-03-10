<script setup>
    const rooms = 5
</script>

<template>
    <div class="hidden lg:flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4">
        <div class="h-[76px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>
        <div class="h-10 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div>
        <div class="space-y-4">
            <div>
                <div v-for="room in rooms" class="flex gap-2 p-3 rounded-lg">
                    <div class="size-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div class="flex flex-col gap-1">
                        <div class="w-32 h-5 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                        <div class="w-60 h-5 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
