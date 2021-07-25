<template>
<div id="main-index-header">
    <div class="header-right">
  <a-dropdown :trigger="['click']" class="antDropdown">
    <a class="ant-dropdown-link" @click.prevent>
      <img src="@/assets/images/logo.png">
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <div>1995831654</div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="1">
          <div>
              <span v-for="item in lang" :key="item.value" @click="toggleLang(item)" :class="{currentLang:langCurrent === item.value}">{{item.label}}</span>
          </div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
            <div>{{ $t('headerSetting.signOut')}}</div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>



    </div>
</div>
</template>
<script>
import { reactive,toRefs } from 'vue'
      // 方1
import i18n from '../../language'
      // 方2
import { useI18n } from 'vue-i18n'
export default{
  setup(props) {
    const data = reactive({
      // 语种
      lang:[{
        label:'中文',value:'CN'
      },{
        label:'EN',value:'EN'
      },{
        label:'日本',value:'JP'
      }],
      langCurrent:'CN'
    })
      // 方2
    const { locale } = useI18n({useScope:'global'})
    // 切换语言方法
    const toggleLang = (item)=>{
      // 更改默认语种
      // 方1
      // i18n.global.locale = item.value
      // 方2
      locale.value = item.value
      // 增加类名，控制选中状态
      data.langCurrent = item.value
    }
    const dataRef = toRefs(data)
    return{
      ...dataRef,
      toggleLang
    }
  }
}
</script>
<style lang="scss">
#main-index-header{
    padding:0 20px;
    height:64px;
    .header-right{
        float:right;
        .ant-dropdown-link{
            img{
                width:30px;
                height:30px;
                border-radius:50%;
                margin-top:17px;
            }
        }
    }
}
.ant-dropdown-menu-item{
    width:130px;
    padding: 20px;
    font-size:16px;
    font-family: '黑体';
    span{
        margin-right:20px;
        color:#333;
    }
    .currentLang{
      color:red
    }
}
</style>