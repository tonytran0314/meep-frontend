<script setup>
    
</script>

<template>
    <div class="w-full h-12 flex justify-between">
        <!-- CHATTING PERSON OR GROUP INFO -->
        <div class="flex items-center gap-2">
            <!-- AVATAR -->
            <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
            <!-- PERSON OR GROUP NAME -->
            <p class="font-bold">Trần Gia Huy: {{ currentRoomId }}</p>
        </div>
        <!-- ACTIONS: VOICE CALL, VIDEO CALL -->
        <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
            <font-awesome-icon :icon="['fas', 'video']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
        </div>
    </div>
</template>
