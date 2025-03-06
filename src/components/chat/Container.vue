<script setup>
    import ChatHeader from '@/components/chat/Header.vue'
    import ChatBody from '@/components/chat/Body.vue'
    import ChatFooter from '@/components/chat/Footer.vue'
    import AddFriendModal from '@/components/modals/AddFriendModal.vue'

    import { modalStore } from '@/stores/modal'
    import { roomStore } from '@/stores/room'
    import { storeToRefs } from 'pinia'

    const modal = modalStore()
    const room = roomStore()

    const openAddFriendModal = () => {
        modal.open(AddFriendModal, { title: 'Add Friends' })
    }

    const { isValidRoomId } = storeToRefs(room)
</script>

<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex flex-1">
        <div v-if="!isValidRoomId" class="m-auto flex flex-col gap-4 text-center">
            <img src="@/assets/no-room.svg" alt="No Room Illustrator" class="size-96">
            <div>
                <p>Invalid Room ID</p>
            </div>
        </div>
        <div v-else-if="room.list.length > 0" class="flex flex-col flex-1 gap-4">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
        <div v-else class="m-auto flex flex-col gap-4 text-center">
            <img src="@/assets/no-room.svg" alt="No Room Illustrator" class="size-96">
            <div>
                <p>You currently don't have any conversations.</p>
                <p>Please feel free to add some friends to start chatting.</p>
            </div>
            <div @click="openAddFriendModal" class="bg-teal-600 flex justify-center items-center rounded-lg text-white cursor-pointer py-3 gap-4 hover:bg-teal-500">
                <font-awesome-icon :icon="['fas', 'user-plus']" class="size-6" />
                <p>Find friends</p>
            </div>
        </div>
    </div>
</template>
