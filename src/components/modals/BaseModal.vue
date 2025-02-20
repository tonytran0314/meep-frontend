<script setup>
    import { modalStore } from '@/stores/modal'
    import { onMounted, onUnmounted } from 'vue'
    import CloseModalButton from '@/components/modals/CloseButton.vue'

    const modal = modalStore()
    
    const keydownListener = (event) => {
        if (event.key === "Escape") modal.close();
    }

    onMounted(() => {
        document.addEventListener("keydown", keydownListener);
    });

    onUnmounted(() => {
        document.removeEventListener("keydown", keydownListener);
    });
</script>

<template>
    <Teleport to="body">
  
        <Transition name="modal-fade">
        
            <div 
                v-if="modal.content" 
                @click.self="modal.close" 
                aria-modal="true" 
                role="dialog" 
                tabindex="-1"
                class="fixed top-0 left-0 z-[999] w-full h-dvh bg-black bg-opacity-80 flex items-center justify-center">

                <div class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-900 dark:text-blue-50 rounded-2xl p-6 space-y-6">
                    <div class="flex items-center gap-40 justify-between">
                        <p class="font-bold text-2xl">{{ modal.props.title }}</p>
                        <CloseModalButton />
                    </div>
                    <component :is="modal.content" v-bind="modal.props" />
                </div>

            </div>

        </Transition>
  
    </Teleport>
</template>

<style scoped>
    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: 0.25s ease all;
    }
</style>
