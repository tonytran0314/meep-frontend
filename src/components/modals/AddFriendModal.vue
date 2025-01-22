<script setup>
    import SearchBar from '@/components/rooms/SearchBar.vue'
</script>

<template>
    <div class="space-y-3">
        <SearchBar />
        <div class="">
            <div class="flex justify-between p-4 items-center">
                <p>Username</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
            <div class="flex justify-between p-4 items-center">
                <p>Username</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
            <div class="flex justify-between p-4 items-center">
                <p>Username</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
        </div>
    </div>
</template>
