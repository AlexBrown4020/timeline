<template>
  <div class="event">
    <div v-for="event in events" :key="event.id"> {{ event }} </div>
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
        },
        {
          id: 2,
          title: "Laundry Week",
          date: "2022-05-18",
          description: "Students have a week to catch up or relax"
        },
        {
          id: 3,
          title: "The Great Purge",
          date: "2020-01-1",
          description: "You better believe you're getting purged!"
        },
                {
          id: 4,
          title: "Ants",
          date: "2022-10-10",
          description: "There are so many ants right, like, way too many."
        },
      ]
    }
  }
}
</script>

<style>

</style>
