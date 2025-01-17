<script setup>
    import ChatHeader from '@/components/chat/Header.vue'
    import ChatBody from '@/components/chat/Body.vue'
    import ChatFooter from '@/components/chat/Footer.vue'
</script>

<template>
    <div class="size-20 bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full flex flex-col flex-1 p-4 gap-4">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>
</template>
