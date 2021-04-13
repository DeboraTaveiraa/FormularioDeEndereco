<template>
  <div id="app">
    <Header/>
    <FormAddress/>
  </div>
</template>

<script>
import FormAddress from './components/FormAddress.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    FormAddress,
    Header
  }
}
</script>

