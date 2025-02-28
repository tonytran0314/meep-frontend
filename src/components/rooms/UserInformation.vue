<script setup>
    import { profileStore } from '@/stores/profile'
    import { modalStore } from '@/stores/modal'
    import MenuModal from '@/components/modals/MenuModal.vue'

    const profile = profileStore()
    const modal = modalStore()

    const openMenuModal = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }
</script>

<template>
    <div @click="openMenuModal" class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
        <!-- AVATAR -->
        <div class="size-12 rounded-full bg-teal-600 shadow-lg"></div>
        <!-- FULLNAME -->
        <div class="flex items-center">
            <p class="text-lg">{{ profile.name }}</p> 
            <!-- <div class="flex items-center gap-2">
                <p class="text-gray-400">Online status</p>
                <div class="size-3 rounded-full bg-green-400"></div>
            </div> -->
        </div>
    </div>
</template>
