const express=require('express')
const app=express()
const connectDb=require('./src/config/db')
const Person=require('./src/models/user')
app.use(express.json())
// const users=[{
//     id:1,
//     name:"ramu",
//     age:24

// },
// {
// id:2,
// name:"rani",
// age:29
// }
// ]

// app.get('/',(req,res)=>{
//     res.send("welcome to the home page")
// })
// app.get('/products/:id',(req,res)=>{
//     const newData=users.filter(product=>product.id.toString()===req.params.id)
//     res.json(newData)
// })
// app.post('/signup',(req,res)=>{
//     const {id,name,age}=req.body;
//     console.log(id,name,age)
//     res.send("user sucefuuly registered")

//     })
//     app.get('/user',(req,res)=>{
//         res.send(users)
//     })
// app.get('/return/:age',(req,res)=>{
//     const minorStud=users.filter(user=>user.age>req.params.age)
//     res.send(minorStud)
// })
// app.put('/rename',(req,res)=>{
//     const {id,name,age}=req.body
//     const updatedData=users.find(prod=>prod.id.toString()===id)
   
//    updatedData.name=name;
//    updatedData.age=age
//    users.push({updatedData})
//     res.send(updatedData)
    
// })
app.post('/newPerson',async(req,res)=>{
    try{
    const user=new Person(req.body)
    await user.save()
res.send("user data added is sucessfully")
    }
    catch(error){
        res.status(404).json({message:"user details is not corect"})
    }
})

app.get('/feed',async(req,res)=>{
    const personsList=await Person.find({})
    res.send(personsList)
})

app.get('/users/:firstName',async(req,res)=>{
    const firstName=req.params.firstName
    const salariedPerson=await Person.find()
    res.status(200).send(salariedPerson)
})
app.put('/rename/:firstName',async(req,res)=>{
    const{firstName,age,branch}=req.body
    const userModify=await Person.findOneAndUpdate({firstName:firstName},{$set:{age:age,branch:branch}})
    res.send(userModify)
})
app.delete('/del',async(req,res)=>{
    // const{firstName}=req.body
const delData=await Person.deleteMany({age:{$lt:30}})
res.send("sucessfully delete")
})

connectDb()
.then(()=>{
    console.log('database is connected')

app.listen(3400,()=>{
    console.log("server is started")
})
})
.catch(()=>{
    console.log("mistake")
})