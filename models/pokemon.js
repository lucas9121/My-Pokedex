// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", sprite: "https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", sprite: "https://img.pokemondb.net/sprites/silver/normal/ivysaur.png"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", sprite: "https://img.pokemondb.net/sprites/silver/normal/venusaur.png"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", sprite: "https://img.pokemondb.net/sprites/silver/normal/charmander.png"},
//     {name: "charmeleon", img: "https://img.pokemondb.net/artwork/charmeleon", sprite: "https://img.pokemondb.net/sprites/silver/normal/charmeleon.png"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", sprite: "https://img.pokemondb.net/sprites/silver/normal/charizard.png"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", sprite: "https://img.pokemondb.net/sprites/silver/normal/squirtle.png"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", sprite: "https://img.pokemondb.net/sprites/silver/normal/wartortle.png"},
//     {name: "blastoise", img: "http://img.pokemondb.net/artwork/blastoise", sprite: "https://img.pokemondb.net/sprites/silver/normal/blastoise.png"},
//     {name: "caterpie", img: "http://img.pokemondb.net/artwork/caterpie", sprite: "https://img.pokemondb.net/sprites/silver/normal/caterpie.png"},
//     {name: "metapod", img: "http://img.pokemondb.net/artwork/metapod", sprite: "https://img.pokemondb.net/sprites/silver/normal/metapod.png"},
//     {name: "butterfree", img: "http://img.pokemondb.net/artwork/butterfree", sprite: "https://img.pokemondb.net/sprites/silver/normal/butterfree.png"},
//     {name: "weedle", img: "http://img.pokemondb.net/artwork/weedle", sprite: "https://img.pokemondb.net/sprites/silver/normal/weedle.png"},
//     {name: "kakuna", img: "http://img.pokemondb.net/artwork/kakuna", sprite: "https://img.pokemondb.net/sprites/silver/normal/kakuna.png"},
//     {name: "beedrill", img: "http://img.pokemondb.net/artwork/beedrill", sprite: "https://img.pokemondb.net/sprites/silver/normal/beedrill.png"},
//     {name: "pidgey", img: "http://img.pokemondb.net/artwork/pidgey", sprite: "https://img.pokemondb.net/sprites/silver/normal/pidgey.png"},
//     {name: "pidgeotto", img: "http://img.pokemondb.net/artwork/pidgeotto", sprite: "https://img.pokemondb.net/sprites/silver/normal/pidgeotto.png"},
//     {name: "pidgeot", img: "http://img.pokemondb.net/artwork/pidgeot", sprite: "https://img.pokemondb.net/sprites/silver/normal/pidgeot.png"},
//     {name: "rattata", img: "http://img.pokemondb.net/artwork/rattata", sprite: "https://img.pokemondb.net/sprites/silver/normal/rattata.png"},
//     {name: "raticate", img: "http://img.pokemondb.net/artwork/raticate", sprite: "https://img.pokemondb.net/sprites/silver/normal/raticate.png"},
//     {name: "spearow", img: "http://img.pokemondb.net/artwork/spearow", sprite: "https://img.pokemondb.net/sprites/silver/normal/spearow.png"},
//     {name: "fearow", img: "http://img.pokemondb.net/artwork/fearow", sprite: "https://img.pokemondb.net/sprites/silver/normal/fearow.png"},
//     {name: "ekans", img: "http://img.pokemondb.net/artwork/ekans", sprite: "https://img.pokemondb.net/sprites/silver/normal/ekans.png"},
//     {name: "arbok", img: "http://img.pokemondb.net/artwork/arbok", sprite: "https://img.pokemondb.net/sprites/silver/normal/arbok.png"},
//     {name: "pikachu", img: "http://img.pokemondb.net/artwork/pikachu", sprite: "https://img.pokemondb.net/sprites/silver/normal/pikachu.png"},
//     {name: "raichu", img: "http://img.pokemondb.net/artwork/raichu", sprite: "https://img.pokemondb.net/sprites/silver/normal/raichu.png"},
//     {name: "sandshrew", img: "http://img.pokemondb.net/artwork/sandshrew", sprite: "https://img.pokemondb.net/sprites/silver/normal/sandshrew.png"},
//     {name: "sandslash", img: "http://img.pokemondb.net/artwork/sandslash", sprite: "https://img.pokemondb.net/sprites/silver/normal/sandslash.png"},
//     {name: "nidoran-f", img: "http://img.pokemondb.net/artwork/nidoran-f", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidoran-f.png"},
//     {name: "nidorina", img: "http://img.pokemondb.net/artwork/nidorina", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidorina.png"},
//     {name: "nidoqueen", img: "http://img.pokemondb.net/artwork/nidoqueen", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidoqueen.png"},
//     {name: "nidoran-m", img: "http://img.pokemondb.net/artwork/nidoran-m", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidoran-m.png"},
//     {name: "nidorino", img: "http://img.pokemondb.net/artwork/nidorino", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidorino.png"},
//     {name: "nidoking", img: "http://img.pokemondb.net/artwork/nidoking", sprite: "https://img.pokemondb.net/sprites/silver/normal/nidoking.png"},
//     {name: "clefairy", img: "http://img.pokemondb.net/artwork/clefairy", sprite: "https://img.pokemondb.net/sprites/silver/normal/clefairy.png"},
//     {name: "clefable", img: "http://img.pokemondb.net/artwork/clefable", sprite: "https://img.pokemondb.net/sprites/silver/normal/clefable.png"},
//  ];

 const mongoose = require('mongoose')

 const pokemonSchema = new mongoose.Schema({
     name: String,
     type: String
 })
 const Pokemon = mongoose.model('Pokemon', pokemonSchema)

 module.exports = Pokemon