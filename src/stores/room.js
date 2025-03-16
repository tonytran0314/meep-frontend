import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'
import { useRouter } from 'vue-router'
import { profileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'

export const roomStore = defineStore('room', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const router = useRouter()
    const list = ref([])
    const currentRoom = ref(null)
    const isValidRoomId = ref(true)
    const privateChannels = ref({})
    const { id } = storeToRefs(profileStore())


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const result = await api.get('/rooms')
            list.value = result.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const open = async (roomId) => {
        try {
            isValidRoomId.value = true
            router.push({ name: 'Chat', params: { roomId: roomId } })
            
            const res = await api.get(`/rooms/${roomId}`)
            currentRoom.value = res.data.data
        } catch (error) {
            if (error.response && error.response.status === 403) {
                const firstRoom = list.value.length > 0 ? list.value[0].id : null;
                currentRoom.value = null;
                router.push({ name: 'Chat', params: { roomId: firstRoom } });
                isValidRoomId.value = false
            }
        }
    }

    const listenToRoom = (roomId) => {
        if (!privateChannels.value[roomId]) {
            privateChannels.value[roomId] = window.Echo.private(`room.${roomId}`)
            privateChannels.value[roomId].listen('.SendMessage', (event) => {
                if (event.message.user_id !== id.value && currentRoom.value.id == roomId) {
                    currentRoom.value.messages.unshift({
                        content: event.message.content
                    })
                }
            })
        }
    }

    const stopListening = (roomId) => {
        if (privateChannels.value[roomId]) {
            privateChannels.value[roomId].stopListening('.SendMessage')
            delete privateChannels.value[roomId]
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        list,
        currentRoom,
        isValidRoomId,
        get,
        open,
        listenToRoom,
        stopListening
    }

})