
<template>
<div>
	<Header></Header>
	<TempMessage message="This page is Block Chain"></TempMessage>
</div>
</template>

<script>
import '../../static/styles/public.scss'
import Header from '@/components/Header'
import TempMessage from '@/components/TempMessage'

export default {
  name: 'BlockChain',
  components: {
  	Header, 
  	TempMessage
  }
}
</script>
