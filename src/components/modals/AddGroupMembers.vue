<script setup>
    import { storeToRefs } from 'pinia'
    import { api } from '@/services/axios.js'
    import { roomStore } from '@/stores/room'
    import { friendStore } from '@/stores/friend'
    import { ref, computed, onMounted } from 'vue'
    import { modalStore } from '@/stores/modal'
    import { useToast } from "vue-toastification"

    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

    const newMemberIdsOfExistedGroup = ref([])

    const toast = useToast()
    const modal = modalStore()
    const friend = friendStore()
    const room = roomStore()
    const { friendList } = storeToRefs(friend)
    const { currentRoom } = storeToRefs(room)

    const markedFriends = computed(() => {
        return friendList.value?.map(friend => ({
            ...friend,
            inGroup: currentRoom.value.members.some(member => member.id === friend.id) || newMemberIdsOfExistedGroup.value.includes(friend.id)
        }))
    })

    const addUserToGroup = (userId) => {
        if (!newMemberIdsOfExistedGroup.value.includes(userId)) {
            newMemberIdsOfExistedGroup.value.push(userId)
        }
    }


    const updateGroupMembers = async () => {
        try {
            await api.put(`/groups/${currentRoom.value.id}`, {
                'newMemberIds': newMemberIdsOfExistedGroup.value
            })
            modal.close()
            toast.success('Added new members to group')
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(async () => {
        if(friendList.value === null) {
            await friend.getFriendList()
        }
    })
</script>

<template>
    <div class="space-y-4 flex flex-col">
        <p>Friends list:</p>
        <div class="h-72 overflow-auto space-y-4">
            <div v-for="friend in markedFriends" :key="friend.id" class="flex justify-between">
                <p>{{ friend.name }}</p>
                <font-awesome-icon v-if="friend.inGroup" :icon="['fas', 'check']" class="bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full" />
                <font-awesome-icon v-else @click="addUserToGroup(friend.id)" :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
            </div>
        </div>
        <PrimaryButton @click="updateGroupMembers">Add</PrimaryButton>
    </div>
</template>
