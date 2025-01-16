<script setup>
    import { messageStore } from '@/stores/message'
    import { storeToRefs } from 'pinia'
    
    const message = messageStore()
    const { newMessage, messages } = storeToRefs(message)
    
    const sendMessage = () => {
        message.send()
        message.addNewMessageToMessageListTemporary()
        message.clearNewMessageContent()
    }

    // listen to the new message
    window.Echo.channel('public-chat').listen('.SendMessage', (event) => {
        console.log('Message Received: ' + event.message)
    })
</script>

<template>
    <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full flex flex-col flex-1 p-4 gap-4">
        <!-- CHAT HEADER -->
        <div class="w-full h-12 flex justify-between">
            <!-- CHATTING PERSON OR GROUP INFO -->
            <div class="flex items-center gap-2">
                <!-- AVATAR -->
                <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                <!-- PERSON OR GROUP NAME -->
                <p class="font-bold">Trần Gia Huy</p>
            </div>
            <!-- ACTIONS: VOICE CALL, VIDEO CALL -->
            <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-600 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2" />
                <font-awesome-icon :icon="['fas', 'video']" class="text-gray-600 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2" />
            </div>
        </div>
        <!-- CHAT BODY -->
        <div class="flex flex-col-reverse w-full flex-1 overflow-y-auto gap-0.5 px-2">
            <!-- CHAT LINE -->
            <!-- for the others text -->
            <div v-for="message in messages" class="bg-gray-200 px-4 py-2 max-w-[75%] rounded-2xl self-start">
                {{ message.content }}
            </div> 
            <!-- for my text -->
            <!-- <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 3</div>
            <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 4</div> -->
        </div>
        <!-- CHAT FOOTER -->
        <div class="w-full h-12 flex items-center gap-4">
            <!-- MEDIA -->
            <div class="flex gap-2">
                <font-awesome-icon :icon="['fas', 'image']" class="text-gray-600 size-5 cursor-pointer hover:bg-gray-200 p-2 rounded-full" />
                <font-awesome-icon :icon="['fas', 'note-sticky']" class="text-gray-600 size-5 cursor-pointer hover:bg-gray-200 p-2 rounded-full" />
            </div>
            <!-- MESSAGE INPUT & SEND BUTTON -->
            <form @submit.prevent="sendMessage" class="flex gap-2 flex-1">
                <div class="flex items-center flex-1">
                    <input v-model="newMessage" type="text" class="h-full border-2 rounded-full flex-1 px-4" placeholder="Aa...">
                </div>
                <button type="submit" class="flex justify-center items-center">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-teal-600 size-5 hover:bg-teal-100 p-2 rounded-full" />
                </button>
            </form>
        </div>
    </div>
</template>
