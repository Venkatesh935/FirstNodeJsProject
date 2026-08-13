import express from "express"
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("hell woorld!")
})
app.get('/login',(req,res)=>{
    res.send("Sadhana Ji!")
})
app.listen(port,(req ,res)=>{
    console.log(`listening on port http://localhost:${port}`)
})