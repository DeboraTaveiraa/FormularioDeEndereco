<template>
  <div id="app">
    <Header/>
    <AddressForm/>
  </div>
</template>

<script>
import AddressForm from './components/AddressForm/index.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    AddressForm,
    Header
  }
}
</script>

