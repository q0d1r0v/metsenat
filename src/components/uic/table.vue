<script setup lang="ts">
// types
interface IPropsType {
    rows: any[],
    columns: any[]
}

// props
const props = defineProps<IPropsType>()

</script>

<template>
    <!-- <div>
        <table class="w-full bg-green-200">
            <tr class="bg-red-300 w-full">
                <th class="text-xs header" v-for="(head, index) of props.columns" :key="index">
                    {{ head.name }}
                </th>
            </tr>
            <tr v-for="( body, index ) of  props.rows " :key="index" class="text-center"
                style="border: 12px solid #F5F5F7;">
                <td class="bg-[#fff] px-4 py-6 text-sm" v-for="( cdata, index ) of  props.columns" :key="index">
                    {{ body[cdata.key] }}
                </td>
                <td class="bg-[#fff] px-4 py-6 text-sm" v-for="( cdata, index ) of  props.columns" :key="index"
                    v-show="cdata.key === 'actions'">
                    <slot name="actions" v-bind="body" />
                </td>
            </tr>
        </table>
    </div> -->

    <div>
        <div class="parent-table">
            <div class="head">
                <div class="head-items px-4" v-for="(head, index) of props.columns" :key="index">
                    {{ head.name }}
                </div>
            </div>

            <div class="body" v-for="(body, index) of props.rows" :key="index">
                <div class="body-items px-4 py-6 text-sm" v-for="(head, index) of props.columns" :key="index">
                    {{ body[head.key] }}
                    <span v-show="head.key === 'actions'">
                        <slot name="actions" v-bind="body" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.parent-table {
    width: 100%;

    & .head {
        width: 100%;
        min-height: 40px;
        background: F5F5F7;
        font-size: 12px;
        color: #B1B1B8;
        font-weight: 500;
        display: flex;
        padding: 15px;
        padding-left: 16px !important;

        & .head-items {
            width: 14%;
        }
    }

    .body {
        width: 100%;
        min-height: 40px;
        display: flex;
        background: #fff;
        border-radius: 8px;
        margin-bottom: 12px;
        padding-left: 16px !important;

        & .body-items {
            width: 14%;
        }
    }
}

th {
    font-family: SF-Pro-Text-Regular;
    font-weight: 500;
    color: #B1B1B8;
}

.header {}
</style>