import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import { DeviceModel, MoistureModel } from '../model/device.model'

class MoistureController implements Subscriber {
    private socket: Socket
    private name: String = 'moistureController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })
    }

    public update(context: any): void {
        this.socket.emit('transmission', context)

        DeviceModel.deleteMany({ type: 'Moisture' })
            .then(() => {
                let model = new MoistureModel({
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

export default MoistureController