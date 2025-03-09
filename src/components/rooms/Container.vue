<script setup>
    import UserInformation from '@/components/rooms/UserInformation.vue'
    import Activities from '@/components/rooms/Activities.vue'
    import RoomList from '@/components/rooms/List.vue'
    
    import { sidebarStore } from '@/stores/sidebar'
    import { storeToRefs } from 'pinia'

    const sidebar = sidebarStore()
    const { isSidebarVisible } = storeToRefs(sidebar)

    const hideSideBar = () => {
        sidebar.hide()
    }
</script>

<template>
    <!-- Rooms for Large screen -->
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-full w-96 p-4 hidden lg:flex flex-col gap-4">
        <UserInformation />
        <Activities />
        <RoomList />
    </div>

    <!-- Rooms on side bar for Mobile and Tablet screen -->
    <div class="absolute lg:hidden">
        <Transition name="fade-bg">
            <div 
                v-if="isSidebarVisible" 
                class="fixed inset-0 z-[98] bg-black bg-opacity-50 lg:hidden cursor-pointer"
                @click="hideSideBar">
            </div>
        </Transition>
        
        <Transition name="side-menu">
            <div 
                v-if="isSidebarVisible" 
                class="fixed z-[99] top-0 left-0 h-full w-96 bg-white dark:bg-gray-800 shadow-2xl flex flex-col justify-between lg:hidden"
                @click.stop>
                <div class="h-full w-96 p-4 flex flex-col gap-4">
                    <UserInformation />
                    <Activities />
                    <RoomList />
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .side-menu-enter-active, 
    .side-menu-leave-active {
        transition: .5s ease all;
    }

    .side-menu-enter-from,
    .side-menu-leave-to {
        transform: translate(-384px);
    }

    .side-menu-enter-to {
        transform: translate(0);
    }

    .fade-bg-enter-active,
    .fade-bg-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-bg-enter-from,
    .fade-bg-leave-to {
        opacity: 0;
    }
</style>