import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'
import { profileStore } from '@/stores/profile'
import { roomStore } from '@/stores/room'

export const messageStore = defineStore('message', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const newMessage = ref(null)
    const profile = profileStore()
    const room = roomStore()


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
        room.currentRoom.messages.unshift(
            {
                "user_id": profile.id,
                "content": newMessage.value 
            }
        )
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        newMessage,
        send,
        clearNewMessageContent,
        addNewMessageToMessageListTemporary
    }

})