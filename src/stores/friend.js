import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const friendStore = defineStore('friend', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const foundFriends = ref(null)
    const searchKeyword = ref(null)
    const searching = ref(false)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const search = async () => {
        try {
            searching.value = true
            const result = await api.get(`/search-friends?username=${searchKeyword.value}`)
            foundFriends.value = result.data.data
            searching.value = false
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
        foundFriends,
        searchKeyword,
        searching,
        search,
    }

})