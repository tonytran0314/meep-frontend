<script setup>
    import Room from '@/components/rooms/Item.vue'

    import { roomStore } from '@/stores/room.js'

    const room = roomStore()

    const openRoom = (roomId) => {
        room.open(roomId)
    }

    await room.get()
</script>

<template>
    <div class="flex-1 overflow-auto space-y-4">
        <p class="text-lg text-gray-400">Conversations</p>
        <div>
            <Room v-for="room in room.list" :roomId="room.id" :latestMessage="room.latestMessage.content" @click="openRoom(room.id)" />
        </div>
    </div>
</template>
