<script setup>
    import { messageStore } from '@/stores/message'
    import { profileStore } from '@/stores/profile'
    import { storeToRefs } from 'pinia'
    import { watch, ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const message = messageStore()
    const profile = profileStore()
    const currentRoomId = ref(route.params.roomId)

    const { messages } = storeToRefs(message)
    const { id } = storeToRefs(profile)
    
    // listen to private room
    // if currentRoomId.value !== null (or '' or undefined), listen
    window.Echo.private(`room.${currentRoomId.value}`)
    .listen('.SendMessage', (event) => {
        if(event.message.user_id !== id.value) {
            console.log('Message Received: ' + event.message.content)
            console.log('Sender: ' + event.message.user_id)
            messages.value.unshift(
                {
                    "content": event.message.content 
                }
            )
        }
    })

    watch(() => route.params.roomId, (newRoomId) => {
        currentRoomId.value = newRoomId
        message.get(newRoomId)

        
        // listen to private room
        // if currentRoomId.value !== null (or '' or undefined), listen
        window.Echo.private(`room.${newRoomId}`)
        .listen('.SendMessage', (event) => {
            if(event.message.user_id !== id.value) {
                console.log('Message Received: ' + event.message.content)
                console.log('Sender: ' + event.message.user_id)
                messages.value.unshift(
                    {
                        "content": event.message.content 
                    }
                )
            }
        })
    })

    message.get(currentRoomId.value)
</script>

<template>
    <div class="flex flex-col-reverse w-full flex-1 overflow-y-auto gap-0.5 px-2">
        <!-- CHAT LINE -->
        <!-- for the others text -->
        <div v-for="message in messages" 
            class=" px-4 py-2 max-w-[75%] rounded-full"
            :class="(message.user_id === id) ? 'self-end bg-teal-600' : 'self-start bg-gray-200 dark:bg-gray-700'"
        >
            {{ message.content }}
        </div> 
        <!-- for my text -->
        <!-- <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 3</div>
        <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 4</div> -->
    </div>
</template>
