const express = require('express')
const cors = require('cors')

const app = express()

var corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption))

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

const db = require('./model')
db.sequelize_connect.sync()
.then(() =>{
    console.log('berhasil');
})
.catch(err => {
    console.error(err)
})

const biodata = require('./controller/biodata.controller')

app.post('/',(req, res) => {
    biodata.create(req, res)
})

app.get('/biodata',(req, res) => {
    biodata.findAll(req, res)
})

app.get('/biodata:id',(req, res) => {
    biodata.findOne(req, res)
})

app.delete('/biodata:id',(req, res) => {
    biodata.delete(req, res)
})

app.put('/biodata:id',(req, res) => {
    biodata.update(req, res)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server berjalan di localhost:3000');
})