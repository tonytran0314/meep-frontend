<script setup>
    import { ref, watch } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useRoute } from 'vue-router'
    import { roomStore } from '@/stores/room'

    const route = useRoute()
    const room = roomStore()

    const currentRoomId = ref(route.params.roomId)
    const { currentRoom } = storeToRefs(room)

    watch(() => route.params.roomId, (newRoomId) => {
        currentRoomId.value = newRoomId
    })
</script>

<template>
    <div class="w-full h-12 flex justify-between items-center">
        <!-- CHATTING PERSON OR GROUP INFO -->
        <div class="flex items-center gap-2">
            <!-- AVATAR -->
            <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
            <!-- PERSON OR GROUP NAME -->
            <p class="font-bold">{{ currentRoom.title }}, ID: {{ currentRoomId }}</p>
        </div>
        <!-- ACTIONS: VOICE CALL, VIDEO CALL -->
        <!-- <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
            <font-awesome-icon :icon="['fas', 'video']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
        </div> -->
        <div v-if="currentRoom.isGroup">
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="size-5 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-blue-50" />
        </div>
    </div>
</template>
