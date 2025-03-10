<script setup>
    import { storeToRefs } from 'pinia'
    import { roomStore } from '@/stores/room'
    import { profileStore } from '@/stores/profile'

    const room = roomStore()
    const profile = profileStore()

    const { currentRoom } = storeToRefs(room)
    const { id } = storeToRefs(profile)
</script>

<template>
    <div v-if="currentRoom" class="flex flex-1 overflow-auto">
        <div v-if="currentRoom.messages.length"  class="flex flex-col-reverse w-full overflow-y-auto gap-0.5 px-2">
            <!-- CHAT LINES -->
            <div v-for="message in currentRoom.messages" 
                class=" px-4 py-2 max-w-[75%] rounded-3xl"
                :class="(message.user_id === id) ? 'self-end bg-teal-600' : 'self-start bg-gray-200 dark:bg-gray-700'"
            >
                {{ message.content }}
            </div> 
        </div>
        <div v-else class="m-auto flex flex-col items-center gap-4">
            <div class="size-16 sm:size-20 rounded-full bg-gray-500 shadow-lg"></div>
            <div class="text-center">
                <p class="text-sm sm:text-md">{{ currentRoom.name }} and you are friend now</p>
                <p class="text-sm sm:text-md">Let say hi to {{ currentRoom.name }}</p>
            </div>
        </div>
    </div>
</template>
