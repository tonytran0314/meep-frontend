<script setup>
    import { reactive } from 'vue'

    import TextField from '@/components/form/TextField.vue'
    import LoadingButton from '@/components/buttons/LoadingButton.vue'
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import FriendList from '@/components/friends/List.vue'

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

        <Suspense>
            <FriendList />
            <template #fallback>
                loading friend list...
            </template>
        </Suspense>

        <LoadingButton v-if="newGroup.isLoading" class="w-full" />
        <PrimaryButton v-else type="submit" class="w-full">Create</PrimaryButton>
    </form>
</template>
