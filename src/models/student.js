const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    responsavelUm: {
        type: String,
        required: true
    },
    responsavelDois: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    matricula: {
        type: Number,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    serie: {
        type: Number,
        required: true
    },
    turma: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})




module.exports = mongoose.model('student', studentSchema)