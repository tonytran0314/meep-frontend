import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'
import { profileStore } from '@/stores/profile'

export const messageStore = defineStore('message', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const newMessage = ref(null)
    const messages = ref([])
    const profile = profileStore()


    /* -------------------------------------------------------------------------- */
    /*                                     METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const send = async (message) => {
        try {
            await api.post('/messages', message)
        } catch (error) {
            console.log(error)
        }
    }
    
    const clearNewMessageContent = () => {
        newMessage.value = null
    }

    const addNewMessageToMessageListTemporary = () => {
        messages.value.unshift(
            {
                "user_id": profile.id,
                "content": newMessage.value 
            }
        )
    }

    const get = async (roomId) => {
        try {
            const res = await api.get(`/rooms/${roomId}`)
            messages.value = res.data.data
        } catch (error) {
            // could receive error 403 here if the user is accessing an invalid room (user is not in the room, room is not exist)
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
        newMessage,
        messages,
        send,
        clearNewMessageContent,
        addNewMessageToMessageListTemporary,
        get
    }

})