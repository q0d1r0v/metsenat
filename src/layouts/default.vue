<script setup lang="ts">
// imports
import { useRouter } from "vue-router"
import TopBar from "../components/uic/top-bar.vue"
import TopNavBar from "../components/uic/top-nav-bar.vue"

// router
const router = useRouter()

// methods
function logOut() {
    localStorage.clear()
    window.location.reload()
}

function goToOtherPage(path: string) {
    router.push(path)
}

</script>

<template>
    <div class="w-full h-screen">
        <top-bar>
            <template #left-side>
                <img alt="#metsenat_logo" src="../assets/metsenat-dashboard-logo.svg" class="w-[172px] cursor-pointer"
                    @click="goToOtherPage('/')" />
            </template>

            <template #right-side>
                <div class="flex items-center">
                    <div
                        class="mr-10 profile-button flex items-center px-1 py-1 bg-[#F1F1F3] justify-between rounded-md cursor-pointer">
                        <span class="pl-5">
                            Name
                        </span>

                        <span class="bg-[#00AE69] px-1 py-1 rounded-md ml-2">
                            <img alt="#avatar_icon" src="../assets/avatar-icon.svg" class="w-[24px]" />
                        </span>
                    </div>
                    <img src="../assets/log-out.svg" class="w-[32px] cursor-pointer select-none" @click="logOut" />
                </div>
            </template>
        </top-bar>
        <div class="bg-[#FBFBFB] px-28 py-6">
            <top-nav-bar />
        </div>
        <div class="bg-[#F5F5F7] w-full h-full px-28">
            <router-view />
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-button {
    min-width: 133px;
}
</style>