import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://khangtuyhoa123:123456789@cluster0.s2v3jvs.mongodb.net'
        )
        console.log('connect successfully!')
    } catch (err) {
        console.log('Connected fail: ', err)
    }
}

export default { connect }
//mongodb+srv://khangtuyhoa123:123456789@cluster0.s2v3jvs.mongodb.net/