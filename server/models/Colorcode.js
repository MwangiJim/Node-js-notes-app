import mongoose from 'mongoose'

const CodeColor = mongoose.Schema({
    Color:String,
})

export default mongoose.model('Color',CodeColor);