import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 语言国际化
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'EN',//设置语言的默认值
    messages:{
        CN:require('./views/language/ch.js'),
        EN:require('./views/language/en.js'),
    }
})

createApp(App)
.use(store)
.use(router)
.use(Antd)
.use(i18n)
.mount('#app')
