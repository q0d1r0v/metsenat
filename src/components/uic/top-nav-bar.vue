<script setup lang="ts">
// imports
import { useRoute, useRouter } from "vue-router"
import UICInput from "../uic/input.vue"
import UICButton from "../uic/button.vue"
import { Icon } from "@iconify/vue/dist/iconify.js";

// route
const route = useRoute()

// router
const router = useRouter()

// data
const list_menu = [
    {
        id: 1,
        name: "Dashboard",
        path: "/"
    },
    {
        id: 2,
        name: "Homiylar",
        path: "/sponsors"
    },
    {
        id: 3,
        name: "Talabalar",
        path: "/students"
    }
]

// methods
function changePage(path: string) {
    router.push(path)
}

</script>

<template>
    <div class="parent-bar">
        <div class="left-side">
            <div class="tabs-parent">
                <div class="menu rounded-md overflow-hidden">
                    <div :class="route.path === menu.path ? `child-menu-active py-3.5 flex items-center justify-center text-xs` : `child-menu py-3.5 flex items-center justify-center text-xs`"
                        v-for="(menu) of list_menu" :key="menu.id" @click="changePage(menu.path)">
                        {{ menu.name.toUpperCase() }}
                    </div>
                </div>
            </div>
        </div>

        <div class="right-side flex gap-5">
            <div class="w-[284px]">
                <UICInput class="w-full" placeholder="Izlash...">
                    <template #prepend-icon>
                        <Icon icon="ri-search-line" class="text-[#B1B1B8] text-xl" />
                    </template>
                </UICInput>
            </div>
            <div class="w-[123px] h-[44px]">
                <UICButton class="text-[#3365FC] bg-[#EDF1FD] border-0 h-full">
                    <template #prepend-icon>
                        <Icon icon="ri-home-line" class="mr-2.5" />
                    </template>
                    <span class="font-medium">
                        Filter
                    </span>
                </UICButton>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.parent-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .menu {
        width: 579px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #E0E7FF;
        overflow: hidden;

        & .child-menu {
            width: 193px;
            color: rgba(51, 102, 255, 0.6);
            font-weight: 500;
            -webkit-user-select: none;
            cursor: pointer;
            border: 1px solid #E0E7FF;
            transition: all 0.3s;
        }

        .child-menu:hover {
            background: #3366ff21;
        }

        .child-menu-active {
            background: #3366FF;
            color: #fff !important;
            width: 193px;
            color: rgba(51, 102, 255, 0.6);
            font-weight: 500;
            -webkit-user-select: none;
            cursor: pointer;
        }
    }
}
</style>