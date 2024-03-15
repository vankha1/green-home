import { model, Schema, Types } from 'mongoose'

interface GreenHouse {
    accountId: Schema.Types.ObjectId
    devices: Schema.Types.ObjectId[]
    notifications: Schema.Types.ObjectId[]
}

const GreenhouseSchema = new Schema<GreenHouse>({
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
    },
    devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
    notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
})

const GreenHouseModel = model('GreenHouse', GreenhouseSchema)
export default GreenHouseModel