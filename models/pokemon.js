 const mongoose = require('mongoose')

 const pokemonSchema = new mongoose.Schema({
     name: String,
     type: String
 })
 const Pokemon = mongoose.model('Pokemon', pokemonSchema)

 module.exports = Pokemon