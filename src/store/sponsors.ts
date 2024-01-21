// imports
import { defineStore } from "pinia";

// export data
export const SponsorStore = defineStore("SponsorStore", {
  state: () => ({
    name: "From Sponsor Store",
    sponsor_data: [],
  }),

  actions: {
    setSponsorsData(data: any) {
      this.sponsor_data = data;
    },
  },
});
