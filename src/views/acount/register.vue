<template>
  <div class="main-login">
    <div class="login">
      <a-form
      @finish="submitForm"
      :rules="formRules"
      ref="ruleForm"
      name="validation"
      :model="formData">
        <a-form-item  label="用户名:" name="userName" class="wrapSpace" > 
          <!-- 需要做规则校验，必须使用v-model:value双向绑定 -->
          <a-input maxlength=11 placeholder="请输入用户名" v-model:value="formData.userName" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item label="密码:" name="password" class="wrapSpace" > 
          <!-- 需要做规则校验，必须使用v-model:value双向绑定 -->
          <a-input  maxlength=20 type="password" placeholder="请输入密码" v-model:value="formData.password">
          </a-input>
        </a-form-item>
        <a-form-item label="确认密码:" name="passwords" class="wrapSpace" >
          <a-input  maxlength=20 type="password" placeholder="请再次输入密码" v-model:value="formData.passwords" >
          </a-input>
        </a-form-item>
        <a-form-item  label="验证码:" name="code" class="wrapSpace" >
           <a-row type="flex" :gutter="15">
                <a-col span="14">
                    <a-input type="text"  maxlength=6 placeholder="请输入验证码" v-model:value="formData.code">
                    </a-input>
                </a-col>
                <a-col span="10">
                    <a-button type="primary" block @click="getCode">
                    {{button_text}}
                    </a-button>
                </a-col>
            </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" block htmlType="submit">注册</a-button>
        </a-form-item>
      </a-form>
      <div class="tips">
        <router-link to="/forget">忘记密码</router-link>  |  
        <router-link to="/">登录</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
import { ref , reactive , toRefs ,onMounted} from 'vue'
import {checkPhone ,password as checkPassWord,checkCode} from "@/untils/verification.js"
export default {
  name: "Login",
  components:{
  },
  // vue3 将数据，函数放在setup中
  setup(props) {

    // 表单自定义验证规则定义
    let checkUserName = async (rule, value) => {
      if (value === '') { //用户名为空时
        return Promise.reject('请输入用户名');
      } else if (!checkPhone(value)) {
        return Promise.reject('请输入正确格式的手机号码');
        }else {      
        return Promise.resolve();
      }
    };

    // 验证密码
    let checkUserPassWord = async (rule, value) => {
      let pwds = obj.formData.passwords
      if (value === '') { //用户名为空时
        return Promise.reject('请输入密码');
      } else if (!checkPassWord(value)) {
        return Promise.reject('请输入6~20位的数字字母组合');
        // 此处应该在密码和重复密码都存在的情况下再做校验
        }else if (pwds && value && pwds!==value) {
        return Promise.reject('两次密码不一致');}else {      
        return Promise.resolve();
      }
    };
    // 验证重复密码
    let checkUserPassWords = async (rule, value) => {
      let pwd = obj.formData.password
      if (value === '') { //用户名为空时
        return Promise.reject('请再次输入密码');
      } else if (!checkPassWord(value)) {
        return Promise.reject('请输入6~20位的数字字母组合');
        // 此处应该在密码和重复密码都存在的情况下再做校验
        }else if (pwd && value && pwd!==value) {
        return Promise.reject('两次密码不一致');}else {      
        return Promise.resolve();
      }
    };
    // 验证验证码
    let checkPhoneCode= async (rule, value) => {
      if (value === '') { //用户名为空时
        return Promise.reject('请输入验证码');
      } else if (!checkCode(value)) {
        return Promise.reject('请输入6位的数字字母组合');
        }else {      
        return Promise.resolve();
      }
    };

    // ref用于定义基础数据类型
    let basic = ref(10);
    // ref取值需要通过.value取值
    console.log(basic.value)  //10
    basic.value = 20
    console.log(basic.value)  //20

    // reactive放置数据，但是定义数据时需要定义一个常量来接收数据，该常量相当于vue2的data
    // 使用时需要通过 常量名.数据 取值
    // 此处obj用于放置表单配置相关数据
  const obj = reactive({
    // 放置表格数据
    formData:{
        userName:'',
        password:'',
        passwords:'',
        code:''
    },
    // 表单验证规则
    formRules:{
      // 注：规则与form-item通过name 属性关联，
      // 并且此处的 规则名称（userName)必须与formItem的v-model:value所绑定的值同名
      userName:[
        {validator: checkUserName, trigger: 'blur' }],
      password:[{validator: checkUserPassWord, trigger: 'blur' }],
      passwords:[{validator: checkUserPassWords, trigger: 'blur' }],
      code:[{validator: checkPhoneCode, trigger: 'blur' }]
    }
  })
  const formConfig = reactive({
    layout:'测试数据'
  })
  // data放置页面的其他数据
  const register_data = reactive({
    button_text:'获取验证码',
    second:10,
    timmer:null, //定时器
  })
  // 将对象类型转化为普通类型,便于取值，使用时可直接通过 数据 取值
  const form = toRefs(obj)
  const data = toRefs(register_data)
    //表单提交方法
    const submitForm = (value)=>{
        console.log(value)
    }
    // 获取验证码
    const getCode = ()=>{
    // 防止用户未填写手机号码发送验证码
    if(!obj.formData.userName){
      message.error('用户名不能为空');
      return
    }
      // 在点击按钮时先判断是否存在未清除的定时器。防止用户在60s内连续点击多次 导致同时开启多个定时器 会导致时间加速
        if(register_data.timmer){
          clearInterval(register_data.timmer)
        }
        // 开启定时器
      register_data.timmer = setInterval(()=>{
        let s = register_data.second--
        register_data.button_text = `${s}S`
        console.log(register_data.second,s)
        if(register_data.second<=0){
          register_data.button_text = '重新获取'
          clearInterval(register_data.timmer)
        }
      },1000)
    }
    
  return{ 
    obj,
    ...form, //将数据扩展返回 表单数据
    ...data, //将数据扩展返回 页面数据
    ...formConfig,
    submitForm,
    getCode
     }
  },
  methods:{
  }
}
</script>
<style lang="scss">
@import "./main.scss"; 
.wrapSpace{
  display:block ;
  label{
    margin-bottom:0 !important;
  }
}
</style>
