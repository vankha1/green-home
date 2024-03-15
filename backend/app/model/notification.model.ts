import { model, Schema } from 'mongoose'

const options = { discriminatorKey: 'type' }

interface Notification {
    updateTime: Date
}

const notificationSchema = new Schema<Notification>(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
)

const NotificationModel = model('Notification', notificationSchema)


export { NotificationModel}