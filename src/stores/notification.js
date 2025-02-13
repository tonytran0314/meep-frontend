import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const notificationStore = defineStore('notification', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const list = ref([])
    const newNotificationIndicator = ref(false)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const res = await api.get('/notifications')
            list.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const addToList = (notificationObject) => {
        list.value.unshift(notificationObject)
    }

    const removeFromList = (notificationObject) => {
        list.value = list.value.filter(object => JSON.stringify(object) !== JSON.stringify(notificationObject))
    }

    const markAsSeen = async () => {
        try {
            await api.post('/seen-notifications', { notifications: list.value })
        } catch (error) {
            console.log(error)
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        list,
        newNotificationIndicator,
        get,
        addToList,
        removeFromList,
        markAsSeen
    }

})