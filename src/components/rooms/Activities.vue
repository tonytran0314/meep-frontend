<script setup>
    import { modalStore } from '@/stores/modal'
    import AddFriendModal from '@/components/modals/AddFriendModal.vue'

    const modal = modalStore()

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }
</script>

<template>
    <div class="flex justify-around">
        <font-awesome-icon :icon="['fas', 'user-plus']" @click="openAddFriendModal" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
        <font-awesome-icon :icon="['fas', 'bell']" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
        <font-awesome-icon :icon="['fas', 'comment-medical']" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
    </div>
</template>
