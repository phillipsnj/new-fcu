<template>
  <div class="nodes">
    <h1>Nodes Raw</h1>
    <p>
      {{ store.state.nodes }}
    </p>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "NodeRaw",
  setup() {
    const store = inject('store')
    return{
      store
    }
  }

}
</script>

<style scoped>

</style>