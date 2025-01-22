import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const profileStore = defineStore('profile', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const id = ref(null)
    const name = ref(null)
    const username = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const result = await api.get('/profile')
            id.value = result.data.data.id
            name.value = result.data.data.name
            username.value = result.data.data.username
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
        id,
        name,
        username,
        get,
    }

})