const React = require('react')

//CSS
const pageStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
};
const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}
const ulStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2px 5px',
    listStyleType: 'none',
    margin: '10px 80px',
    padding: '0'
}
const navStyle = {
    backgroundColor: 'rgb(51, 153, 255, 0.4)',
    margin: '0 auto 60px',
    maxWidth: '20%',
    minWidth: 'auto',
    padding: '3px',
    borderRadius: '4px'
}
const pStyle = {
    textAlign: 'left',
    textIndent: '20px'
}


class Index extends React.Component {
    render(){
        const pokemonTypes = this.props.pokemonTypes
        return(
            <div style={pageStyle}>
                <h1>Pokémon Types</h1>
                <nav style={navStyle}>
                    <a style={linkStyle} href="/pokemon">Pokedex</a>
                </nav>
                <ul style={ulStyle}>
                    {
                        pokemonTypes.map((pokemonType) => {
                            //CSS
                            const typeColor = {
                                color: '#fff',
                                backgroundColor: pokemonType.name === 'Normal'? '#aa9': 
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
                                borderRadius: '10px',
                                width: '60px',
                                textShadow: '1px 1px 2px rgb(0 0 0 / 70%)',
                                padding: '2px',
                                fontSize: '.90em'
                            }
                            const typeLink = {
                                color: '#fff',
                                textDecoration: 'none'
                            }
                            return (
                                <li style={typeColor}><a style={typeLink} href={`/type/${pokemonType.name}`}>{pokemonType.name}</a></li>
                            )
                        })
                    }
                </ul>
                <p style={pStyle}>All Pokémon creatures and their moves are assigned certain types. 
                    Each type has several strengths and weaknesses in both attack and defense. 
                    In battle, you should use Pokémon and moves that have a type advantage over your opponent; 
                    doing so will cause much more damage than normal.</p>
                <p style={pStyle}>A single-type advantage (for instance a Water attack against a Ground-type Pokémon) will 
                    net you double normal damage. The advantages also stack up, so a double-type advantage 
                    (for instance a Water attack against a Ground/Rock-type Pokémon) will net you quadruple 
                    damage. In both these cases you will see the message It's super effective! in-game after the attack.</p>
                <p style={pStyle}>Conversely, a single- and double-type disadvantage will afflict half and a quarter 
                    normal damage respectively. Here you will see the message It's not very effective... in-game.</p>
                <p style={pStyle}>Another advantage you can gain is Same Type Attack Bonus (STAB). As the name implies, 
                    this increases the power of the move if the attacking Pokémon has the same type as the move used 
                    (for example a Fire-type Pokémon using a Fire-type move). In this case the damage is 1.5 times normal. 
                    Again this is added to any other advantages, so a Water-type Pokémon using a Water-type move against a 
                    Ground/Rock-type Pokémon will bag you six times (2x2x1.5) normal damage!</p>
                <img src="https://img.pokemondb.net/images/typechart.png" alt="type chart" />
            </div>
        )
    }
}

module.exports = Index