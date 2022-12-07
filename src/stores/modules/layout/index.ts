import { defineStore } from 'pinia'
import store from '/@/stores/index'
export const useLayoutStore = defineStore('Layout', {
  state: () => ({
    isCollapse: false,
  }),
  getters: {},
  actions: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
})
export function useLayoutOutsideStore() {
  return useLayoutStore(store)
}
