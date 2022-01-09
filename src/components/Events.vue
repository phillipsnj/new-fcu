<template>
  <div class="hello">
    <h1>Events</h1>
    <table id="events">
      <tr>
        <th>Event</th>
        <th>Node Id</th>
        <th>status</th>
      </tr>
      <tr v-for="event  in store.state.events">
        <td>{{ event.id }}</td>
        <td>{{ event.nodeId }}</td>
        <td>{{ event.status }}</td>
      </tr>
    </table>
    <p>
      {{ store.state.events }}
    </p>
  </div>
</template>

<script>
import {inject} from "vue"

export default {
  name: "Events",
  setup() {
    const store = inject('store')
    return {
      store
    }
  }
}
</script>

<style scoped>
table, th, td {
  border-bottom:1px solid black;
  border-collapse: collapse;
}
th, td {
  background-color: azure;
  padding: 15px;
}
table {
  border-spacing: 20px;
}
th {
  text-align: left;
}

</style>