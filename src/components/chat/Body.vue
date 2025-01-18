<script setup>
    import { messageStore } from '@/stores/message'
    import { storeToRefs } from 'pinia'
    import { watch, ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const message = messageStore()
    const currentRoomId = ref(route.params.roomId)
    const { messages } = storeToRefs(message)
    

    // listen to the new message
    window.Echo.channel('public-chat').listen('.SendMessage', (event) => {
        console.log('Message Received: ' + event.message)
        messages.value.unshift(
            {
                "content": event.message 
            }
        )
    })

    watch(() => route.params.roomId, (newRoomId) => {
        currentRoomId.value = newRoomId
        message.get(newRoomId)
    })

    message.get(currentRoomId.value)
</script>

<template>
    <div class="flex flex-col-reverse w-full flex-1 overflow-y-auto gap-0.5 px-2">
        <!-- CHAT LINE -->
        <!-- for the others text -->
        <div v-for="message in messages" class="bg-gray-200 dark:bg-gray-700 px-4 py-2 max-w-[75%] rounded-2xl self-start">
            {{ message.content }}
        </div> 
        <!-- for my text -->
        <!-- <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 3</div>
        <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 4</div> -->
    </div>
</template>
