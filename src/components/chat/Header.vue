<script setup>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { roomStore } from '@/stores/room'
    import { modalStore } from '@/stores/modal'
    import { onClickOutside } from '@vueuse/core'
    import { sidebarStore } from '@/stores/sidebar'

    import AddGroupMembers from '@/components/modals/AddGroupMembers.vue'
    
    const modal = modalStore()
    const room = roomStore()
    const sidebar = sidebarStore()
    const { currentRoom } = storeToRefs(room)

    const isGroupMenuOpen = ref(false)
    const groupMenu = ref(null)

    const toggleGroupMenu = () => {
        isGroupMenuOpen.value = !isGroupMenuOpen.value
    }

    onClickOutside(groupMenu, () => {
        isGroupMenuOpen.value = false
    })

    const openAddGroupMembersModal = () => {
        modal.open(AddGroupMembers, { title: 'Add members to group' })
    }

    const showSideBar = () => {
        sidebar.show()
    }
</script>

<template>
    <div v-if="currentRoom" class="w-full h-12 flex justify-between items-center">
        <div class="flex items-center gap-4">
            <!-- SHOW SIDE BAR ICON -->
            <font-awesome-icon @click="showSideBar" :icon="['fas', 'bars']" class="size-5 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-full" />

            <!-- ROOM INFO -->
            <div class="flex items-center gap-2">
                <!-- AVATAR -->
                <div class="size-12 rounded-full bg-gray-500 shadow-lg"></div>
                <!-- PERSON OR GROUP NAME -->
                <p class="font-bold">{{ currentRoom.name }}</p>
            </div>
        </div>
        <!-- ACTIONS: VOICE CALL, VIDEO CALL -->
        <!-- <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
            <font-awesome-icon :icon="['fas', 'video']" class="text-gray-600 dark:text-gray-400 size-5 cursor-pointer hover:bg-gray-200 rounded-full p-2 dark:hover:bg-gray-700" />
        </div> -->
        <div v-if="currentRoom.isGroup" class="relative" ref="groupMenu">
            <font-awesome-icon @click="toggleGroupMenu" :icon="['fas', 'ellipsis']" class="size-5 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-blue-50" />
            <div v-if="isGroupMenuOpen" class="bg-white dark:bg-gray-600 text-gray-900 dark:text-blue-50 absolute right-0 rounded-lg flex flex-col min-w-44 shadow-lg">
                <!-- <div class="rounded-lg cursor-pointer flex justify-center items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-500 p-3">
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                    <p>Edit group info</p>
                </div> -->
                <div @click="openAddGroupMembersModal" class="rounded-lg cursor-pointer flex justify-center items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-500 p-3">
                    <font-awesome-icon :icon="['fas', 'user-plus']" />
                    <p>Add members</p>
                </div>
            </div>
        </div>
    </div>
</template>
