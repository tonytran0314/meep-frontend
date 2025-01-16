<script setup>
    
</script>

<template>
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
</template>
