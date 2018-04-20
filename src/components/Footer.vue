
<template>
	<div class="footer">
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
</template>

<script>
import '../../static/styles/footer.scss'

export default {
  name: 'Footer'
}
</script>
