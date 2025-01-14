import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const messageStore = defineStore('message', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const newMessage = ref(null)
    const messages = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const send =  () => {
        console.log(newMessage.value)
        // try {
        //     await api.post('/send-message')
        // } catch (error) {
        //     console.log(error)
        // }
    }
    
    const clearNewMessageContent = () => {
        newMessage.value = null
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
        clearNewMessageContent
    }

})