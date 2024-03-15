import { model, Schema } from 'mongoose'

const options = { discriminatorKey: 'type' }

interface Device {
    updateTime: Date
}

interface Light {
    status: boolean
}

interface Temperature {
    value: number
}

interface Humidity {
    value: number
}

interface Fan {
    speed: number
}
interface Moisture {
    value: number
}
interface Waterpump {
    status: boolean
}
const deviceSchema = new Schema<Device>(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
)

const DeviceModel = model('Device', deviceSchema)

const LightModel = DeviceModel.discriminator(
    'Light',
    new Schema<Light>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)


const TemperatureModel = DeviceModel.discriminator(
    'Temperature',
    new Schema<Temperature>(
        {
            value: { type: Number, required: true },
        },
        options
    )
)

const HumidityModel = DeviceModel.discriminator(
    'Humidity',
    new Schema<Humidity>(
        {
            value: { type: Number, required: true },
        },
        options
    )
)
const MoistureModel = DeviceModel.discriminator(
    'Moisture',
    new Schema<Moisture>(
        {
            value: { type: Number, required: true },
        },
        options
    )
)

const FanModel = DeviceModel.discriminator(
    'Fan',
    new Schema<Fan>(
        {
            speed: { type: Number, required: true },
        },
        options
    )
)
const WaterpumpModel = DeviceModel.discriminator(
    'Waterpump',
    new Schema<Waterpump>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )

)
export {
    DeviceModel,
    LightModel,
    TemperatureModel,
    HumidityModel,
    FanModel,
    MoistureModel,
    WaterpumpModel,
}