<template>
  <div class="hello">
    <h1>Raw</h1>
    <div class="buttons">
      <button @click="display_child='NodeRaw'">Nodes</button>
      <button @click="display_child='EventRaw'">Events</button>
    </div>
    <component v-bind:is="display_child"></component>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import NodeRaw from "@/components/NodeRaw";
import EventRaw from "@/components/EventRaw";

export default {
  name: "Raw",
  components: {NodeRaw, EventRaw},
  setup() {
    const store = inject('store')
    let display_child = ref('NodeRaw')
    return {
      store, display_child
    }
  }
}
</script>

<style scoped>

</style>