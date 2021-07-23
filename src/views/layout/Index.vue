<template>
<a-layout class="layout-wrap">
    <!-- 侧边栏 -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <layoutSlider></layoutSlider>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout>
        <!-- 右侧顶部 -->
      <a-layout-header style="background: #fff; padding: 0">
        <layoutHeader></layoutHeader>
      </a-layout-header>
      <!-- 右侧内容区域 -->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <layoutContent></layoutContent>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {reactive,toRefs} from 'vue'
import layoutSlider from './components/Slider'
import layoutHeader from './components/Header'
import layoutContent from './components/Content'
export default{
    name: "Layout",
    components:{layoutSlider,layoutHeader,layoutContent},
    setup(props){
        const dataObj = reactive({
            selectedKeys:['1'],
            collapsed:false
        })
        const data = toRefs(dataObj)
        return{
            ...data
        }
    }

}
</script>
<style lang="scss">
.layout-wrap{
    height:100vh;
}
</style>