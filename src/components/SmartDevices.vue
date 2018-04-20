
<template>
<div>
	<Header></Header>
	<TempMessage message="This page is Smart Devices"></TempMessage>
</div>
</template>

<script>
import '../../static/styles/public.scss'
import Header from '@/components/Header'
import TempMessage from '@/components/TempMessage'

export default {
  name: 'Index',
  components: {
  	Header, 
  	TempMessage
  }
}
</script>
