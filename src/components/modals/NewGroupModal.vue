<script setup>
    import { reactive } from 'vue'
    import { storeToRefs } from 'pinia'
    import { groupStore } from '@/stores/group'

    import TextField from '@/components/form/TextField.vue'
    import LoadingButton from '@/components/buttons/LoadingButton.vue'
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import FriendList from '@/components/friends/List.vue'

    const group = groupStore()
    const { name, members, error, isLoading } = storeToRefs(group)

    const createGroup = () => {
        group.create()
    }
</script>

<template>
    <form @submit.prevent="createGroup" class="space-y-4 md:space-y-6">
        <TextField
            v-model="name"
            label="Group name:"
            type="text"
            name="name"
            placeholder="New group name..." 
            :error="error"
        />

        <Suspense>
            <FriendList />
            <template #fallback>
                loading friend list...
            </template>
        </Suspense>

        <LoadingButton v-if="isLoading" class="w-full" />
        <PrimaryButton v-else type="submit" class="w-full">Create</PrimaryButton>
    </form>
</template>
