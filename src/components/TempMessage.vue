
<template>
<div>
	<div class="tempMessage">{{message}}</div>
</div>
</template>

<script>
import '../../static/styles/public.scss'
import Header from '@/components/Header'

export default {
  name: 'Index',
  props:['message'],
  data () {
    return {
      // message: '11'
    }
  }
}
</script>

<style type="text/css">
	.tempMessage {
		display: inline-block;
		width:1000px;
		height:200px;
		text-align: center;
		margin-top:200px;
		
	}
</style>
