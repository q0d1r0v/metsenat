<script setup lang="ts">
// imports
import { useRoute, useRouter } from "vue-router"
import UICInput from "../uic/input.vue"
import UICButton from "../uic/button.vue"
import { Icon } from "@iconify/vue/dist/iconify.js";
import { IndexStore } from "../../store/index"
import { SponsorStore } from "../../store/sponsors"
import { ref } from "vue"

// store
const index_store = IndexStore()
const sponsor_store: any = SponsorStore()

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
const search = ref<string>("")

// methods
function changePage(path: string) {
    router.push(path)
}
function showFilterDialog() {
    if (route.path === "/sponsors") {
        index_store.updateSponsorsDialogModelValue()
    } else if (route.path === "/students") {
        index_store.updateStudentsDialogModelValue()
    }
}
function getBack() {
    router.back()
}

</script>

<template>
    <div class="parent-bar">
        <div class="left-side">
            <div class="tabs-parent" v-if="route.path !== '/single'">
                <div class="menu rounded-md overflow-hidden">
                    <div :class="route.path === menu.path ? `child-menu-active py-3.5 flex items-center justify-center text-xs` : `child-menu py-3.5 flex items-center justify-center text-xs`"
                        v-for="(menu) of list_menu" :key="menu.id" @click="changePage(menu.path)">
                        {{ menu.name.toUpperCase() }}
                    </div>
                </div>
            </div>

            <div v-else class="come-back flex items-center gap-x-4">
                <span>
                    <Icon icon="ri-arrow-left-line" class="text-[28px] cursor-pointer" @click="getBack" />
                </span>
                <span class="text-[24px]">
                    {{ sponsor_store?.sponsor_data?.full_name }}
                </span>

                <span
                    :class="sponsor_store?.sponsor_data?.get_status_display === 'Tasdiqlangan' ? `rounded-md px-[12px] py-[6px] bg-[#DDFFF2] text-[#00CF83] text-[12px] font-normal` : sponsor_store?.sponsor_data?.get_status_display === 'Yangi' ? `rounded-md px-[12px] py-[6px] bg-[#5bacf234] text-[#5BABF2] text-[12px] font-normal` : sponsor_store?.sponsor_data?.get_status_display === 'Moderatsiyada' ? `rounded-md px-[12px] py-[6px] bg-[#ffa54544] text-[#FFA445] text-[12px] font-normal` : sponsor_store?.sponsor_data?.get_status_display === 'Bekor qilingan' ? `rounded-md px-[12px] py-[6px] bg-[#97979742] text-[#979797] text-[12px] font-normal` : ''">
                    {{ sponsor_store?.sponsor_data?.get_status_display }}
                </span>
            </div>
        </div>

        <div class="right-side flex gap-5" v-if="route.path !== '/single'">
            <div class="w-[284px]">
                <UICInput class="w-full" placeholder="Izlash..." v-model="search">
                    <template #prepend-icon>
                        <Icon icon="ri-search-line" class="text-[#B1B1B8] text-xl" />
                    </template>
                </UICInput>
            </div>
            <div class="w-[123px] h-[44px]">
                <UICButton class="text-[#3365FC] bg-[#EDF1FD] border-0 h-full" @click="showFilterDialog">
                    <template #prepend-icon>
                        <Icon icon="ri-filter-2-line" class="mr-2.5" />
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