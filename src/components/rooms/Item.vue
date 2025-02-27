<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const props = defineProps({
        roomId: Number,
        latestMessage: String
    })

    const previewMessage = ref(props.latestMessage)
    let channel = null
    
    onMounted(() => {
        channel = window.Echo.private(`room.${props.roomId}`)
            .listen('.SendMessage', (event) => {
                if(event.message.room_id === props.roomId) {
                    previewMessage.value = event.message.content
                }
            })
    })

    onUnmounted(() => {
        if (channel) {
            channel.stopListening('.SendMessage')
            channel.leave()
        }
    })
</script>

<template>
    <div class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
        <!-- AVATAR -->
        <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
        <!-- FULLNAME -->
        <div>
            <p>Room ID: {{ roomId }}</p>
            <div class="flex items-center gap-2">
                <p class="text-gray-400">{{ previewMessage }}</p>
                <!-- <p class="text-gray-400">Preview mes... 00:00</p> -->
                <!-- <div class="size-3 rounded-full bg-green-400"></div> -->
            </div>
        </div>
    </div>
</template>
