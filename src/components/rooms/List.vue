<script setup>
    import { onMounted, watch } from 'vue'
    import { roomStore } from '@/stores/room'
    import { modalStore } from '@/stores/modal'
    import { profileStore } from '@/stores/profile'
    import { sidebarStore } from '@/stores/sidebar'
    
    import Room from '@/components/rooms/Item.vue'
    import AddFriendModal from '@/components/modals/AddFriendModal.vue'

    const modal = modalStore()
    const room = roomStore()
    const profile = profileStore()
    const sidebar = sidebarStore()

    const openRoom = (roomId) => {
        room.open(roomId)
        sidebar.hide()
    }

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }

    const subscribeToRooms = () => {
        room.list.forEach((r) => {
            // if (!window.Echo.privateChannels[`room.${r.id}`]) {
                window.Echo.private(`room.${r.id}`)
                    .listen('.SendMessage', (event) => {
                        console.log(`New message in room ${r.id}:`, event.message.content)
                    })
            // }
        })
    }

    onMounted(() => {
        window.Echo
        .private(`new-room.${profile.id}`)
        .listen('.NewRoom', (event) => {
            room.list = [event.room, ...room.list]
        })
    })

    watch(() => room.list.length, () => {
        subscribeToRooms()
    })
</script>

<template>
    <div class="flex-1 space-y-1 overflow-auto">
        <div v-if="room.list.length > 0">
            <Room 
                v-for="room in room.list ?? []" 
                :key="room.id"
                :name="room.name"
                :roomId="room.id" 
                :latestMessage="room.latestMessage?.content" 
                @click="openRoom(room.id)" 
            />
        </div>
        <div v-else class="m-auto flex flex-col gap-4 items-center">
            <img src="@/assets/no-room.svg" alt="No Room Illustrator" class="size-72">
            <div class="text-sm sm:text-md text-center">
                <p>You currently don't have any conversations.</p>
                <p>Please feel free to add some friends to start chatting.</p>
            </div>
            <div @click="openAddFriendModal" class="bg-teal-600 flex justify-center items-center rounded-lg text-white cursor-pointer py-2 px-4 gap-4 hover:bg-teal-500">
                <font-awesome-icon :icon="['fas', 'user-plus']" class="size-5" />
                <p class="text-sm">Find friends</p>
            </div>
        </div>
    </div>
</template>
