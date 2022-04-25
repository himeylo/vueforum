import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const forumApp = createApp(App)
forumApp.use(router)

// This sets our "App" prefixed components as global automatically
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/) // App is our global base indicator
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
