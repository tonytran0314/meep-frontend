<script setup>
    import { modalStore } from '@/stores/modal'
    import { authStore } from '@/stores/authentication'
    import MenuModal from '@/components/modals/MenuModal.vue'

    const modal = modalStore()
    const auth = authStore()

    const back = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }

    const logout = async () => {
        await auth.logout()
        modal.close()
    }
</script>

<template>
    <div class="space-y-8">
        <div>Are you sure you want to log out?</div>
        <div class="flex justify-end gap-4 text-sm text-white">
            <div @click="back" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600">Back</div>
            <div @click="logout" class="bg-teal-600 rounded-lg px-6 py-2 cursor-pointer hover:bg-teal-500">Logout</div>
        </div>
    </div>
</template>
