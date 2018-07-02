<!-- 固定在底部的footerBar组件 -->
<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        应用中心
      </mt-tab-item>
      <mt-tab-item id="my">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
        selected: this.$store.state.bar.selectedTab
      }
    },
    computed: {
      //是否显示
      isShow: function () {
        return this.$store.state.bar.footerVisible
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected == "main") {
            this.$router.push('/main');
          }
          if (this.selected == "tool") {
            this.$router.push('/tool');
          }
          if (this.selected == "my") {
            this.$router.push('/my');
          }
        }
      }
    }
  }
</script>
