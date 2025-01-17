<script setup>
    import UserInformation from '@/components/rooms/UserInformation.vue'
    import SearchBar from '@/components/rooms/SearchBar.vue'
    import RoomList from '@/components/rooms/List.vue'
    import { authStore } from '@/stores/authentication'

    const auth = authStore()
</script>

<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4">
        <Suspense>
            <div class="flex flex-col gap-8">
                <div class="flex items-center justify-between">
                    <UserInformation />
                    <font-awesome-icon :icon="['fas', 'bell']" class="size-5 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-full" />
                </div>
                <SearchBar />
                <RoomList />
            </div>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
