<script setup lang="ts">
// imports
import { onMounted, ref } from "vue";
import { IndexStore } from "./../store/index"
import { SponsorStore } from "./../store/sponsors"
import { router } from "../routes/router";

// ui components
import UICTable from "../components/uic/table.vue"
import UICDialog from "../components/uic/dialog.vue"
import { http } from "../utils/axios";

// store
const index_store = IndexStore()
const sponsor_store = SponsorStore()

// data
const sponsors = ref<any[]>([])
const headers = [
    {
        name: "ID",
        key: "id"
    },
    {
        name: "Ism Familya",
        key: "full_name"
    },
    {
        name: "Telefon raqam",
        key: "phone"
    },
    {
        name: "Homiylik summasi",
        key: "sum"
    },
    {
        name: "Sariflangan summa",
        key: "spent"
    },
    {
        name: "Sana",
        key: "created_at"
    },
    {
        name: "Holat",
        key: "get_status_display"
    },
    {
        name: "Amallar",
        key: "actions"
    },
]

// methods
function goToPersonalPage(data: any) {
    sponsor_store.sponsor_data = data
    router.push('/single')
}
async function getSponsors() {
    try {
        const { data } = await http.get("/sponsor-list/")
        data.results.map((sdata) => {
            sdata.created_at = sdata.created_at.split(":")[0].split("T")[0]
            sdata.sum = parseInt(sdata.sum).toLocaleString().split(",").join(' ') + " UZS"

            return sdata
        })
        sponsors.value = data.results
    } catch (err) {
        console.log(err)
    }
}

// mounted
onMounted(() => {
    getSponsors()
})
</script>

<template>
    <div>
        <UICDialog v-model="index_store.sponsors_filter_dialog_model_vale" dialog-title="Homiylar Filter">
            <template #body>
                <div>
                    This is Body of Sponsors page
                </div>
            </template>

            <template #footer>
                <div>
                    This is Footer of Sponsors page
                </div>
            </template>
        </UICDialog>
        <UICTable :rows="sponsors" :columns="headers">
            <template #actions="props">
                <div>
                    <img alt="#eye" src="../assets/eye.svg" class="w-[24px] cursor-pointer"
                        @click="goToPersonalPage(props)" />
                </div>
            </template>

            <template #get_status_display="props">
                <span>
                    {{ props.get_status_display }}
                </span>
            </template>
        </UICTable>
    </div>
</template>