<template>
  <div class="main-login">
    <div class="login">
      <a-form
      v-bind="formConfig.layout">
        <a-form-item >
          <label>用户名：</label>
          <a-input placeholder="请输入用户名" />
        </a-form-item>

        <a-form-item >
          <label>密码</label>
          <a-input type="password" placeholder="请输入密码">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>

        <a-form-item>
          <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->
          <captcha/>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" block>登录</a-button>
        </a-form-item>
      </a-form>
      <div class="tips">
        <router-link to="/forget">忘记密码</router-link>  |  
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import captcha from  '@/components/captcha'
import { ref , reactive , toRefs ,onMounted} from 'vue'
export default {
  name: "Login",
  components:{
    captcha
  },
  // vue3 将数据，函数放在setup中
  setup(props) {
    // ref用于定义基础数据类型
    let basic = ref(10);
    // ref取值需要通过.value取值
    console.log(basic.value)  //10
    basic.value = 20
    console.log(basic.value)  //20

    // reactive放置数据，但是定义数据时需要定义一个常量来接收数据，该常量相当于vue2的data
    // 使用时需要通过 常量名.数据 取值
  const obj = reactive({
    formConfig:{
      aa:111
    }
  })
  const formConfig = reactive({
    layout:{}
  })
  // 将对象类型转化为普通类型,便于取值，使用时可直接通过 数据 取值
  const data = toRefs(obj)
  return{ 
    obj,
    ...data, //将数据扩展返回
    formConfig
     }
  }
}
</script>
<style lang="scss">
@import "./main.scss"; 
</style>
