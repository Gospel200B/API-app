const express = require('express');
require('dotenv').config();
// dotenv.config();
const constant = require('./constant')
const database = require('./database')
const controller = require('./controller')

const app = express()
const{MESSAGES} = constant

app.use(express.json)

const PORT = process.env.PORT || 8000;


//Base API
app.get('/hotel',(req, res) => {
    res.status(200).send({Message : MESSAGES.Fetched, success : true})
}),


//fetching all the rooms by it's name, price and roomType

app.get('/hotel/api/v1/Rooms?search=smallsizedroom&frequentlodge&40000', async(req, res) => {
    try{
        const user = await controller.getAllTodos(Todos);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data : user})
    } catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

app.get('/hotel/api/v1/Room?search=Mediumsizedroom&VIPlodge&60000', async(req, res) => {
    try{
        const user = await controller.getAllTodos(Todos);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data: user})
    }catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

app.get('/hotel/api/v1/Room?search=Bigsizedroom&Exclusivelodge&150000', async(req, res) => {
    try{
        const user = await controller.getAllTodos(Todos);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data: user})
    }catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})


//editing a room by it's Id

app.patch(`/hotel/api/v1/Room`, async(req, res) => {
    try{
        const {Id} = req.params;
        const Room =req.Room;
        const data = await controller.editTodosById(Id, Room);
        res.status(301).send({Message : MESSAGES.Updated, success : true, data})
    }catch(err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

//Delete a room using it's Id

app.delete(`/hotel/api/v1/Room`, async(req, res) => {
    try{
        const Id = req.params;

        const data = await controller.deleteTodosById(Id)
        res.status(200).send({Message : MESSAGES.Deleted, success : true, data})
    }catch(err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})


//Getting a room by it's Id

app.get(`/hotel/api/v1/Room`, async(req, res) => {
    try{
        const Id = req.params;

        const data = await controller.getTodosbyId(Id)
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data : user})
    }catch (err) {
        res.status(500).send({Message : MESSAGES, success : false})
    }
})


app.listen(PORT, () => {
    database()
    console.log(`server started on port ${PORT}`)
})

