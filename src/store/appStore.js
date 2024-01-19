import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => ({
		isMobileDevice: false,
		isNarrowDevice: false,
	}),
	getters: {},
	actions: {
		checkIfMobile() {
			if (navigator.maxTouchPoints > 2) {
				this.isMobileDevice = true;
			}
			if (window.matchMedia("(pointer:fine)").matches) {
				this.isMobileDevice = false;
			}
			if (window.screen.width < 750) {
				this.isNarrowDevice = true;
			}
		},
	},
});
