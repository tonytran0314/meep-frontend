import { defineStore } from "pinia"
import { ref } from "vue"
import { api } from '@/services/axios.js'

export const friendStore = defineStore('friend', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const friendList = ref(null)
    const foundFriends = ref(null)
    const searchKeyword = ref(null)
    const searching = ref(false)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */

    const getFriendList = async () => {
        try {
            const res = await api.get('/list-friends')
            friendList.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

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

    const sendFriendRequestTo = async (userId) => {
        try {
            await api.post('/add-friend', { userId })
        } catch (error) {
            console.log(error)
        }
    }

    const markFriendAsAdded = (userId) => {
        foundFriends.value.forEach(friend => {
            if(friend.id === userId) {
                friend.markAsAdded = true
            }
        });
    }

    const rejectAddFriendRequest = async (addFriendRequest) => {
        try {
            await api.post('/reject-friend', 
                { 
                    senderId: addFriendRequest.senderId,
                    receiverId: addFriendRequest.receiverId
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    const acceptAddFriendRequest = async (addFriendRequest) => {
        try {
            await api.post('/accept-friend', 
                { 
                    senderId: addFriendRequest.senderId,
                    receiverId: addFriendRequest.receiverId
                }
            )
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
        friendList,
        foundFriends,
        searchKeyword,
        searching,
        search,
        sendFriendRequestTo,
        markFriendAsAdded,
        rejectAddFriendRequest,
        acceptAddFriendRequest,
        getFriendList
    }

})