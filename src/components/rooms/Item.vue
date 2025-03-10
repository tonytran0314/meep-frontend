<script setup>
    import { ref, onMounted } from 'vue'

    const props = defineProps({
        name: String,
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
</script>

<template>
    <div class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
        <!-- AVATAR -->
        <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
        <!-- FULLNAME -->
        <div class="flex flex-col gap-2 flex-1">
            <p class="line-clamp-1">{{ name }}</p> 
            <div class="flex items-center gap-2">
                <p class="text-gray-400 line-clamp-1">{{ previewMessage || 'Let say hi to your new friend' }}</p>
                <!-- <p class="text-gray-400">Preview mes... 00:00</p> -->
                <!-- <div class="size-3 rounded-full bg-green-400"></div> -->
            </div>
        </div>
    </div>
</template>
