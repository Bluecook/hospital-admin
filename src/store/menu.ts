import { defineStore } from 'pinia'


export const menuStore = defineStore('menu', {
    state: () => {
        return {
            collapsed: false,
        }
    },
    actions: {
        changeCollapsed() {
            this.collapsed = !this.collapsed
        }
    }
})