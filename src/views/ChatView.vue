<script setup>
    import Rooms from '@/components/RoomsContainer.vue'
    import ChatSpace from '@/components/ChatSpaceContainer.vue'
</script>

<template>
    <div class="w-full h-screen bg-blue-50 dark:bg-gray-900 p-6 flex gap-6">
        <!-- LEFT COLUMN -->
        <Rooms />

        <!-- RIGHT COLUMN -->
        <ChatSpace />
    </div>
</template>
