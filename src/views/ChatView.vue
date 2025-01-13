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
    <div>this is chat view</div>
    <div>
        <p>chat form</p>
        <form @submit.prevent="sendMessage">
            <input type="text" class="border-2" />
            <button type="submit" class="bg-teal-600 text-white">Send</button>
        </form>
    </div>
</template>
