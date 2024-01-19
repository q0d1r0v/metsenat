<script setup lang="ts">
// types
interface IDefinePropsType {
    size?: string
    bg?: string
    color?: string
    text_color?: string
    disabled?: boolean
}

// emits
const emit = defineEmits(['click'])

// with default props
const props = withDefaults(defineProps<IDefinePropsType>(), {
    size: 'md',
})

// methods
function goToEmit() {
    emit('click')
}

</script>

<template>
    <div :class="`button ${props.size} ${props.color} disabled-${props.disabled}`"
        :style="props.bg && props.text_color ? `background: ${props.bg} !important; color: ${props.text_color} !important` : ''"
        @click="goToEmit">
        <span class="flex items-center justify-center">
            <slot name="prepend-icon" />
            <slot />
            <slot name="append-icon" />
        </span>
    </div>
</template>

<style scoped lang="scss">
.button {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    -webkit-user-select: none;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    width: 100%;
    font-weight: 600;
    transition: all 0.3s;
}

.sm {
    padding: 2px !important;
}

.md {
    padding: 5px !important;
}

.lg {
    padding: 8px !important;
}

.primary {
    background: #2E5BFF !important;
    color: #fff !important;
}

.primary:hover {
    background: #2e5bffa9 !important;
}

.primary:active {
    background: #2e5bff8f !important;
}

.success {
    background: #00AE69 !important;
    color: #fff !important;
}

.success:hover {
    background: #00ae68c2 !important;
}

.success:active {
    background: #00ae6896 !important;
}

.danger {
    background: #E94A47 !important;
    color: #fff !important;
}

.danger:hover {
    background: #e94a47c4 !important;
}

.danger:active {
    background: #e94a4794 !important;
}

.disabled-true {
    background: rgba(0, 128, 0, 0) !important;
    color: rgba(0, 0, 0, 0.247) !important;
    pointer-events: none !important;
}
</style>