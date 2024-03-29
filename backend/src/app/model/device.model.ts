import { model, Schema } from 'mongoose'

const options = { discriminatorKey: 'type' }

interface Device {
    updateTime: Date
}

interface Luminosity {
    value: number
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
    speed: number
}

interface Led {
    status: boolean
}
const deviceSchema = new Schema<Device>(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
)

const DeviceModel = model('Device', deviceSchema)

const LuminosityModel = DeviceModel.discriminator(
    'Luminosity',
    new Schema<Luminosity>(
        {
            value: { type: Number, required: true },
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
            speed: { type: Number, required: true },
        },
        options
    )

)

const LedModel = DeviceModel.discriminator(
    'Led',
    new Schema<Led>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )

)
export {
    DeviceModel,
    LuminosityModel,
    TemperatureModel,
    HumidityModel,
    FanModel,
    MoistureModel,
    WaterpumpModel,
    LedModel
}