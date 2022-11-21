import mongoose from "mongoose";

const notes = mongoose.Schema({
    dateCreated:String,
    timeCreated:String,
    Notes:[],
    Title:String
})

export default mongoose.model("Note",notes);