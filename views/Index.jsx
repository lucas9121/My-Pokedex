const React = require('react')

//CSS
const pageStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
};
const ulStyle = {
    // border: 'dotted',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
    gridGap: '1.5em 0.5em',
    padding: '0',
    listStyleType: 'none',
}
const liStyle = {
    border: 'solid black'
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
const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}

class Index extends React.Component {
    render(){
        const pokemon = this.props.pokemon
        return(
            <div style={pageStyle}>
                <h1>Check out all the Pokémon!</h1>
                <nav style={navStyle}>
                    <a style={linkStyle} href="/pokemon/new">Register Pokémon</a>
                    <a style={linkStyle} href="/type">Pokémon Types</a>
                </nav>
                <ul style={ulStyle}>
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
                                textDecoration: 'none'
                            }
                            return(
                                <div>
                                    <img src={`https://img.pokemondb.net/sprites/silver/normal/${lowerCaseName}.png`} alt={pokeName}/>
                                    <li>#{i < 9? '00' + (i+1): i < 99? '0' + (i+1): (i+1)}</li>
                                    <li key={`${poke._id}`}><a style={linkStyle} href={`/pokemon/${poke._id}`}>{pokeName === 'Nidoran-f'?'Nidoran♀': pokeName === 'Nidoran-m'? 'Nidoran♂': pokeName}</a></li>
                                    <li key={`${poke._id}`}><a style={typeColor} href={`/type`}> {`${pokeType}`}</a></li>
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