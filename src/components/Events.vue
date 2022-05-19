<template>
  <div class="event">
    <div v-for="event in events" :key="event.id"> {{ movie.id }} </div>
  </div>
</template>

<script>

export default {
  name: 'EventsCard',
  data() {
    return {
      events: [
        {
          id: 1,
          title: "First Day at Code Chrysalis",
          date: "2022-02-16",
          description: "Students had an introduction lesson"
        }
      ]
    }
  }
}
</script>

<style>

</style>
