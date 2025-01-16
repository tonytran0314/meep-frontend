<script setup>
    import Rooms from '@/components/rooms/Container.vue'
    import Chat from '@/components/chat/Container.vue'
</script>

<template>
    <div class="w-full h-screen bg-blue-50 dark:bg-gray-900 p-6 flex gap-6">
        <!-- LEFT COLUMN -->
        <Rooms />

        <!-- RIGHT COLUMN -->
        <Chat />
    </div>
</template>
