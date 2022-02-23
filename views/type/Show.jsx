const React = require('react')

//CSS
const pageStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
}
const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}
const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(51, 153, 255, 0.4)',
    margin: '0 auto 50px',
    maxWidth: '45%',
    minWidth: 'auto',
    padding: '3px',
    borderRadius: '4px'
}
const ulStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
    gridGap: '.8em 1em',
    padding: '0',
    listStyleType: 'none',
}
const pokeDiv = {
    display: 'flex'
}
const pokeStyle = {
    maxWidth: '56px',
    maxHeight: '44px',
    minWidth: 'auto',
    minHeight: 'auto'
}
const liDiv = {
    fontSize: '0.75em',
    textAlign: 'left'
}

class Show extends React.Component {
    render(){
        const pokemonType = this.props.pokemonType
        const pokemon = this.props.typePoke
        const typeColor = {
            color: pokemonType.name === 'Normal'? '#aa9': 
            pokemonType.name === 'Fire'? '#f42':
            pokemonType.name === 'Water'? '#39f':
            pokemonType.name === 'Electric'? '#fc3':
            pokemonType.name === 'Grass'? '#7c5': 
            pokemonType.name === 'Ice'? '#6cf':
            pokemonType.name === 'Fighting'? '#b54':
            pokemonType.name === 'Poison'? '#a59':
            pokemonType.name === 'Ground'? '#db5':
            pokemonType.name === 'Flying'? '#89f':
            pokemonType.name === 'Psychic'? '#f59':
            pokemonType.name === 'Bug'? '#ab2':
            pokemonType.name === 'Rock'? '#ba6':
            pokemonType.name === 'Ghost'? '#66b':
            pokemonType.name === 'Dragon'? '#76e':
            pokemonType.name === 'Dark'? '#754':
            pokemonType.name === 'Steel'? '#aab':
            pokemonType.name === 'Fairy'? '#e9e':
            'black',
        }
        return(
            <div style={pageStyle}>
                <h1 style={typeColor}>{pokemonType.name} Type</h1>
                <nav style={navStyle}>
                <a style={linkStyle} href="/type">Pokémon Types</a>
                </nav>
                <ul style={ulStyle}>
                    {
                        pokemon.map((poke) => {
                            const lowerCaseName = poke.name.toLowerCase()
                            const capitalizeName = lowerCaseName.split('')
                            capitalizeName[0] = capitalizeName[0].toUpperCase()
                            const pokeName = capitalizeName.join('')
                            const lowerCaseType = poke.type.toLowerCase()
                            const capitalizeType = lowerCaseType.split('')
                            capitalizeType[0] = capitalizeType[0].toUpperCase()
                            const pokeType = capitalizeType.join('')
                            //CSS 
                             const typeColor2 = {
                                color: pokeType === 'Normal'? '#aa9': 
                                pokeType === 'Fire'? '#f42':
                                pokeType === 'Water'? '#39f':
                                pokeType === 'Electric'? '#fc3':
                                pokeType === 'Grass'? '#7c5': 
                                pokeType === 'Ice'? '#6cf':
                                pokeType === 'Fighting'? '#b54':
                                pokeType === 'Poison'? '#a59':
                                pokeType === 'Ground'? '#db5':
                                pokeType === 'Flying'? '#89f':
                                pokeType === 'Psychic'? '#f59':
                                pokeType === 'Bug'? '#ab2':
                                pokeType === 'Rock'? '#ba6':
                                pokeType === 'Ghost'? '#66b':
                                pokeType === 'Dragon'? '#76e':
                                pokeType === 'Dark'? '#754':
                                pokeType === 'Steel'? '#aab':
                                pokeType === 'Fairy'? '#e9e':
                                'black',
                                textDecoration: 'none'
                            }
                            return(
                                <div style={pokeDiv}>
                                    <img style={pokeStyle} src={`https://img.pokemondb.net/sprites/sword-shield/icon/${poke.name}.png`} alt="" />
                                    <div style={liDiv}>
                                    <li key={`${poke._id}`}><a style={linkStyle} href={`/pokemon/${poke._id}`}>{pokeName === 'Nidoran-f'?'Nidoran♀': pokeName === 'Nidoran-m'? 'Nidoran♂': pokeName}</a></li>
                                    <li style={typeColor2}>{pokeType}</li>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Show