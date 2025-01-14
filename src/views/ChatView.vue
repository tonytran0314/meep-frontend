<script setup>
    import { messageStore } from '@/stores/message'
    
    const message = messageStore()
    
    const sendMessage = () => {
        message.send()
    }

    // listen to the new message
    window.Echo.channel('public-chat').listen('.SendMessage', (event) => {
        // latestMessage.value = event.message
        // console.log('Message Received: ' + event.message)
    })
</script>

<template>
    <div class="w-full h-screen bg-blue-50 dark:bg-gray-900 p-6 flex gap-6">
        <!-- LEFT COLUMN -->
        <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4 flex flex-col gap-8">
            <!-- USER INFO -->
            <div class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                <!-- AVATAR -->
                <div class="size-12 rounded-full bg-teal-600 shadow-lg"></div>
                <!-- FULLNAME -->
                <div>
                    <p class="text-lg">Trần Gia Huy</p>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">Online status</p>
                        <div class="size-3 rounded-full bg-green-400"></div>
                    </div>
                </div>
            </div>

            <!-- CONVERSATIONS -->
            <div class="flex-1 overflow-auto space-y-4">
                <p class="text-lg text-gray-400">Conversations</p>
                
                <!-- CONVERSATION ITEMS -->
                <div>
                    <!-- START LOOP -->
                    <div class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                        <!-- AVATAR -->
                        <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                        <!-- FULLNAME -->
                        <div>
                            <p>Trần Gia Huy</p>
                            <div class="flex items-center gap-2">
                                <p class="text-gray-400">Preview mes... 00:00</p>
                                <div class="size-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                    </div>
                    <!-- END LOOP -->

                    <div class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                        <!-- AVATAR -->
                        <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                        <!-- FULLNAME -->
                        <div>
                            <p>Trần Gia Huy</p>
                            <div class="flex items-center gap-2">
                                <p class="text-gray-400">Online status</p>
                                <div class="size-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full flex flex-col flex-1 p-4 gap-4">
            <!-- CHAT HEADER -->
            <div class="w-full h-12">
                <!-- CHATTING PERSON OR GROUP INFO -->
                <div class="flex items-center gap-2">
                    <!-- AVATAR -->
                    <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                    <!-- PERSON OR GROUP NAME -->
                    <p>Trần Gia Huy</p>
                </div>
                <!-- ACTIONS: VOICE CALL, VIDEO CALL -->
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <!-- CHAT BODY -->
            <div class="flex flex-col-reverse w-full flex-1 overflow-y-auto gap-0.5 pr-2">
                <!-- CHAT LINE -->
                <!-- for the others text -->
                <div class="bg-gray-200 px-4 py-2 max-w-[75%] rounded-2xl self-start">this is a chat line 1</div> 
                <div class="bg-gray-200 px-4 py-2 max-w-[75%] rounded-2xl self-start">this is a chat line 2</div> 
                <!-- for my text -->
                <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 3</div>
                <div class="bg-teal-600 text-white max-w-[75%] px-4 py-2 rounded-2xl self-end">this is a chat line 4</div>
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
                        <input type="text" class="h-full border-2 rounded-full flex-1 px-4" placeholder="Aa...">
                    </div>
                    <button type="submit" class="flex justify-center items-center">
                        <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-teal-600 size-5 hover:bg-teal-100 p-2 rounded-full" />
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
