<script setup>
    import { modalStore } from '@/stores/modal'
    import AddFriendModal from '@/components/modals/AddFriendModal.vue'
    import NotificationModal from '@/components/modals/NotificationModal.vue'

    const modal = modalStore()

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }

    const openNotificationModal = () => {
        modal.open(NotificationModal, { title: 'Notifications' })
    }
</script>

<template>
    <div class="flex justify-around">
        <font-awesome-icon :icon="['fas', 'user-plus']" @click="openAddFriendModal" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
        <div class="relative">
            <font-awesome-icon :icon="['fas', 'bell']" @click="openNotificationModal" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
            <span class="bg-red-400 rounded-full text-xs absolute top-1 right-1 size-2 flex items-center justify-center"></span>
        </div>
        <font-awesome-icon :icon="['fas', 'comment-medical']" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
    </div>
</template>
