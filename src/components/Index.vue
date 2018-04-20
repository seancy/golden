
<template>
<div>

	<div class="header">
		<div class="logo"><img src="static/images/logo.svg"></div>
		<ul class="menu">
			<li>Home Networking</li>
			<li>Smart Devices</li>
			<li>Smart Home</li>
			<li>Blockchain</li>
		</ul>
		<div class="searchBar">
			<div class="text">Explore</div>
			<div class="text">Support</div>
			<div class="iconSearch"><img src="images/search_icon.svg" /></div>
			<div class="flag"><img src="images/flag.svg" /></div>

		</div>
	</div>
	<div class="body">
		<div class="smartScale">
			<div class="productIntroduce">
				<div class="title"></div>
				<ul><li>Smart</li><li>Scale</li><li>S7®</li></ul>
			</div>
		</div>
		<div class="rightSide">
			<div class="newProduct">
				<div class="router"></div>
				<div class="healthMonitor"></div>
			</div>
			<ul class="links">
				<li>Where to Buy<span class="iconArrowRight"></span></li>
				<li>Support<span class="iconArrowRight"></span></li>
				<li>Community<span class="iconArrowRight"></span></li>
			</ul>
			<div class="footer">
				<div class="leftSide">
					<input type="text" name="txtEmail" placeholder="Enter email for Phicomm news">
					<span>Dropdown of United States</span>
				</div>
				<div class="rightSide">
					<ul class="links">
						<li>Who we are</li>
						<li>Contact Us</li>
						<li>Careers</li>
					</ul>
					<div class="socialMedia">
						<a href="#"><img src="images/youtube.png"></a>
						<a href="#"><img src="images/instagram.png"></a>
						<a href="#"><img src="images/facebook.png"></a>
						<a href="#"><img src="images/twitter.png"></a>
					</div>
					<div class="copyright">© 2018 PHICOMM All Rights Reserved.</div>
				</div>
				
			</div>
		</div>
	</div>
</div>
</template>

<script>
import '../../static/styles/index.css'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome you come PHICOMM'
    }
  }
}
</script>

<style scoped>
</style>

