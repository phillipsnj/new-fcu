import {createApp} from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

//const SocketInstance = io('http://127.0.0.1:5552')

const app = createApp(App)

/*app.use(new VueSocketIO({
    connection: SocketInstance
}))*/

app.mount('#app')
