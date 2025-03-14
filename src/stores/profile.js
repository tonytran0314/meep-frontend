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
    const avatar = ref(null)
    const background = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const result = await api.get('/profile')
            id.value = result.data.data.id
            name.value = result.data.data.name
            username.value = result.data.data.username
            avatar.value = result.data.data.avatar
            background.value = result.data.data.background
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
        avatar,
        background,
        get,
    }

})