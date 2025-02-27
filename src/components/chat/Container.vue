<script setup>
    import ChatHeader from '@/components/chat/Header.vue'
    import ChatBody from '@/components/chat/Body.vue'
    import ChatFooter from '@/components/chat/Footer.vue'

    import { roomStore } from '@/stores/room'

    const room = roomStore()
</script>

<template>
    <!-- Chỗ này làm suspense await như bên cột trái (rooms), để tránh hiện chữ there is no room lúc chưa load xong -->
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex flex-1">
        <div v-if="room.list.length > 0" class="flex flex-col flex-1 gap-4">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
        <div v-else>
            there is no room
        </div>
    </div>
</template>
