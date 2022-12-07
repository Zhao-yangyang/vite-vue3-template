import { createPinia } from 'pinia'
import { useCountStore } from './modules/count/count'
import { useLayoutStore } from './modules/layout/index'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)
export { useCountStore, useLayoutStore }
export default store
