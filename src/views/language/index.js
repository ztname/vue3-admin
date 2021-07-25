// 将语言方法放置此处管理（不要直接放在main.js中，避免main.js代码冗余)

// 语言国际化
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'EN',//设置语言的默认值
    messages:{
        CN:require('./ch.js'),
        EN:require('./en.js'),
        JP:require('./jp.js'),
    }
})
export default i18n