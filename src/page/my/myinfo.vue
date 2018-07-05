
<template>
  <div class="my-info">
    <mt-header fixed title="我的个人信息">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
 
    <div class="content">
      <mt-cell title="姓名">
        <span>{{my.name}}</span>
      </mt-cell>
      <mt-cell title="性别">
        <span>{{my.gender}}</span>
      </mt-cell>
    </div>
 
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
  }
 
  .mint-cell {
    min-height: 40px;
  }
  span{
    font-size: 13px;
  }
</style>
<script>
  export default {
    data(){
      return {
        my: {
          name: 'aa'
        }
      }
    },
    methods: {
      getUser(){
        let that = this;
        this.$get('/api/my').then((res) => {
          that.my = res.data
        });
      }
    },
    mounted(){
      this.getUser();
    },
    created(){
      let _footer = this.$store.state.bar.footerVisible;
      if (_footer) {
         this.$store.dispatch('barVisible');
      }
    }
  }
</script>