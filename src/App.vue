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
  <form @submit.prevent="sendMessage" class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <input v-model="messageContent" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
  
  <div class="bg-red-300">
    <p>Latest message: {{ latestMessage }}</p>
  </div>
</template>
