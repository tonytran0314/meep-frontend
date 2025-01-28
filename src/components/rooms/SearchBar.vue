<script setup>
    import { friendStore } from '@/stores/friend'
    import { storeToRefs } from 'pinia'

    const friend = friendStore()
    const { searchKeyword } = storeToRefs(friend)

    const searchFriend = () => {
        friend.search()
    }
</script>

<template>
    <form @submit.prevent="searchFriend" class="bg-white dark:bg-gray-700 border-2 dark:border-none px-4 py-2 rounded-full flex gap-3 items-center">   
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-400" />
        <input v-model="searchKeyword" type="text" class="bg-white dark:bg-gray-700 flex-1 focus:outline-none" placeholder="Search friends ...">
        <button class="bg-teal-600 hover:bg-teal-500 px-3 rounded-full text-sm" type="submit">Search</button>
    </form>
</template>
