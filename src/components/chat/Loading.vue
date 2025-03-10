<script setup>
    
</script>

<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex w-full flex-col gap-4">
        <div class="flex gap-2 h-12">
            <!-- avatar -->
            <div class="size-10 sm:size-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div>
            <!-- name -->
            <div class="w-full sm:w-56 h-10 sm:h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <!-- chat body -->
        <div class="flex flex-1 flex-col justify-end gap-4 sm:gap-1">
            <div class="w-60 h-10 sm:h-12 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse self-end"></div>
            <div class="w-72 h-10 sm:h-12 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div class="w-96 h-10 sm:h-12 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div class="w-80 h-10 sm:h-12 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse self-end"></div>
            <div class="w-40 h-10 sm:h-12 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <div class="h-10 sm:h-12">
            <!-- chat input -->
            <div class="size-full rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
    </div>
</template>
