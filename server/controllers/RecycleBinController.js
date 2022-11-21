import DeletedNotes from "../models/DeletedNotes.js";


async function createDeletedNotes(req,res){
    const { notes,title,date,time,timecreated,datecreated}=req.body;

    if(!title){
        res.status(500).json({"message":"No deleted Items found!"})
    }
    else{
        const Recyclebin = await DeletedNotes.create({
            dateDeleted:date,
            timeDeleted:time,
            Notes:notes,
            Title:title,
            dateCreated:datecreated,
            timeCreated:timecreated
        })
        res.status(201).json({message:Recyclebin})
       // console.log(Recyclebin);
    }
}

async function getDeletedNotes(req,res){
    const foundDeletedItems = await DeletedNotes.find();
    if(!foundDeletedItems){
        res.status(400).json({'message':'NO Items found!!'})
    }
    else{
        res.status(200).json({'message':foundDeletedItems})
    }
}

export {createDeletedNotes,getDeletedNotes}