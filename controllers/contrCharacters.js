const {Characters} = require('../models')

exports.crearCharacter = async (req, res) => {
    try {
        const { name, status, species, gender, origin } = req.body;

        const crearCharacter = await Characters.create({
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin: origin
        })

        res.status(200).json(crearCharacter)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.mostrarTodos = async (req, res) => {
    try {
        const verCharacters = await Characters.findAll()

        res.status(200).json(verCharacters)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.buscarPorId = async (req, res) => {
    try {
        const {id} = req.body

        const buscarPorId = await Characters.findAll({
            where: {
                id: id
            }
        })

        res.status(200).json(buscarPorId)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.buscarPorStatus = async (req, res) => {
    try {
        const {status} = req.body;

        const buscarPorStatus = await Characters.findAll({
            where: {
                status: status
            }
        })

        res.status(200).json(buscarPorStatus)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.modificarCharacter = async (req, res) => {
    try {
        const { id, name, status, species, gender, origin } = req.body;

        const modificarCharacter = await Characters.update({
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin: origin
        }, {
            where:{
                id: id
            }
        })

        res.status(200).json('Personaje modificado!')
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.eliminarCharacter = async (req, res) => {
    try {
        const {id} = req.body;

        const eliminarCharacter = await Characters.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json('Usuario eliminado')
    } catch (error) {
        res.status(500).json(error)
    }
}