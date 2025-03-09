import { defineStore } from "pinia"
import { ref } from 'vue'

export const sidebarStore = defineStore('sidebar', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const isSidebarVisible = ref(false)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const show = () => {
        // prevent scrolling when opening navigation
        const body = document.body
        if (body) body.style.overflow = "hidden"

        isSidebarVisible.value = true
    }

    const hide = () => {
        // allow scrolling
        const body = document.body
        if (body) body.style.overflow = "auto"

        isSidebarVisible.value = false
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        isSidebarVisible,
        show,
        hide
    }

})