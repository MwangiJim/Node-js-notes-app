import Colorcode from "../models/Colorcode.js";

const addColor=async(req,res)=>{
   const {bgColor} = req.body;
   if(!bgColor){
    return res.status(500).json({"message":"Color code required"})
   }
   else{
    const newColor = await Colorcode.create({
        Color:bgColor
    })
    res.status(201).json({"message":bgColor})
    console.log(newColor);
   }
}
const getColor=async(req,res)=>{
    const foundColor = await Colorcode.find();
    if(!foundColor){
        return res.status(500).json({message:"no color code found"})
    }
    else{
        res.status(200).json({'message':foundColor})
    }
}
const updateColor=async(req,res)=>{
    const id = req.body.id;

    if(id){
       const updateColor =  await Colorcode.findByIdAndUpdate(id,{$set:{
            Color:req.body.newColor
        }},{returnOriginal:false})

        res.status(200).json({"message":`Succefully changes color ${updateColor}`})
        console.log(updateColor)
    }
    else{
        res.status(500).json({'message':"unable to update color scheme..please try again"})
    }
}

export {addColor,getColor,updateColor}