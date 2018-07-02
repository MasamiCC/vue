<template>
  <div id="app">
  	<div class="content_nav">
  		<router-view/>
  	</div>
  	<footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
	import FooterBar from './components/FooterBar'
	export default {
	  name: 'App',
	  //引用footer-bar组件
	  components: {
	  	'footer-bar': FooterBar
	  }
	}
</script>

<style>
  .content_div{
  	margin-bottom: 55px;
  }
</style>


