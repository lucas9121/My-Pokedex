const React = require('react')

const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}

class Show extends React.Component {
    render(){
        //capitalize first letter only
        const poke = this.props.poke
        const lowerCaseName = poke.name.toLowerCase()
        const capitalizeName = lowerCaseName.split('')
        capitalizeName[0] = capitalizeName[0].toUpperCase()
        const pokeName = capitalizeName.join('')
        const lowerCaseType = poke.type.toLowerCase()
        const capitalizeType = lowerCaseType.split('')
        capitalizeType[0] = capitalizeType[0].toUpperCase()
        const pokeType = capitalizeType.join('')
        //CSS 
        const pageStyle = {
            color: '#ffffff',
            textAlign: 'center',
            backgroundColor: pokeType === 'Normal'? '#aa9': 
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
            'white',
        };
        return(
            <div style={pageStyle}>
                <h1>Gotta Catch 'Em All!</h1>
                <nav>
                   <a style={linkStyle} href="/pokemon">Back</a> 
                </nav>
                <h2>{pokeName === 'Nidoran-f'?'Nidoran': pokeName === 'Nidoran-m'? 'Nidoran': pokeName}</h2>
                <img src={`http://img.pokemondb.net/artwork/${lowerCaseName}` + '.jpg'} alt={poke.name}  />
                <p>Type: {pokeType}</p>
            </div>
        )
    }
}

module.exports = Show;