<script setup>
  import BaseModal from '@/components/modals/BaseModal.vue'
  import { onMounted } from 'vue'
  import { themeStore } from '@/stores/theme'
  import { broadcast } from '@/services/axios.js'

  import Echo from 'laravel-echo'
  import Pusher from 'pusher-js'

  window.Pusher = Pusher

  window.Echo = new Echo({
      broadcaster: 'reverb',
      key: import.meta.env.VITE_REVERB_APP_KEY,
      wsHost: import.meta.env.VITE_REVERB_HOST,
      wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
      wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
      forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
      enabledTransports: ['ws', 'wss'],
      authEndpoint: import.meta.env.VITE_BROADCAST_URL,
      authorizer: (channel, options) => ({
        authorize: (socketId, callback) => {
          broadcast.post('/', {
            socket_id: socketId,
            channel_name: channel.name
          }).then(response => {
              callback(null, response.data)
          }).catch(error => {
              callback(error)
          })
        },
      })
  })

  onMounted(() => {
    const theme = themeStore()
    theme.initialize()
  })
</script>

<template>
  <router-view class="text-gray-900 dark:text-blue-50"></router-view>
  <BaseModal />
</template>
