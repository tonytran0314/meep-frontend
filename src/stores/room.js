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

    const open = (roomId) => {
        router.push({ name: 'Chat', params: { roomId: roomId } })
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        list,
        get,
        open
    }

})