// imports
import { defineStore } from "pinia";

// export data
export const IndexStore = defineStore("IndexStore", {
  state: () => ({
    name: "From Index store",
    dashboard_filter_dialog_model_vale: false,
    sponsors_filter_dialog_model_vale: false,
    students_filter_dialog_model_vale: false,
  }),

  actions: {
    changeIndexStoreName(name: string) {
      this.name = name;
    },
    updateSponsorsDialogModelValue() {
      this.sponsors_filter_dialog_model_vale =
        !this.sponsors_filter_dialog_model_vale;
    },
    updateStudentsDialogModelValue() {
      this.students_filter_dialog_model_vale =
        !this.students_filter_dialog_model_vale;
    },
    updateDashboardDialogModelValue() {
      this.dashboard_filter_dialog_model_vale =
        !this.dashboard_filter_dialog_model_vale;
    },
  },
});
