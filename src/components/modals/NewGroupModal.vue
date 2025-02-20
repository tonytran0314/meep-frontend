<script setup>
    import { reactive } from 'vue'

    import TextField from '@/components/form/TextField.vue'
    import LoadingButton from '@/components/buttons/LoadingButton.vue'
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

    const newGroup = reactive({
        name: null,
        error: null, // temp
        isLoading: false, // temp
    })

    const createGroup = () => {
        console.log('created')
    }
</script>

<template>
    <form @submit.prevent="createGroup" class="space-y-4 md:space-y-6">
        <TextField
            v-model="newGroup.name"
            label="Group name:"
            type="text"
            name="name"
            placeholder="New group name..." 
            :error="newGroup.error"
        />

        <div class="space-y-4">
            <p>Friends list:</p>
            <div class="h-72 overflow-auto space-y-4">
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'check']" class="cursor-pointer bg-teal-600 size-4 p-2 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
                <div class="flex justify-between">
                    <p>User full name</p>
                    <font-awesome-icon :icon="['fas', 'plus']" class="cursor-pointer bg-gray-200 dark:bg-gray-700 size-4 p-2 hover:bg-teal-600 dark:hover:bg-teal-600 flex justify-center items-center rounded-full" />
                </div>
            </div>
        </div>

        <LoadingButton v-if="newGroup.isLoading" class="w-full" />
        <PrimaryButton v-else type="submit" class="w-full">Create</PrimaryButton>
    </form>
</template>
