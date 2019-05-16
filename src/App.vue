<template>
  <div id="app">
	<!-- 	<header>vue测试</header>
    <img src="./assets/logo.png" style="width:100px;height:100px;">
		<footer>
			<ul class="navTab">
				<li><router-link to="/" active-class="active">主页</router-link></li>
				<li><router-link to="/home" active-class="active">首页</router-link></li>
				<li><router-link to="/about" active-class="active">关于</router-link></li>
				<li><router-link to="/other" active-class="active">其他</router-link></li>
			</ul>
		</footer> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
	  // console.log('APP',this.$router)
  }
}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
	header {
		height:44px;		background: orange;
		color: #fff;
		text-align: center;
		line-height: 44px;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .navTab {
	box-sizing: border-box;
	width: 100%;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
}
#app ul li{
	list-style: none;
}
#app ul li .active {
	color: #FFA500;
}
footer {
	width: 100%;
	position: fixed;
	bottom: 0;
	background: ghostwhite;
}
</style>
