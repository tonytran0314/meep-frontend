<script setup>
    import { messageStore } from '@/stores/message'
    import { onMounted } from 'vue';
    
    const message = messageStore()
    
    const sendMessage = () => {
        message.send()
    }

    onMounted(() => {
        window.Echo.channel('public-chat')
        .listen('SendMessage', (event) => {
            console.log('Message received: ', event);
        })
    })
</script>

<template>
    <div class="w-full h-screen bg-blue-50 dark:bg-gray-900 p-6 flex gap-6">
        <!-- LEFT COLUMN -->
        <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-80 p-4 flex flex-col gap-8">
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
                <p class="text-lg text-gray-500">Conversations</p>
                
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
        <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full flex-1"></div>
    </div>
</template>
