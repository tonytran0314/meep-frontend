<script setup>
    import UserInformation from '@/components/rooms/UserInformation.vue'
    import Activities from '@/components/rooms/Activities.vue'
    import RoomList from '@/components/rooms/List.vue'
    import Loading from '@/components/rooms/Loading.vue'
</script>

<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4">
        <Suspense>
            <div class="flex flex-col gap-4 h-full">
                <UserInformation />
                <Activities />
                <RoomList />
            </div>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>
