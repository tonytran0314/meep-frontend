<script setup>
    import { onMounted, watch } from 'vue'
    import { roomStore } from '@/stores/room'
    import { profileStore } from '@/stores/profile'

    import Room from '@/components/rooms/Item.vue'

    const room = roomStore()
    const profile = profileStore()

    const openRoom = (roomId) => {
        room.open(roomId)
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

    await room.get()
</script>

<template>
    <div class="flex-1 space-y-1 overflow-auto">
        <Room 
            v-for="room in room.list ?? []" 
            :key="room.id"
            :roomId="room.id" 
            :latestMessage="room.latestMessage?.content" 
            @click="openRoom(room.id)" 
        />
    </div>
</template>
