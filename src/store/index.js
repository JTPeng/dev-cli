import { defineStore } from "pinia"

export const mainStore = defineStore("main", {
	state: () => {
		return {
			msg: "mainState",
			counter: 0,
		}
	},
  getters:{},
  actions:{},
})
