import Notes from "../models/Notes.js";

const createNotes = async(req,res)=>{
    const{date,notes,title,time} = req.body;

    if(!notes){
        return res.status(500).json({"message":"No notes found"})
    }
    else{
        const newNote = await Notes.create({
            dateCreated:date,
            Notes:notes,
            Title:title,
            timeCreated:time
        })

        res.status(201).json({'message':newNote})
        //console.log(newNote)
    }
}

const getNotes = async(req,res)=>{
    const foundNotes = await Notes.find();

    if(!foundNotes){
        return res.status(500).json({"message":"No Notes were Found!!"})
    }
    else{
     res.status(200).json({"message":foundNotes})
     //console.log(foundNotes)
    }
}

const updateNotes = async(req,res)=>{
    const id = req.params.id
     if(id){
       const newUpdate =  await Notes.findByIdAndUpdate(id,{$set:{//set property replaces original value with specified value
        Notes:req.body.newNotes,
        Title:req.body.newTitle,
        dateCreated:req.body.newDate,
        timeCreated:req.body.newTime
       }},{returnOriginal:false})

        res.status(200).json({"message":newUpdate})
        //console.log(newUpdate)
     }
     else{
        return res.status(500).json({'message':"Wrong id cannot delete note with id ",id})
     }
   // console.log(id,req.body);
}

const deleteNote =async(req,res)=>{
    const id = req.params.id;
     if(id){
       const deletedNote = await Notes.findByIdAndDelete(id,{returnOriginal:false})
       .then((e)=>{
        res.status(200).json({"message":"Note record deleted successfully"})
        console.log(e)
       })
       .catch((err)=>{
        res.status(500).json({"message":"Could not delete note record"})
       })
     }
     else{
        res.status(400).send({"message":"id could not be found"})
     }
}

const searchNotes= async(req,res)=>{
   if(req.query.keyword){
    const keyword = req.query.keyword;

    Notes.findById(keyword)
    .then((data)=>{
        if(!data){
            reqsstatus(200).json({"message":"No search Results"})
        }
        else{
            res.status(200).json({"message":data})
        }
    })
    .catch((err)=>{
        res.status(500).json({"message":"No files found"})
    })
   }
   else{
    const otherNotes = await Notes.find();
    res.status(200).json({"message":otherNotes})
   }
    //console.log(id)

}

export {createNotes,getNotes,updateNotes,deleteNote,searchNotes}