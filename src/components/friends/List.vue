<script setup>
    import { storeToRefs } from 'pinia'
    import { groupStore } from '@/stores/group'
    import { friendStore } from '@/stores/friend'

    const group = groupStore()
    const friend = friendStore()
    const { friendList } = storeToRefs(friendStore())

    const addUserToGroup = (userId) => {
        friend.markAsAddedToGroup(userId)
        group.addUserToGroup(userId)
    }

    const removeUserFromGroup = (userId) => {
        friend.markAsRemovedFromGroup(userId)
        group.removeUserFromGroup(userId)
    }

    if(friendList.value === null) {
        friend.getFriendList()
    }
</script>

<template>
    <div class="space-y-4">
        <p>Friends list:</p>
        <div class="h-72 overflow-auto space-y-4">
            <div v-for="friend in friendList" class="flex justify-between">
                <p>{{ friend.name }}</p>
                <font-awesome-icon v-if="friend.addedToGroup" @click="removeUserFromGroup(friend.id)" :icon="['fas', 'check']" class="cursor-pointer bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full" />
                <font-awesome-icon v-else @click="addUserToGroup(friend.id)" :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 hover:text-white size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
        </div>
    </div>
</template>
