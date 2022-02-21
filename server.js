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

//INDEX
app.get('/pokemon', (req, res) => {
    // res.render('Index', {pokemon})
    // Pokemon.findOneAndDelete('621172f139be66d1abf72d6b')
    Pokemon.find({}, (err, foundPokemon) => {
        if(err){ 
            res.status(400).send(err)
        } else {
            res.render('Index', {
                pokemon: foundPokemon
            })
        }
    })
})


/////////////////Not working////////////////////
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


//EDIT
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
})


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})