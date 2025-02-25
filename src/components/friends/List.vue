<script setup>
    import { friendStore } from '@/stores/friend'
    import { storeToRefs } from 'pinia'

    const friend = friendStore()
    const { friendList } = storeToRefs(friendStore())

    const addUserToGroup = (userId) => {
        friend.markAsAddedToGroup(userId)
        // friend.addToGroup(userId) // friend or group ? // is it necessary ?
    }

    const removeUserFromGroup = (userId) => {
        friend.markAsRemovedFromGroup(userId)
    }

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
                <font-awesome-icon v-if="friend.addedToGroup" @click="removeUserFromGroup(friend.id)" :icon="['fas', 'check']" class="cursor-pointer bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full" />
                <font-awesome-icon v-else @click="addUserToGroup(friend.id)" :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
            <!-- <div class="flex justify-between">
                <p>User full name</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div> -->
        </div>
    </div>
</template>
