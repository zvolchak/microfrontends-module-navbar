import Vue from 'vue'
import Page1 from './Page1'

const Components = {
  Page1,
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
