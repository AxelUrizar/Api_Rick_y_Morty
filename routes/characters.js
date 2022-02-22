var express = require('express');
var router = express.Router();
const contrCharacters = require('../controllers/contrCharacters')

router.get('/', contrCharacters.mostrarTodos);

router.get('/id', contrCharacters.buscarPorId);

router.get('/status', contrCharacters.buscarPorStatus);

router.post('/newCharacter', contrCharacters.crearCharacter);

router.put('/modifyCharacter', contrCharacters.modificarCharacter);

router.delete('/removeCharacter', contrCharacters.eliminarCharacter);

module.exports = router;
