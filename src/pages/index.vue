<script setup lang="ts">
// imports
import { onMounted, ref } from "vue"
import { http } from "../utils/axios";
import { IndexStore } from "../store/index"
import UICDialog from "../components/uic/dialog.vue"

// types
interface IDashboardDataTypes {
    total_must_pay: string
    total_need: string
    total_paid: string
}

// store
const index_store = IndexStore()

// data
const dashboard_data = ref<IDashboardDataTypes>({
    total_must_pay: '0',
    total_need: '0',
    total_paid: '0'
})

// methods
async function getDashboardData() {
    try {
        const { data } = await http.get("/dashboard/")
        dashboard_data.value = data
    } catch (err) {
        console.log(err)
    }
}

// mounted
onMounted(() => {
    getDashboardData()
})

</script>

<template>
    <div class="flex pt-[48px] gap-x-[28px]">
        <div class="w-2/6 bg-[#fff] rounded-lg min-h-[96px] p-6 flex items-center gap-x-[16px]">
            <div>
                <img alt="#icon" src="../assets/dashboard-blue-money.svg" />
            </div>
            <div>
                <div class="text-[12px] text-[#7A7A9D] font-normal">Jami to'langan summa</div>
                <div class="text-[20px] font-bold">{{ parseInt(dashboard_data.total_paid).toLocaleString()
                    .split(',')
                    .join(' ') }} <span class="text-[#B2B7C1]">UZS</span>
                </div>
            </div>
        </div>

        <div class="w-2/6 bg-[#fff] rounded-lg min-h-[96px] p-6 flex items-center gap-x-[16px]">
            <div>
                <img alt="#icon" src="../assets/dashboard-yellow-money.svg" />
            </div>
            <div>
                <div class="text-[12px] text-[#7A7A9D] font-normal">Jami so'ralgan summa</div>
                <div class="text-[20px] font-bold">{{ parseInt(dashboard_data.total_need).toLocaleString()
                    .split(',')
                    .join(' ') }} <span class="text-[#B2B7C1]">UZS</span>
                </div>
            </div>
        </div>

        <div class="w-2/6 bg-[#fff] rounded-lg min-h-[96px] p-6 flex items-center gap-x-[16px]">
            <div>
                <img alt="#icon" src="../assets/dashboard-red-money.svg" />
            </div>
            <div>
                <div class="text-[12px] text-[#7A7A9D] font-normal">To'lanishi kerak summa</div>
                <div class="text-[20px] font-bold">{{ parseInt(dashboard_data.total_must_pay).toLocaleString()
                    .split(',')
                    .join(' ') }} <span class="text-[#B2B7C1]">UZS</span>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-[28px]">
        This area of Chart
    </div>
    <UICDialog v-model="index_store.dashboard_filter_dialog_model_vale" dialog-title="Dashboard Filter">
        <template #body>
            <div>
                This is Body of Dashboard page
            </div>
        </template>

        <template #footer>
            <div>
                This is Footer of Dashboard page
            </div>
        </template>
    </UICDialog>
</template>

<style scoped lang="scss"></style>