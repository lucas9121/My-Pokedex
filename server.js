require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Pokemon = require('./models/pokemon.js')
const pokemonTypes = require('./models/pokemonTypes.js')

//MVC SETUP
//views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokémon App!</h1> <a href=/pokemon>Pokedex</a> <br> <a href=/type>Pokémon Types</a>')
})

// SEED
// const gen1Pokemon = [
//     { name: "bulbasaur", type: "grass" },
//     { name: "ivysaur", type: "grass" },
//     { name: "venusaur", type: "grass" },
//     { name: "charmander", type: "fire" },
//     { name: "charmeleon", type: "fire" },
//     { name: "charizard", type: "fire" },
//     { name: "squirtle", type: "water" },
//     { name: "wartortle", type: "water" },
//     { name: "blastoise", type: "water" },
//     { name: "caterpie", type: "bug" },
//     { name: "metapod", type: "bug" },
//     { name: "butterfree", type: "bug" },
//     { name: "weedle", type: "bug" },
//     { name: "kakuna", type: "bug" },
//     { name: "beedrill", type: "bug" },
//     { name: "pidgey", type: "normal" },
//     { name: "pidgeotto", type: "normal" },
//     { name: "pidgeot", type: "normal" },
//     { name: "rattata", type: "normal" },
//     { name: "raticate", type: "normal" },
//     { name: "spearow", type: "normal" },
//     { name: "fearow", type: "normal" },
//     { name: "ekans", type: "poison" },
//     { name: "arbok", type: "poison" },
//     { name: "pikachu", type: "electric" },
//     { name: "raichu", type: "electric" },
//     { name: "sandshrew", type: "ground" },
//     { name: "sandslash", type: "ground" },
//     { name: "nidoran-f", type: "poison" },
//     { name: "nidorina", type: "poison" },
//     { name: "nidoqueen", type: "poison" },
//     { name: "nidoran-m", type: "poison" },
//     { name: "nidorino", type: "poison" },
//     { name: "nidoking", type: "poison" },
//     { name: "clefairy", type: "fairy" },
//     { name: "clefable", type: "fairy" },
//     { name: "vulpix", type: "fire" },
//     { name: "ninetales", type: "fire" },
//     { name: "jigglypuff", type: "normal" },
//     { name: "wigglytuff", type: "normal" },
//     { name: "zubat", type: "poison" },
//     { name: "golbat", type: "poison" },
//     { name: "oddish", type: "grass" },
//     { name: "gloom", type: "grass" },
//     { name: "vileplume", type: "grass" },
//     { name: "paras", type: "bug" },
//     { name: "parasect", type: "bug" },
//     { name: "venonat", type: "bug" },
//     { name: "venomoth", type: "bug" },
//     { name: "diglett", type: "ground" },
//     { name: "dugtrio", type: "ground" },
//     { name: "meowth", type: "normal" },
//     { name: "persian", type: "normal" },
//     { name: "psyduck", type: "water" },
//     { name: "golduck", type: "water" },
//     { name: "mankey", type: "fighting" },
//     { name: "primeape", type: "fighting" },
//     { name: "growlithe", type: "fire" },
//     { name: "arcanine", type: "fire" },
//     { name: "poliwag", type: "water" },
//     { name: "poliwhirl", type: "water" },
//     { name: "poliwrath", type: "water" },
//     { name: "abra", type: "psychic" },
//     { name: "kadabra", type: "psychic" },
//     { name: "alakazam", type: "psychic" },
//     { name: "machop", type: "fighting" },
//     { name: "machoke", type: "fighting" },
//     { name: "machamp", type: "fighting" },
//     { name: "bellsprout", type: "grass" },
//     { name: "weepinbell", type: "grass" },
//     { name: "victreebel", type: "grass" },
//     { name: "tentacool", type: "water" },
//     { name: "tentacruel", type: "water" },
//     { name: "geodude", type: "rock" },
//     { name: "graveler", type: "rock" },
//     { name: "golem", type: "rock" },
//     { name: "ponyta", type: "fire" },
//     { name: "rapidash", type: "fire" },
//     { name: "slowpoke", type: "water" },
//     { name: "slowbro", type: "water" },
//     { name: "magnemite", type: "electric" },
//     { name: "magneton", type: "electric" },
//     { name: "farfetchd", type: "normal" },
//     { name: "doduo", type: "normal" },
//     { name: "dodrio", type: "normal" },
//     { name: "seel", type: "water" },
//     { name: "dewgong", type: "water" },
//     { name: "grimer", type: "poison" },
//     { name: "muk", type: "poison" },
//     { name: "shellder", type: "water" },
//     { name: "cloyster", type: "water" },
//     { name: "gastly", type: "ghost" },
//     { name: "haunter", type: "ghost" },
//     { name: "gengar", type: "ghost" },
//     { name: "onix", type: "rock" },
//     { name: "drowzee", type: "psychic" },
//     { name: "hypno", type: "psychic" },
//     { name: "krabby", type: "water" },
//     { name: "kingler", type: "water" },
//     { name: "voltorb", type: "electric" },
//     { name: "electrode", type: "electric" },
//     { name: "exeggcute", type: "grass" },
//     { name: "exeggutor", type: "grass" },
//     { name: "cubone", type: "ground" },
//     { name: "marowak", type: "ground" },
//     { name: "hitmonlee", type: "fighting" },
//     { name: "hitmonchan", type: "fighting" },
//     { name: "lickitung", type: "normal" },
//     { name: "koffing", type: "poison" },
//     { name: "weezing", type: "poison" },
//     { name: "rhyhorn", type: "ground" },
//     { name: "rhydon", type: "ground" },
//     { name: "chansey", type: "normal" },
//     { name: "tangela", type: "grass" },
//     { name: "kangaskhan", type: "normal" },
//     { name: "horsea", type: "water" },
//     { name: "seadra", type: "water" },
//     { name: "goldeen", type: "water" },
//     { name: "seaking", type: "water" },
//     { name: "staryu", type: "water" },
//     { name: "starmie", type: "water" },
//     { name: "mr-mime", type: "psychic" },
//     { name: "scyther", type: "bug" },
//     { name: "jynx", type: "ice" },
//     { name: "electabuzz", type: "electric" },
//     { name: "magmar", type: "fire" },
//     { name: "pinsir", type: "bug" },
//     { name: "tauros", type: "normal" },
//     { name: "magikarp", type: "water" },
//     { name: "gyarados", type: "water" },
//     { name: "lapras", type: "water" },
//     { name: "ditto", type: "normal" },
//     { name: "eevee", type: "normal" },
//     { name: "vaporeon", type: "water" },
//     { name: "jolteon", type: "electric" },
//     { name: "flareon", type: "fire" },
//     { name: "porygon", type: "normal" },
//     { name: "omanyte", type: "rock" },
//     { name: "omastar", type: "rock" },
//     { name: "kabuto", type: "rock" },
//     { name: "kabutops", type: "rock" },
//     { name: "aerodactyl", type: "rock" },
//     { name: "snorlax", type: "normal" },
//     { name: "articuno", type: "ice" },
//     { name: "zapdos", type: "electric" },
//     { name: "moltres", type: "fire" },
//     { name: "dratini", type: "dragon" },
//     { name: "dragonair", type: "dragon" },
//     { name: "dragonite", type: "dragon" },
//     { name: "mewtwo", type: "psychic" },
//     { name: "mew", type: "psychic" }
//   ];


