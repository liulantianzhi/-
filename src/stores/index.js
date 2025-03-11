import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// pinia数据独立维护

const pinia = createPinia()
pinia.use(persist)

export default pinia
// 仓库统一导出
export * from './modules/user'
