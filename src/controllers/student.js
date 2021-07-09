const mongoose = require('mongoose')
const Student = require('../models/student')

const criaEstudante = async (req, res)=>{
    //crie um novo estudante
    const estudante = new Estudante({

        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        nascimento: req.body.nascimento,
        responsavelUm: req.body.responsavelUm,
        responsavelDois: req.body.responsavelDois,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        matricula: req.body.matricula,
        turno: req.body.turno,
        curso: req.body.curso,
        serie: req.body.serie,
        turma: req.body.turma
    })
    //tentar mandar uma resposta e salvar no mongo
    try {
        const novoEstudante = await estudante.save() //que está salvando no banco de dados 
        res.status(201).json(novoEstudante) // enviando resposta do servidor
    }catch (err){ // se nao conseguir criar, me diga qual foi o erro
        res.status(400).json({message: err.message})
    }
}

const listaEstudantes = async (req, res)=> {
    const estudantes = await Estudante.find() //listando todos estudantes que estao salvos no MongoDB
    res.status(200).json(estudantes) //enviando resposta do servidor
}

const atualizaEstudante = async (req, res)=>{
    try {
        const estudante = await Estudante.findById(req.params.id)
        if (estudante == null) {
            return res.status(404).json({ message: 'estudante não encontrado!'})
        }

        if (req.body.nome != null) {
            estudante.nome = req.body.nome
        }

        if (req.body.sobrenome != null) {
            estudante.sobrenome = req.body.sobrenome
        }

        if (req.body. responsavelUm != null) {
            estudante. responsavelUm = req.body. responsavelUm
        }
        if (req.body. responsavelDois != null) {
            estudante. responsavelDois = req.body. responsavelDois
        }
        if (req.body. endereco != null) {
            estudante. endereco = req.body. rendereco
        }
        if (req.body. telefone != null) {
            estudante. telefone = req.body. telefone
        }
        if (req.body. matricula != null) {
            estudante. matricula = req.body. matricula
        }
        if (req.body. turno != null) {
            estudante. turno = req.body. turno
        }
        if (req.body. curso!= null) {
            estudante. curso = req.body. curso
        }
        if (req.body. serie!= null) {
            estudante. serie = req.body. serie
        }
        if (req.body. turma!= null) {
            estudante. turma = req.body. turma
        }
        if (req.body.criadoEm != null) {
            estudante.criadoEm = req.body.criadoEm
        }

        const estudanteAtualizado = await estudante.save()
        res.json(estudanteAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaestudante = async (req, res)=>{
    try {
        const estudante = await estudante.findById(req.params.id)
        if (estudante == null) {
        return res.status(404).json({ message: 'estudante não encontrado!'})
        }
    
        await estudante.remove()
        res.json({ message: 'estudante deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const listaUmestudante = async (req, res ) => {
    const estudante = await estudante.findById(req.params.id)

    if (estudante == null) {
        return res.status(404).json({ message: 'estudante não encontrado!'})
    }

    res.json(estudante)
}

module.exports = { 
    criaEstudante,
    listaEstudantes,
    atualizaEstudante ,
    deletaestudante,
    listaUmestudante

}