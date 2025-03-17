const mongoose=require('mongoose')
const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://ramuvarma:WZlma2yNsQkn2QTL@namastenodejs.j0wv3.mongodb.net/Instragram")
}

module.exports=connectDb