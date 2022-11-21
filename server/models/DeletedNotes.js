import mongoose from 'mongoose'

const DeletedNotes = mongoose.Schema({
    dateDeleted:String,
    timeDeleted:String,
    Notes:[],
    Title:String,
    dateCreated:String,
    timeCreated:String,
})

export default mongoose.model('RecycleBin',DeletedNotes);