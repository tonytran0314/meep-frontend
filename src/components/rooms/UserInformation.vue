<script setup>
    import { profileStore } from '@/stores/profile'
    import { modalStore } from '@/stores/modal'
    import LogoutModal from '@/components/modals/LogoutModal.vue'

    const profile = profileStore()
    const modal = modalStore()

    const logoutConfirm = () => {
        modal.open(LogoutModal)
    }

    await profile.get()
</script>

<template>
    <div @click="logoutConfirm" class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
        <!-- AVATAR -->
        <div class="size-12 rounded-full bg-teal-600 shadow-lg"></div>
        <!-- FULLNAME -->
        <div>
            <p class="text-lg">{{ profile.name }}</p> 
            <div class="flex items-center gap-2">
                <p class="text-gray-400">Online status</p>
                <div class="size-3 rounded-full bg-green-400"></div>
            </div>
        </div>
    </div>
</template>
