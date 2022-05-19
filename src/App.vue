
<template>
  <div id="app">
    <h1>Welcome to Timeline</h1>
    <h2>Hello</h2>
    <AddEvent>
    <Events>
  </div>
</template>

<script>
import Events from "./components/Events.vue"
import AddEvent from "./components/AddEvent.vue"
export default {
  name: 'App',
  components: {
    Events,
    AddEvent
  }
}
</script>

<style>

</style>
