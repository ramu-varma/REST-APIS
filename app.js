const express=require('express')
const app=express()
app.use(express.json())
const users=[{
    id:1,
    name:"ramu",
    age:24

},
{
id:2,
name:"rani",
age:29
}
]

app.get('/',(req,res)=>{
    res.send("welcome to the home page")
})
app.get('/products/:id',(req,res)=>{
    const newData=users.filter(product=>product.id.toString()===req.params.id)
    res.json(newData)
})
app.post('/signup',(req,res)=>{
    const {id,name,age}=req.body;
    console.log(id,name,age)
    res.send("user sucefuuly registered")

    })
    app.get('/user',(req,res)=>{
        res.send(users)
    })
app.get('/return/:age',(req,res)=>{
    const minorStud=users.filter(user=>user.age>req.params.age)
    res.send(minorStud)
})
app.put('/rename',(req,res)=>{
    const {id,name,age}=req.body
    const updatedData=users.find(prod=>prod.id.toString()===id)
   
   updatedData.name=name;
   updatedData.age=age
   users.push({updatedData})
    res.send(updatedData)
    
})

app.delete('/remove/:id',(req,res)=>{
    const id=req.params.id
    const index = users.findIndex(user => user.id.toString() === id);

    if (index === -1) {
        return res.status(404).send("Data is not available");
    }

    // Remove user from the array
    const deletedUser = users.splice(index, 1); // Removes the user

    res.json({ message: "User deleted successfully", deletedUser })

})


app.listen(7000,()=>{
    console.log("server is started")
})