<script setup>
    import SearchBar from '@/components/rooms/SearchBar.vue'
    import { friendStore } from '@/stores/friend'
    import { storeToRefs } from 'pinia'

    const friend = friendStore()
    const { searching } = storeToRefs(friend)

    const sendAddFriendRequestToUser = (userId) => {
        friend.markFriendAsAdded(userId)
        friend.sendFriendRequestTo(userId)
    }
</script>

<template>
    <div class="space-y-3 h-56">
        <SearchBar />

        <!-- consider using component :is, in here -->
        <div v-if="searching">searching...</div>
        <div v-else-if="friend.foundFriends === null"></div>
        <div v-else-if="friend.foundFriends.length === 0">no results found</div>
        <div v-else class="h-48 overflow-auto">
            <div v-for="friend in friend.foundFriends" class="flex justify-between p-4 items-center">
                <p>{{ friend.username }}</p>
                
                <font-awesome-icon v-if="friend.markAsAdded" :icon="['fas', 'check']" class="bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full text-white" />
                <font-awesome-icon v-else @click="sendAddFriendRequestToUser(friend.id)" :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full hover:text-white" />
            </div>
        </div>
    </div>
</template>
