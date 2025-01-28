<script setup>
    import SearchBar from '@/components/rooms/SearchBar.vue'
    import { friendStore } from '@/stores/friend'
    import { storeToRefs } from 'pinia'

    const friend = friendStore()
    const { searching } = storeToRefs(friend)
</script>

<template>
    <div class="space-y-3 h-56">
        <SearchBar />
        <div v-if="searching">searching...</div>
        <div v-else-if="friend.foundFriends === null"></div>
        <div v-else-if="friend.foundFriends.length === 0">no results found</div>
        <div v-else class="h-48 overflow-auto">
            <div v-for="friend in friend.foundFriends" class="flex justify-between p-4 items-center">
                <p>{{ friend.username }}</p>
                <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
        </div>
    </div>
</template>
