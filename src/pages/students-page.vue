<script setup lang="ts">
// imports
import { IndexStore } from "./../store/index"
import UICDialog from "../components/uic/dialog.vue"

// Index store
const index_store = IndexStore()

</script>

<template>
    <div>
        <UICDialog v-model="index_store.students_filter_dialog_model_vale" dialog-title="Talabalar Filter">
            <template #body>
                <div>
                    This is Body of Students page
                </div>
            </template>

            <template #footer>
                <div>
                    This is Footer of Students page
                </div>
            </template>
        </UICDialog>
        Students page
    </div>
</template>