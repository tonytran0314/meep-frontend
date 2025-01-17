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
                <UserInformation />
                <SearchBar />
                <RoomList />
            </div>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
