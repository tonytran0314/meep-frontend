<script setup>
    import { modalStore } from '@/stores/modal'
    import LogoutModal from '@/components/modals/LogoutModal.vue'
    
    const modal = modalStore()

    const confirmLogout = () => {
        modal.open(LogoutModal, { title: 'Logout' })
    }
</script>

<template>
    <div class="space-y-1">
        <div @click="confirmLogout" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-4 py-3">
            <font-awesome-icon :icon="['fas', 'user']" />
            <p>Profile</p>
        </div>
        <div @click="confirmLogout" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-4 py-3">
            <font-awesome-icon :icon="['fas', 'gear']" />
            <p>Settings</p>
        </div>
        <div @click="confirmLogout" class="hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 px-4 py-3">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
            <p>Logout</p>
        </div>
    </div>
</template>
