import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'
import { useToast } from "vue-toastification"
import { modalStore } from "@/stores/modal"


export const groupStore = defineStore('group', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const toast = useToast()
    const modal = modalStore()

    const name = ref(null)
    const members = ref([])
    const error = ref(null)
    const isLoading = ref(false)


    /* -------------------------------------------------------------------------- */
    /*                                     METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const create = async () => {
        try {
            await api.post('/groups', {
                name: name.value,
                memberIds: members.value
            })

            modal.close()
            toast.success('Group created successfully!')
        } catch (error) {
            toast.error('Failed to create group. Please try again!')
        }
    }

    const addUserToGroup = (userId) => {
        members.value.push(userId)
    }

    const removeUserFromGroup = (userId) => {
        const index = members.value.indexOf(userId)
        if (index > -1) {
            members.value.splice(index, 1);
        }
    }
    


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        name,
        members,
        error,
        isLoading,
        create,
        addUserToGroup,
        removeUserFromGroup
    }

})