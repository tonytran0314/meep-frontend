import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'
import { useRouter } from 'vue-router'

export const roomStore = defineStore('room', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const router = useRouter()
    const list = ref([])
    const currentRoom = ref(null)


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
            router.push({ name: 'Chat', params: { roomId: roomId } })
            
            const res = await api.get(`/rooms/${roomId}`)
            currentRoom.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        list,
        currentRoom,
        get,
        open
    }

})