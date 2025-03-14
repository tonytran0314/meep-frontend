<script setup>
    import { modalStore } from '@/stores/modal'
    import { profileStore } from '@/stores/profile'
    import { storeToRefs } from 'pinia'

    import MenuModal from '@/components/modals/MenuModal.vue'
    import TextField from '@/components/form/TextField.vue'
    
    const modal = modalStore()
    const profile = profileStore()
    const { name, username } = storeToRefs(profile)
    
    const back = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }
</script>

<template>
    <div class="w-auto space-y-16">
        <div class="relative">
            <div class="bg-orange-300 w-full h-32 rounded-xl">
                <img :src="profile.background" class="w-full h-32 rounded-xl" alt="User background">
            </div>
            <div class="bg-teal-600 size-20 sm:size-24 md:size-28 rounded-full absolute -bottom-10 sm:-bottom-12 md:-bottom-14 left-1/2 transform -translate-x-1/2">
                <img :src="profile.avatar" class="rounded-full" alt="User avatar">
            </div>
        </div>
        <div class="space-y-4">
        <!-- missing v-model and error. Check login for more -->
            <TextField
                v-model="username"
                label="Username"
                type="text"
                name="username"
            />
            <TextField
                v-model="name"
                label="Fullname"
                type="text"
                name="fullname"
            />
        </div>
    </div>
    <div class="flex justify-end gap-4 text-sm text-white">
        <div @click="back" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600">Back</div>
        <!-- <div class="bg-teal-600 rounded-lg px-6 py-2 cursor-pointer hover:bg-teal-500">Save</div> -->
    </div>
</template>
