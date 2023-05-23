const db = require('../model')
const Biodata = db.biodata
const Op = db.Sequelize.Op

exports.create = (req, res) =>{
    console.log('>> create')
    if(!req.body.nama){
        res.status(400).send({
            message: 'at least isi nama dulu'
        })
        return
    }
    const biodata = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat: req.body.alamat,
    }

    Biodata.create(biodata)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
           message: err
        })
    })

}
exports.findAll = (req, res) =>{
    Biodata.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err
        })
    })
}

exports.findOne = (req, res) =>{
    Biodata.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err
        })
    })
}
exports.delete = (req, res) =>{
    Biodata.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send(`data dengan id ${req.params.id} berasil di singkirkan`)
    })
    .catch(err => {
        res.status(500).send({
            message: err
        })
    })
}

exports.update = (req, res) => {
    if(!req.body.nama){
        res.status(400).send({
            mesegge: "nama tidak boleh kosong"
        })
        return
    }
    if(!req.body.tempat_lahir){
        res.status(400).send({
            mesegge: "tempat_lahir tidak boleh kosong"
        })
        return
    }
    if(!req.body.tanggal_lahir){
        res.status(400).send({
            mesegge: "tanggal_lahir tidak boleh kosong"
        })
        return
    }
    if(!req.body.alamat){
        res.status(400).send({
            mesegge: "alamat tidak boleh kosong"
        })
        return
    }

    Biodata.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        data.nama = req.body.nama
        data.tempat_lahir = req.body.tempat_lahir
        data.tanggal_lahir = req.body.tanggal_lahir
        data.alamat = req.body.alamat
        data.save()

        res.send({
            mesegge: `data dengan id ${data.id} berhasil di rubah`
        })
    }).catch(err => {
        res.status(500).send({
            message: err
        })
    })
}

