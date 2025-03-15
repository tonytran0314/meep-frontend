<script setup>
    import ChatHeader from '@/components/chat/Header.vue'
    import ChatBody from '@/components/chat/Body.vue'
    import ChatFooter from '@/components/chat/Footer.vue'
    import AddFriendModal from '@/components/modals/AddFriendModal.vue'

    import { modalStore } from '@/stores/modal'
    import { roomStore } from '@/stores/room'
    import { sidebarStore } from '@/stores/sidebar'
    import { storeToRefs } from 'pinia'
    import { onMounted, watch, onBeforeUnmount } from 'vue'
    import { useRoute } from 'vue-router'
    import { profileStore } from '@/stores/profile'

    const modal = modalStore()
    const room = roomStore()
    const sidebar = sidebarStore()
    const profile = profileStore()
    const route = useRoute()

    const { isValidRoomId, currentRoom, list } = storeToRefs(room)
    const { id } = storeToRefs(profile)

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }

    const openSidebar = () => {
        sidebar.show()
    }

    let currentListeningRoom = null

    const listenToRoom = (roomId) => {
        window.Echo.private(`room.${roomId}`)
        .listen('.SendMessage', (event) => {
            if (event.message.user_id !== id.value && currentRoom.value.id == roomId) {
                currentRoom.value.messages.unshift({
                    content: event.message.content
                })
            }
        })

        currentListeningRoom = roomId
    }

    const stopListening = (roomId) => {
        if (currentListeningRoom && currentListeningRoom !== roomId) {
            window.Echo.private(`room.${currentListeningRoom}`).stopListening('.SendMessage')
            console.log(`Stopped listening to room ${currentListeningRoom}`)
        }
    }

    onMounted(async () => {
        const initialRoomId = route.params.roomId || list.value[0]?.id;
        if (initialRoomId) {
            await room.open(initialRoomId)
            listenToRoom(initialRoomId)
        }
    })

    watch(() => route.params.roomId, async (newRoomId, oldRoomId) => {
        if (newRoomId) {
            stopListening(oldRoomId)
            await room.open(newRoomId)
            listenToRoom(newRoomId)
        }
    })

    onBeforeUnmount(() => {
        stopListening(route.params.roomId)
    })
</script>

<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex flex-1">
        <div v-if="!isValidRoomId" class="m-auto flex flex-col gap-4 text-center">
            <img src="@/assets/no-room.svg" alt="No Room Illustrator" class="size-96">
            <div>
                <p>Invalid Room ID</p>
            </div>
        </div>
        <div v-else-if="room.list.length > 0" class="flex flex-col flex-1 gap-4">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
        <div v-else class="m-auto flex flex-col gap-4 text-center">
            <img src="@/assets/no-room.svg" alt="No Room Illustrator" class="size-96">
            <div>
                <p class="text-sm sm:text-md">You currently don't have any conversations.</p>
                <p class="text-sm sm:text-md">Please feel free to add some friends to start chatting.</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2 w-full justify-center">
                <div @click="openSidebar" class="lg:hidden border border-gray-700 dark:border-gray-400 flex justify-center items-center rounded-lg text-gray-900 dark:text-white shadow-lg cursor-pointer px-6 py-3 gap-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <font-awesome-icon :icon="['fas', 'bars']" class="size-6" />
                    <p>Menu</p>
                </div>
                <div @click="openAddFriendModal" class="bg-teal-600 flex justify-center items-center rounded-lg text-white cursor-pointer px-6 py-3 gap-4 shadow-lg hover:bg-teal-500">
                    <font-awesome-icon :icon="['fas', 'user-plus']" class="size-6" />
                    <p>Find friends</p>
                </div>
            </div>
        </div>
    </div>
</template>
