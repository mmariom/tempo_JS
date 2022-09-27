//all the imports 
import express from 'express'
import cors from 'cors'
import Kitty from './model.js'
import mongoose from 'mongoose'


// database setup
// const uri = "mongodb://rootuser:rootpass@localhost:27017/ais_mlm?authSource=admin";
// const client = new MongoClient(uri)

await mongoose.connect("mongodb://rootuser:rootpass@localhost:27017/mongooseexe?authSource=admin",{

})

//server setup
const app = express()
const port = 3003

//server configuration so our requests accept JSON format
app.use(express.json())
//app.use(cors())



// API routes 
app.get('/', async (req, res) => {

    res.send(console.log("get controller working!"))

})





app.post("/", async(req, res) => {

        const kitty = new Kitty({
          name: req.body.name,
          weight: req.body.weight

        })
      

       try {
                    const createdProduct = await kitty.save()
                    res.status(201).json(createdProduct)

       }
       catch(err) {
           console.log(err)
           res.status(404).json(err.message)
       }
   
})


app.listen(port, ()=> {
   console.log("running")
})