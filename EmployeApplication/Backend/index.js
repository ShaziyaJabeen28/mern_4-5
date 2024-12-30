//1.import express
const express = require('express')
require('./connection')
var emp = require('./model/employee')
var cors = require('cors')

// 2. initialize
const app = express()
app.use(cors())
//
app.use(express.json())

//3. api
app.get('/', (req, res) => {
    res.send('hello world!')
})
app.get("/trail", (req, res) => {
    res.send("This is a trail message")
})

// adding in api
app.post('/add', async (req, res) => {
    try {
        await emp(req.body).save()
        res.send({ message: "Data Added" })
    } catch (error) {
        console.log(error)
    }
})

//viewing data
app.get('/view', async (req, res) => {
    try {
        data = await emp.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//delete data
app.delete('/remove/:id', async (req, res) => {
    try {
        await emp.findByIdAndDelete(req.params.id)
        res.send({ message: "Data Deleted" })
    } catch (error) {
        console.log(error)
    }
})

//update data
app.put('/update/:id', async (req, res) => {
    try {
        await emp.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Data Updated" })
    } catch (error) {
        console.log(error)
    }
})


//4. port setting
app.listen(3004, () => {
    console.log('server is running on port 3004')
})
