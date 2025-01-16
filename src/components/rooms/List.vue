<script setup>
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
            <div v-for="room in room.list" @click="openRoom(room.id)" class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                <!-- AVATAR -->
                <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                <!-- FULLNAME -->
                <div>
                    <p>Room ID: {{ room.id }}</p>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">Preview mes... 00:00</p>
                        <div class="size-3 rounded-full bg-green-400"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
