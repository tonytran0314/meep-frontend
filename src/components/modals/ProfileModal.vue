<script setup>
    import { modalStore } from '@/stores/modal'
    import MenuModal from '@/components/modals/MenuModal.vue'
    
    const modal = modalStore()
    
    const back = () => {
        modal.open(MenuModal, { title: 'Menu' })
    }
</script>

<template>
    <div>profile modal</div>
    
    <div @click="back" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600 text-white">Back</div>
</template>
