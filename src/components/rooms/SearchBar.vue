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
    <form @submit.prevent="searchFriend" class="bg-white dark:bg-gray-700 border-2 dark:border-none pr-2 pl-4 py-2 rounded-full flex items-center">   
        <input v-model="searchKeyword" type="text" class="bg-white dark:bg-gray-700 w-full focus:outline-none text-sm md:text-md" placeholder="Search friends ...">
        
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-white cursor-pointer bg-teal-600 hover:bg-teal-500 p-2 rounded-full" />
    </form>
</template>
