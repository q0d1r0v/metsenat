// imports
import { defineStore } from "pinia";

// export data
export const IndexStore = defineStore("IndexStore", {
  state: () => ({
    name: "From Index store",
  }),

  actions: {
    changeIndexStoreName(name: string) {
      this.name = name;
    },
  },
});
