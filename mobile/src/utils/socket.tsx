import io from 'socket.io-client'

const socket = io('http://192.168.137.1:3000', { // your laptop ip address
    transports: ['websocket'],
})

export default socket
