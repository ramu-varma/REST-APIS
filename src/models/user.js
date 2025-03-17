const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    firstName:{
type:String,
required:[true, "Name is required"] 


    },
    age:{
        type:Number,
        required: [true, "Name is required"] 
    
    },
branch:{
type:String,
required: [true, "Name is required"] 
}

})
const Person=mongoose.model("Person",userSchema)
module.exports=Person