//   app.get('/pokemon/seed', async (req, res) => {
//     try {
//       await Pokemon.deleteMany({});
//       const createdPokemon = await Pokemon.insertMany(gen1Pokemon);
//       res.redirect('/pokemon');
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });


//INDEX

app.get('/pokemon', (req, res) => {
    // res.render('Index', {pokemon})
    Pokemon.find({}, (err, foundPokemon) => {
        if(err){ 
            res.status(400).send(err)
        } else {
            res.render('Index', {
                pokemon: foundPokemon,
            })
        }
    })
})

app.get('/type', (req,res) => {
    res.render('type/Index', {pokemonTypes})
   
})


//NEW
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})


//CREATE
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        if(err){
            res.status(403).send(err)
        } else {
            res.redirect('/pokemon')
        }
    })
})


//SHOW
app.get('/pokemon/:id', (req, res) => {
    // res.render('Show', {
    //     poke: pokemon[req.params.id]
    // })
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Show', {
                poke: foundPokemon
            })
        }
    })
});

app.get('/type/:typeName', (req, res) => {
    Pokemon.find({type: req.params.typeName.toLowerCase()}, (err, foundPokemon) => {
        res.render('type/Show', {
            //https://www.codegrepper.com/code-examples/javascript/findIndexOf
            pokemonType: pokemonTypes[pokemonTypes.findIndex(obj => obj.name === req.params.typeName)],
            typePoke: foundPokemon
            })
    })
})


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})