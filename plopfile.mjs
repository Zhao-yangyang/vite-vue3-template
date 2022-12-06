import page from './plop-tpls/page/prompt.mjs'
import component from './plop-tpls/component/prompt.mjs'
import store from './plop-tpls/store/prompt.mjs'
export default function (plop) {
  plop.setWelcomeMessage('请选择需要创建的模式：')
  plop.setGenerator('page', page)
  plop.setGenerator('component', component)
  plop.setGenerator('store', store)
}
