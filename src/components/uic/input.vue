<script setup lang="ts">
// types
interface IPropsType {
    size?: string
    disabled?: boolean
    placeholder: string
    modelValue: string
    type?: string
}

// with defaults
const props = withDefaults(defineProps<IPropsType>(), {
    size: 'lg'
})

// emits
const emit = defineEmits(['click-append-icon', 'click-prepend-icon', 'update:modelValue'])

// methods
function goToEmits(name: string) {
    if (name === "append") {
        emit('click-append-icon')
    } else if (name === "prepend") {
        emit('click-prepend-icon')
    }
}
function changeModelValue(data: any) {
    emit('update:modelValue', data.target.value)
}

</script>

<template>
    <div :class="`flex justify-between items-center bg-[#F9FAFF] rounded-md border w-full border-[#E0E7FF] ${props.size}`">
        <div class="mr-1 icon" @click="goToEmits('prepend')">
            <slot name="prepend-icon" />
        </div>
        <input :placeholder="props.placeholder" :type="props.type" :value="props.modelValue" :class="`input w-full`"
            @input="changeModelValue" />
        <div class="ml-1 icon" @click="goToEmits('append')">
            <slot name="append-icon" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.icon {
    cursor: pointer;
}

.input {
    background: #F9FAFF;
}

.input:focus {
    outline: none;
}

.sm {
    padding: 2px !important;
    font-size: 14px;
}

.md {
    padding: 5px !important;
    font-size: 16px;
}

.lg {
    padding: 8px !important;
    font-size: 18px;
}
</style>