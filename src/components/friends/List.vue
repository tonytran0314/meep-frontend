<script setup>
    import { friendStore } from '@/stores/friend'
    import { storeToRefs } from 'pinia'

    const friend = friendStore()
    const { friendList } = storeToRefs(friendStore())

    if(friendList.value === null) {
        await friend.getFriendList()
    }
</script>

<template>
    <div class="space-y-4">
        <p>Friends list:</p>
        <div class="h-72 overflow-auto space-y-4">
            <div v-for="friend in friendList" class="flex justify-between">
                <p>{{ friend.name }}</p>
                <font-awesome-icon :icon="['fas', 'check']" class="cursor-pointer bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full" />
            </div>
            <!-- <div class="flex justify-between">
                <p>User full name</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div> -->
        </div>
    </div>
</template>
