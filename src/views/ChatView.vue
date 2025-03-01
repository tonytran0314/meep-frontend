<script setup>
    import Chat from '@/components/chat/Container.vue'
    import Rooms from '@/components/rooms/Container.vue'
    import ChatLoading from '@/components/chat/Loading.vue'
    import RoomsLoading from '@/components/rooms/Loading.vue'

    import { storeToRefs } from 'pinia'
    import { useRoute } from 'vue-router'
    import { roomStore } from '@/stores/room'
    import { ref, onMounted, watch } from 'vue'
    import { profileStore } from '@/stores/profile' 
    import { notificationStore } from '@/stores/notification' 
    
    const isPageLoading = ref(false)

    const route = useRoute()
    const room = roomStore()
    const profile = profileStore()
    const notification = notificationStore()

    const { id } = storeToRefs(profile)
    const { list, currentRoom } = storeToRefs(room)

    onMounted(async () => {
        isPageLoading.value = true

        await Promise.all([
            room.get(),
            profile.get(),
            notification.get()
        ])

        const initialRoomId = route.params.roomId || list.value[0]?.id
        if (initialRoomId) {
            await room.open(initialRoomId)
        }
        
        // listen to private room
        window.Echo.private(`room.${initialRoomId}`)
        .listen('.SendMessage', (event) => {
            if(event.message.user_id !== id.value) {
                currentRoom.value.messages.unshift(
                    {
                        "content": event.message.content 
                    }
                )
            }
        })

        isPageLoading.value = false
    })

    watch(() => route.params.roomId, (newRoomId) => {
        // listen to private room
        window.Echo.private(`room.${newRoomId}`)
        .listen('.SendMessage', (event) => {
            if(event.message.user_id !== id.value) {
                currentRoom.value.messages.unshift(
                    {
                        "content": event.message.content 
                    }
                )
            }
        })
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
