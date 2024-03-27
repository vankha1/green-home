import { io, Socket } from 'socket.io-client'
import { ADAFRUIT_IO_FEEDS } from '../../config/adafruit'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'
import { DeviceModel, LuminosityModel } from '../model/device.model'

class LuminosityController implements Subscriber {
    private socket: Socket
    private name: String = 'luminosityController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        // this.socket.on(`client to ${this.name}`, (message) => {
        //     mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, message)
        // })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        DeviceModel.deleteMany({ type: 'Luminosity' })
            .then(() => {
                let model = new LuminosityModel({
                    value: context.data.value,
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

export default LuminosityController