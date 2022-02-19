const React = require('react')

//CSS
const pageStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center',
};
const pokedexStyle = {
    // border: 'dotted',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    listStyleType: 'none',
    
}
const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}

class Index extends React.Component {
    render(){
        const pokemon = this.props.pokemon
        return(
            <div style={pageStyle}>
                <h1>Check out all the Pokemon!</h1>
                <nav>
                    <a style={linkStyle} href="/pokemon/new">Register Pokemon</a>
                </nav>
                <ul style={pokedexStyle}>
                    {
                        pokemon.map((poke, i) => {
                            //capitalize first letter only
                            const lowerCaseName = poke.name.toLowerCase()
                            const capitalizeName = lowerCaseName.split('')
                            capitalizeName[0] = capitalizeName[0].toUpperCase()
                            const pokeName = capitalizeName.join('')
                            const lowerCaseType = poke.type.toLowerCase()
                            const capitalizeType = lowerCaseType.split('')
                            capitalizeType[0] = capitalizeType[0].toUpperCase()
                            const pokeType = capitalizeType.join('')
                            //CSS
                            const typeColor = {
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
                            }
                            return(
                                <div>
                                    <img src={`https://img.pokemondb.net/sprites/silver/normal/${lowerCaseName}.png`} alt={pokeName}/>
                                    <li>#{i < 9? '00' + (i+1): i < 99? '0' + (i+1): (i+1)}</li>
                                    <li key={`${poke._id}`}><a style={linkStyle} href={`/pokemon/${poke._id}`}>{pokeName === 'Nidoran-f'?'Nidoran': pokeName === 'Nidoran-m'? 'Nidoran': pokeName}</a></li>
                                    <li key={`${poke._id}`}><a style={typeColor}> {`${pokeType}`}</a></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index