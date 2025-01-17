<script setup>
    import { modalStore } from '@/stores/modal'
    import ProfileModal from '@/components/modals/ProfileModal.vue'
    import SettingsModal from '@/components/modals/SettingsModal.vue'
    import LogoutModal from '@/components/modals/LogoutModal.vue'
    
    const modal = modalStore()

    const openProfile = () => {
        modal.open(ProfileModal, { title: 'Profile' })
    }

    const openSettings = () => {
        modal.open(SettingsModal, { title: 'Settings' })
    }
    
    const confirmLogout = () => {
        modal.open(LogoutModal, { title: 'Logout' })
    }
</script>

<template>
    <div class="space-y-1">
        <div @click="openProfile" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-6 py-3">
            <font-awesome-icon :icon="['fas', 'user']" />
            <p>Profile</p>
        </div>
        <div @click="openSettings" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-6 py-3">
            <font-awesome-icon :icon="['fas', 'gear']" />
            <p>Settings</p>
        </div>
        <div @click="confirmLogout" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-6 py-3">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
            <p>Logout</p>
        </div>
    </div>
</template>
