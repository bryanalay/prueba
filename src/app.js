import express, { json } from 'express'


const app = express()
app.use(json())

app.get('/',(req,res)=>{
    res.send({
        Message:'Hola mundo'
    })
})

app.listen(3030,()=>{
    console.log('running at 3030');
})