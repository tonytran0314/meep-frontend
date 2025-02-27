<script setup>
    import { watch, ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useRoute } from 'vue-router'
    import { roomStore } from '@/stores/room'
    import { messageStore } from '@/stores/message'
    import { profileStore } from '@/stores/profile'

    const route = useRoute()
    const room = roomStore()
    const message = messageStore()
    const profile = profileStore()
    const currentRoomId = ref(route.params.roomId)

    const { list } = storeToRefs(room)
    const { id } = storeToRefs(profile)
    const { messages } = storeToRefs(message)

    if(currentRoomId.value === '' || currentRoomId.value === null || currentRoomId.value === undefined || currentRoomId.value < 1 || !Number.isInteger(currentRoomId.value)) {
        currentRoomId.value = list.value[0].id
        room.open(currentRoomId.value)
    }
    
    // listen to private room
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
