const { kandidat } = require('../models')
const { jabatan } = require('../models')
const model = {}

model.jabatan = jabatan
model.kandidat = kandidat

module.exports = model