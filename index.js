import express, { json } from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(json())

app.get('/',(req,res)=>{
    res.send({
        Message:'Hola mundo'
    })
})

app.listen(3030,()=>{
    console.log('running at 3030');
})