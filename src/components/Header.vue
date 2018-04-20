
<template>
	<div class="header">
		<div class="logo"><img src="static/images/logo.svg"></div>
		<ul class="menu">
			<li><router-link to="/">Home Networking</router-link></li>
			<li><router-link to="/smartDevices">Smart Devices</router-link></li>
			<li><router-link to="/smartHome">Smart Home</router-link></li>
			<li><router-link to="/blockChain">Blockchain</router-link></li>
		</ul>
		<div class="searchBar">
			<div class="text">Explore</div>
			<div class="text support">Support</div>
			<div class="iconSearch"><img src="static/images/search_icon.svg" /></div>
			<div class="flag"><img src="static/images/flag.svg" /></div>
		</div>
	</div>
</template>

<script>
import '../../static/styles/header.scss'

export default {
  name: 'Header'
}
</script>
