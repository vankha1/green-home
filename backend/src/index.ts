import { Server } from 'socket.io'
import db from './config/database'
import MqttClient from './utils/mqttClient'

import AuthController from './app/controller/auth.controller'

import FanController from './app/controller/fan.controller'

import HumidityController from './app/controller/humidity.controller'
import LightController from './app/controller/light.controller'
import MoistureController from './app/controller/moisture.controller'
import TemperatureController from './app/controller/temperature.controller'
import WaterpumpController from './app/controller/waterpump.controller'
import Subscriber from './utils/subscriber'

const io = new Server(3000)
db.connect()

const mqttClient: MqttClient = new MqttClient()
const [
    temperature,
    humidity,
    light,
    fan,
    moisture,
    waterpump,
] = [
    'temperature',
    'humidity',
    'light',
    'fan',
    'moisture',
    'waterpump',
].map((item) => ({ feed: `GreenHouse-${item}`, name: `${item}Controller` }))

const authController: AuthController = new AuthController()
const temperatureController: Subscriber = new TemperatureController()
const humidityController: Subscriber = new HumidityController()
const lightController: Subscriber = new LightController(mqttClient, light.feed)
const fanController: Subscriber = new FanController(mqttClient, fan.feed)
const moistureController: Subscriber = new MoistureController()
const waterpumpController: Subscriber = new WaterpumpController(mqttClient, waterpump.feed)


mqttClient.subscribe(moistureController, moisture.name)
mqttClient.subscribeTopic(moisture.feed)

mqttClient.subscribe(waterpumpController, waterpump.name)
mqttClient.subscribeTopic(waterpump.feed)

mqttClient.subscribe(temperatureController, temperature.name)
mqttClient.subscribeTopic(temperature.feed)

mqttClient.subscribe(humidityController, humidity.name)
mqttClient.subscribeTopic(humidity.feed)

mqttClient.subscribe(lightController, light.name)
mqttClient.subscribeTopic(light.feed)

mqttClient.subscribe(fanController, fan.name)
mqttClient.subscribeTopic(fan.feed)


io.on('connection', (socket) => {
    socket.on('join controller room', (message) => {
        socket.join(message)
    })

    socket.on('join client room', () => {
        socket.join('client room')

        io.in('client room') // io.in: broadcast to all the sockets in the room
            .fetchSockets()
            .then((sockets) => {
                for (let socket of sockets) {
                    console.log("The socket id of client",socket.id)
                }
            })
    })

    // this transmission is used to send messages from client to controller and also from controller back to client. If transmit from controller to client, it will emit 'nameOfController to client' and it'll be listened at useSocket.tsx 
    socket.on('transmission', (message) => {
        const { from, to, data } = message
        io.to(`${from === 'client' ? to : 'client room'}`).emit(
            `${from} to ${to}`,
            JSON.stringify(data) // just a string
        ) // if message is from client, io.to('name of controller which is joined room in line 66') and after that, emit 'client to controller name' with data and it'll be listened in this controller
        console.log(`Message from ${from} to ${to}: ${JSON.stringify(data)}`)
    })
})