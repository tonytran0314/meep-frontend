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
    // test comment
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

    // chỗ này cũng await suspense luôn để không bị hiện chữ let say hi to
    message.get(currentRoomId.value)
</script>

<template>
    <div class="flex flex-1">
        <div v-if="messages.length"  class="flex flex-col-reverse w-full overflow-y-auto gap-0.5 px-2">
            <!-- CHAT LINES -->
            <div v-for="message in messages" 
                class=" px-4 py-2 max-w-[75%] rounded-full"
                :class="(message.user_id === id) ? 'self-end bg-teal-600' : 'self-start bg-gray-200 dark:bg-gray-700'"
            >
                {{ message.content }}
            </div> 
        </div>
        <div v-else class="m-auto flex flex-col items-center gap-4">
            <div class="size-20 rounded-full bg-gray-500 shadow-lg"></div>
            <div class="text-center">
                <p>`User.fullname` and you are friend now</p>
                <p>Let say hi to `User.name`</p>
            </div>
        </div>
    </div>
</template>
