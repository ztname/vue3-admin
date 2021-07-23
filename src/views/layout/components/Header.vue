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
              <span class="chinese">中文</span>
              <span>En</span>
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
export default{

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
    .chinese{
        margin-right:20px;
    }
}
</style>