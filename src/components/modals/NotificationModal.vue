<script setup>
    import FriendRequest from '@/components/notifications/FriendRequest.vue'
</script>

<template>
    <!-- currently, there are 2 types of notifications: friend request and friend accept -->
    <div class="h-96 space-y-3 overflow-auto">
        <!-- notification items -->
        <FriendRequest :fullname="'Trần Gia Huy'" />
        <FriendRequest :fullname="'Gia Huy'" />
    </div>
</template>
