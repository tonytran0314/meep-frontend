<script setup>
    import UserInformation from '@/components/rooms/UserInformation.vue'
    import RoomList from '@/components/rooms/List.vue'
    import { authStore } from '@/stores/authentication'

    const auth = authStore()
</script>

<template>
    <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4 flex flex-col gap-8">
        <Suspense>
            <UserInformation />
            <template #fallback>
                Loading user info...
            </template>
        </Suspense>
        <button @click="auth.logout" class="bg-teal-200">Logout</button>
        <RoomList />
    </div>
</template>
