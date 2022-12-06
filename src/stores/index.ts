import { createPinia } from 'pinia'
import { useCountStore } from './modules/count/count'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)
export { useCountStore }
export default store
