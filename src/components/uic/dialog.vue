<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

// types
interface IPropsType {
    modelValue: boolean
    dialogTitle: string
}

// props
const props = defineProps<IPropsType>()

// emits
const emits = defineEmits(['update:modelValue'])

// methods
function closeDialog() {
    emits('update:modelValue', false)
}

</script>

<template>
    <Transition name="bounce">
        <div class="bg-parent" v-show="props.modelValue">
            <div class="card px-8 py-7 ">
                <div class="header flex items-center justify-between">
                    <div>
                        <span class="text-[24px] font-bold">
                            {{ props.dialogTitle }}
                        </span>
                    </div>

                    <div>
                        <Icon icon="ri-close-line" class="text-[#B2B7C1] text-[28px] cursor-pointer select-none"
                            @click="closeDialog" />
                    </div>
                </div>
                <div class="w-full h-[2px] bg-[#F5F5F7] mt-7">
                    <!-- some -->
                </div>

                <div class="dialog-body">
                    <slot name="body" />
                </div>

                <div class="w-full h-[2px] bg-[#F5F5F7] mt-7">
                    <!-- some -->
                </div>
                <div class="dialog-footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.bg-parent {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    & .card {
        min-width: 586px;
        min-height: 100px;
        background: #fff;
        border-radius: 12px;
    }
}
</style>