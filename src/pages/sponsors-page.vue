<script setup lang="ts">
// imports
import { ref } from "vue";
import UICTable from "../components/uic/table.vue"

// data
const tdata = ref([
    {
        id: 1,
        full_name: "full name 1",
        phone_number: '7887878787',
        sum_of_sponsor: "30 000 000",
        cost: "10 000",
        date: "12.12.2020",
        status: "cancel"
    },
    {
        id: 2,
        full_name: "full name 2",
        phone_number: '7887878789',
        sum_of_sponsor: "10 000 000",
        cost: "20 000",
        date: "11.11.2021",
        status: "new"
    }
])
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
        key: "phone_number"
    },
    {
        name: "Homiylik summasi",
        key: "sum_of_sponsor"
    },
    {
        name: "Harajat",
        key: "cost"
    },
    {
        name: "Sana",
        key: "date"
    },
    {
        name: "Holat",
        key: "status"
    },
    {
        name: "Amallar",
        key: "actions"
    },
]

</script>

<template>
    <div>
        <UICTable :rows="tdata" :columns="headers">
            <template #actions="props">
                <div>
                    pencil
                </div>
            </template>
        </UICTable>
    </div>
</template>