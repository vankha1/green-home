import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import { DeviceModel, LedModel } from '../model/device.model'
import MqttClient from '../../utils/mqttClient'
import { ADAFRUIT_IO_FEEDS } from '../../config/adafruit'

class LedController implements Subscriber {
    private socket: Socket
    private name: String = 'ledController'

    constructor(mqttClient: MqttClient, topic: string) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, JSON.parse(message).status.toString())
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        DeviceModel.deleteMany({ type: 'Led' })
            .then(() => {
                let model = new LedModel({
                    status: context.data.value,
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

export default LedController