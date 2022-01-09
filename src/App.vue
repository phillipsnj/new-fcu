<template>
  <HelloWorld msg="new-fcu - Proof of Concept"/>
  <div class="buttons">
    <button @click="display_item='Nodes'">Nodes</button>
    <button @click="display_item='Events'">Events</button>
    <button @click="display_item='Raw'">Raw</button>
    <button @click="send_QNN()">QNN</button>
  </div>
  <component v-bind:is="display_item"></component>
</template>

<script>
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Nodes from './components/Nodes.vue'
import Events from './components/Events.vue'
import Raw from './components/Raw.vue'
//import NodeRaw from './components/NodeRaw.vue'

import { provide } from 'vue'
import store from '@/store'

export default {
  name: 'App',
  setup() {
    provide('store', store)
    let display_item = ref('Nodes')
    const send_QNN = function(){
      console.log(`App.vue send QNN`)
      store.methods.QNN()
    }
    return {
      display_item, send_QNN
    }
  },
  components: {
    HelloWorld, Nodes, Events, Raw
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin-bottom: 10px;
}

.buttons button {
  font-size: 40px;
  width: 150px;
  margin: 0 10px;
}
</style>
