<script setup lang="ts">
// imports
import { useRouter } from "vue-router"
import { SponsorStore } from "../store/sponsors"
import UICButton from "../components/uic/button.vue"
import { Icon } from "@iconify/vue/dist/iconify.js";

// router
const router = useRouter()

// store
const sponsor_store: any = SponsorStore()

</script>

<template>
    <div class="single-parent">
        <div class="data-card p-8">
            <div class="top-side flex justify-between items-center">
                <div class="text-[24px] font-bold">
                    Homiy haqida
                </div>

                <div class="w-[166px] h-[42px]">
                    <UICButton bg="#EDF1FD" text_color="#3365FC">
                        <template #prepend-icon>
                            <Icon icon="ri-edit-box-line" class="mr-2.5" />
                        </template>
                        <span class="text-[14px] font-medium">
                            Tahrirlash
                        </span>
                    </UICButton>
                </div>
            </div>

            <div class="main-side mt-[32px]">
                <div class="flex items-center gap-x-5">
                    <img alt="#person_icon" src="../assets/person-icon-of-about-sponsor.svg" class="w-[64px]" />
                    <span class="text-[16px] font-medium max-w-[200px]">
                        {{ sponsor_store?.sponsor_data?.full_name }}
                    </span>
                </div>
            </div>

            <div class="footer-side flex justify-between mt-[24px]">
                <div class="w-[50%]">
                    <div class="text-[12px] text-[#B5B5C3]">TELEFON RAQAM</div>
                    <div class="mt-[12px] text-[16px] font-medium">{{ sponsor_store?.sponsor_data?.phone }}</div>
                </div>

                <div class="w-[50%]">
                    <div class="text-[12px] text-[#B5B5C3]">HOMIYLIK SUMMASI</div>
                    <div class="mt-[12px] text-[16px] font-medium">{{
                        parseInt(sponsor_store?.sponsor_data?.sum).toLocaleString().split(",").join(' ') }} UZS</div>
                </div>
            </div>
        </div>
        <div class="bg-image">
            <img class="w-[800px]" src="../assets/background-image-of-single-page.svg" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.single-parent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    & .data-card {
        width: 793px;
        height: 290px;
        background: #fff;
        border-radius: 12px;
        z-index: 1;
        margin-top: 40px;
    }
}

.bg-image {
    position: absolute;
    width: 100%;
    height: 614px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
</style>