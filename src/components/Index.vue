
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
			<div class="text support">Support</div>
			<div class="iconSearch"><img src="static/images/search_icon.svg" /></div>
			<div class="flag"><img src="static/images/flag.svg" /></div>
		</div>
	</div>
	<div class="body">
		
		<div class="leftSide">
			<div class="device"></div>
			<div class="productIntroduce">
				<h3>NEW PRODUCT</h3>
				<p>Smart<br>Scale<br>S7®</p>
			</div>
		</div>
		<div class="bodyCenter">
			<div class="productIntroduce">
				<h3>K3 ROUTER®</h3>
				<p>Concise<br>perfect &<br>lasting</p>
			</div>
		</div>
		<div class="rightSide">
		</div>
		<div class="linksContainer">
			<ul class="links">
				<li>Where to Buy<span class="iconArrowRight"></span></li>
				<li>Support<span class="iconArrowRight"></span></li>
				<li>Community<span class="iconArrowRight"></span></li>
			</ul>
		</div>
		<div class="footer">
			<!-- <div class="leftSide"> -->
			<!-- </div> -->
			<!-- <div class="rightSide"> -->
			<!-- </div> -->
			<input type="text" name="txtEmail" placeholder="Enter email for Phicomm news">
			<div class="linksAndSocialMedia">
				<ul class="links">
					<li>Who we are</li>
					<li>Contact Us</li>
					<li>Careers</li>
				</ul>
				<ul class="socialMedia">
					<li href="#"><img src="static/images/youtube.png"></li>
					<li href="#"><img src="static/images/instagram.png"></li>
					<li href="#"><img src="static/images/facebook.png"></li>
					<li href="#"><img src="static/images/twitter.png"></li>
				</ul>
				
			</div>
			<div class="dropdown">
				<img class="flag" src="static/images/flag.svg"></img>
				<span>United States</span>
				<img class="grayArrow" src="static/images/grayArrow.png">
			</div>
			<div class="copyright">© 2018 PHICOMM All Rights Reserved.</div>
		</div>

		<!-- <div class="rightSide">
			<div class="newProduct">
				<div class="router"></div>
				<div class="healthMonitor"></div>
			</div>
			
			<div class="footer">
				
				
			</div>
		</div> -->
	</div>
</div>
</template>

<script>
// import '../../static/styles/index.css'
// import '../../static/styles/f1.scss'
// import '../../static/fonts/fonts.css'
import '../../static/styles/public.scss'
import '../../static/styles/index.scss'


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

