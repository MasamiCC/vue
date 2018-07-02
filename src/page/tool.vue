<template>
  <div>
    应用中心
  </div>
</template>
<style scoped>
  #index{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
</style>
<script>
  export default{
  	created(){
      let _footer = this.$store.state.bar.footerVisible;
      if (!_footer) {
        this.$store.dispatch('barVisible');
      }
      this.$store.dispatch('changeBar', 'tool')
    }
  }
</script>
