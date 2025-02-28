<script setup>
    import Chat from '@/components/chat/Container.vue'
    import Rooms from '@/components/rooms/Container.vue'
    import ChatLoading from '@/components/chat/Loading.vue'
    import RoomsLoading from '@/components/rooms/Loading.vue'

    import { storeToRefs } from 'pinia'
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { roomStore } from '@/stores/room'
    import { profileStore } from '@/stores/profile' 
    import { messageStore } from '@/stores/message' 
    import { notificationStore } from '@/stores/notification' 
    
    const isPageLoading = ref(false)
    const isChatLoading = ref(false)

    const route = useRoute()
    const room = roomStore()
    const profile = profileStore()
    const notification = notificationStore()
    const message = messageStore()

    const { list } = storeToRefs(room)

    onMounted(async () => {
        isPageLoading.value = true

        await Promise.all([
            room.get(),
            profile.get(),
            notification.get()
        ])

        const initialRoomId = route.params.roomId || list.value[0]?.id
        if (initialRoomId) {
            await message.get(initialRoomId)
        }

        isPageLoading.value = false
    })
</script>

<template>
    <div class="w-full h-screen bg-blue-50 dark:bg-gray-900 p-6 flex">
        <div v-if="isPageLoading" class="flex flex-1 gap-6">
            <RoomsLoading />
            <ChatLoading />
        </div>
        <div v-else class="flex flex-1 gap-6">
            <Rooms />
            <Chat />
        </div>
    </div>
</template>
