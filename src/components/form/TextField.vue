<script setup>
    import Input from '@/components/form/Input.vue'
    import ErrorAlert from '@/components/form/ErrorAlert.vue'
    import Label from '@/components/form/FieldLabel.vue'

    const model = defineModel()
    const props = defineProps({
        label: String,
        name: String,
        type: String,
        placeholder: String,
        error: String
    })
</script>

<template>
    <div class="flex flex-col gap-1">
        <div>
            <Label :name="name">{{ label }}</Label>
            <Input
                v-model="model"
                :name="name"
                :type="type"
                :placeholder="placeholder"
            />
        </div>
        <ErrorAlert>{{ error }}</ErrorAlert>
    </div>
</template>
