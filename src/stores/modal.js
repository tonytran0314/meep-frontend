import { defineStore } from "pinia"
import { ref, markRaw } from "vue"

export const modalStore = defineStore('modal', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const content = ref(null)
    const props = ref({})
    const body = document.body


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const open = (modal, modalProps = {}) => {
        blockScrolling()
        content.value = markRaw(modal)
        props.value = modalProps
    }

    const close = () => {
        allowScrolling()
        content.value = null
        props.value = {}
    }



    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const blockScrolling = () => {
        if (body) body.style.overflow = "hidden"
    }

    const allowScrolling = () => {
        if (body) body.style.overflow = "auto"
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        content,
        props,
        open,
        close
    }

})