<script setup>
    import { storeToRefs } from 'pinia'
    import { useRoute } from 'vue-router'
    import { roomStore } from '@/stores/room'
    import { messageStore } from '@/stores/message'

    const room = roomStore()
    const route = useRoute()
    const message = messageStore()
    const { newMessage } = storeToRefs(message)
    const { currentRoom } = storeToRefs(room)

    const sendMessage = () => {
        message.send({
            'room_id': route.params.roomId,
            'content': newMessage.value
        })
        message.addNewMessageToMessageListTemporary()
        message.clearNewMessageContent()
    }
</script>

<template>
    <div v-if="currentRoom" class="w-full h-12 flex items-center gap-4">
        <!-- MEDIA -->
        <!-- <div class="flex gap-2">
            <font-awesome-icon :icon="['fas', 'image']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 p-2 rounded-full dark:hover:bg-gray-700" />
            <font-awesome-icon :icon="['fas', 'note-sticky']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 p-2 rounded-full dark:hover:bg-gray-700" />
        </div> -->
        <!-- MESSAGE INPUT & SEND BUTTON -->
        <form @submit.prevent="sendMessage" class="flex gap-2 w-full">
            <div class="flex items-center w-full">
                <input v-model="newMessage" type="text" class="size-full border-2 rounded-full px-4 dark:bg-gray-700 dark:border-gray-700" placeholder="Aa...">
            </div>
            <button type="submit" class="flex justify-center items-center">
                <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-teal-600 size-5 bg-teal-200 hover:bg-teal-100 p-2 rounded-full" />
            </button>
        </form>
    </div>
</template>
