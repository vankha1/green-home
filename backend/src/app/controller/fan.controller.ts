import { io, Socket } from 'socket.io-client'
import { ADAFRUIT_IO_FEEDS } from '../../config/adafruit'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'
import { DeviceModel, FanModel } from '../model/device.model'

class FanController implements Subscriber {
    private socket: Socket
    private name: String = 'fanController'

    constructor(mqttClient: MqttClient, topic: string) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })
        // roopin216/feeds/fan
        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, JSON.parse(message).command.toString())
        })
    }

    public update(context: any): void {
        // console.log('FanController:', context)
        this.socket.emit('transmission', context)
        
        DeviceModel.deleteMany({ type: 'Fan' })
            .then(() => {
                let model = new FanModel({
                    status: context.data.status,
                    speed: context.data.command
                })
                model.save().then(() => console.log('database is updated')) // Success
            })
            .catch(function (error) {
                console.log(error) // Failure
            })
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default FanController