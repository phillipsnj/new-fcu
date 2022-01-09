<template>
  <div class="hello">
    <h1>Nodes</h1>
    <ul id="array-rendering">
      <li v-for="(node, index)  in store.state.nodes">
        {{ index }}
        {{ node.module }}
        {{ node.component }}
        <button>edit</button>
      </li>
    </ul>
    <p>
      {{ store.state.nodes }}
    </p>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
  name: "Nodes",
  setup() {
    const store = inject('store')
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>