import { reactive } from 'vue'
import io from 'socket.io-client'
//import VueSocketIO from 'vue-socket.io'

const state = reactive({
    nodes:{},
    events:{}
})

const methods = {
    QNN() {
        console.log(`Emit QNN`)
        socket.emit('QUERY_ALL_NODES')
    }
}

const socket = io('http://localhost:5552')

socket.on("connect", () => {
    console.log(`Socket Connect`)
    //socket.emit('QUERY_ALL_NODES')
})

socket.on("nodes", (data) => {
    console.log(`Nodes Data`)
    state.nodes = data
})

socket.on("events", (data) => {
    console.log(`Events Data`)
    state.events = data
})

export default {
    state,
    methods
}