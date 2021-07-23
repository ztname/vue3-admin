<template>
<div>信息管理</div>
</template>
<script>
import {reactive,toRefs} from 'vue'
export default{
    name: "Index",
    setup(props){
        const dataObj = reactive({
            // selectedKeys:['1']
        })
        const data = toRefs(dataObj)
        return{
            ...data
        }
    }

}
</script>
<style lang="scss">
</style>