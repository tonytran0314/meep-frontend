<script setup>
    import { modalStore } from '@/stores/modal'
    import { themeStore } from '@/stores/theme'
    import { ref } from 'vue'

    import MenuModal from '@/components/modals/MenuModal.vue'

    const modal = modalStore()
    const theme = themeStore()
    const selectedTheme = localStorage.getItem('theme') ? ref(localStorage.getItem('theme')) : ref('dark')

    const back = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }

    const updateThemeMode = () => {
        theme.switchTo(selectedTheme.value)
    }
</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <p>Theme</p>
            <select v-model="selectedTheme" @change="updateThemeMode" class="bg-white border dark:bg-gray-700 p-2 rounded-lg">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    </div>
    <div @click="back" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600 text-white">Back</div>
</template>
