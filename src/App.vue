<script setup>
import { api } from '@/services/axios.js'
import { ref } from 'vue';
import Echo from 'laravel-echo';

import Pusher from 'pusher-js';

const latestMessage = ref(null)
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

window.Echo.channel('public-chat').listen('.SendMessage', (event) => {
  latestMessage.value = event.message
  console.log('Message Received: ' + event.message)
})

const messageContent = ref(null)
const sendMessage = async () => {
  try {
    const res = await api.post('/send-message', { content: messageContent.value })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <router-view></router-view>
</template>
