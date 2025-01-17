<script setup>
    import { modalStore } from '@/stores/modal'
    import MenuModal from '@/components/modals/MenuModal.vue'

    const modal = modalStore()

    const back = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }
</script>

<template>
    <div class="bg-red-300">
        <div class="flex justify-between">
            <p>Theme</p>
            <!-- <select v-model="selectedTheme" @change="updateThemeMode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select> -->
            <select>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    </div>
    <div @click="back" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600 text-white">Back</div>
</template>
