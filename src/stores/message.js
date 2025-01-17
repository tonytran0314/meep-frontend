import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const messageStore = defineStore('message', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const newMessage = ref(null)
    const messages = ref([
        {
            "content": "this is a chat line #1"
        },
        {
            "content": "this is a chat line #2"
        },
        {
            "content": "this is a chat line #3"
        },
        {
            "content": "this is a chat line #4"
        },
        {
            "content": "this is a chat line #5"
        }
    ])


    /* -------------------------------------------------------------------------- */
    /*                                     METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const send = async () => {
        try {
            await api.post('/messages', {
                'room_id': 1,
                'user_id': 2,
                'content': newMessage.value
            })
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
                "content": newMessage.value 
            }
        )
    }

    const get = async (roomId) => {
        try {
            const res = await api.get(`/rooms/${roomId}`)
            messages.value = res.data.data
            
            // the messages.value could be empty here
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