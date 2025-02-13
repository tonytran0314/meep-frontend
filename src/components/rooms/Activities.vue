<script setup>
    import { modalStore } from '@/stores/modal'
    import { profileStore } from '@/stores/profile'
    import { notificationStore } from '@/stores/notification'

    import AddFriendModal from '@/components/modals/AddFriendModal.vue'
    import NotificationModal from '@/components/modals/NotificationModal.vue'
import { onMounted } from 'vue'

    const modal = modalStore()
    const notification = notificationStore()
    const profile = profileStore()

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }

    const openNotificationModal = () => {
        modal.open(NotificationModal, { title: 'Notifications' })
    }
    
    onMounted(() => {
        window.Echo
        .private(`notification.${profile.id}`)
        .listen('.NewNotification', (event) => {
            console.log(event)
            notification.addToList(event.notification)
            notification.newNotifcationIndicator = true
        })
    })

    await notification.get()
</script>

<template>
    <div class="flex justify-around">
        <font-awesome-icon :icon="['fas', 'user-plus']" @click="openAddFriendModal" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
        <div class="relative">
            <font-awesome-icon :icon="['fas', 'bell']" @click="openNotificationModal" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
            <span v-if="notification.list.length !== 0 || notification.newNotifcationIndicator" class="bg-red-400 rounded-full text-xs absolute top-1 right-1 size-2 flex items-center justify-center"></span>
        </div>
        <font-awesome-icon :icon="['fas', 'comment-medical']" class="size-6 text-gray-700 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-3 rounded-full" />
    </div>
</template>
