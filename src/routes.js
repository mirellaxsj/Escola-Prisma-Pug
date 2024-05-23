const express = require('express');
const router = express.router();

const turma = require('./controllers/turma');

router.get('/', turma.iniciar)
router.get('/', aluno.iniciar)
router.get('/', professor.iniciar)

module.exports = router;