
<template>
<div>
	<!--header and footer are public, so separated them from index page-->
	<Header></Header>
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
			<div class="smartWatch"></div>
			<div class="productIntroduce">
				<h3>NEW PRODUCT</h3>
				<p>Smart health</br>monitoring</p>
			</div>

		</div>
		<div class="linksContainer">
			<ul class="links">
				<li>Where to Buy<span class="iconArrowRight"></span></li>
				<li>Support<span class="iconArrowRight"></span></li>
				<li>Community<span class="iconArrowRight"></span></li>
			</ul>
		</div>
		<Footer></Footer>

	</div>
</div>
</template>

<script>
import '../../static/styles/public.scss'
import '../../static/styles/index.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Index',
  components: {
  	Header, 
	Footer
  },
  data () {
    return {
      msg: 'Welcome you come PHICOMM'
    }
  }
}
</script>
