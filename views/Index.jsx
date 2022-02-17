const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    textAlign: 'center',
};
const listStyle = {
    border: 'dotted',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    listStyleType: 'none'
}

class Index extends React.Component {
    render(){
        const pokemon = this.props.pokemon
        return(
            <div style={myStyle}>
                <h1>Check out all the Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Register Pokemon</a>
                </nav>
                <ul style={listStyle}>
                    {
                        pokemon.map((poke, i) => {
                            const capitalize = poke.name.split('')
                            capitalize[0] = capitalize[0].toUpperCase()
                            const pokeName = capitalize.join('')
                            return(
                                <div>
                                    <img src={`https://img.pokemondb.net/sprites/silver/normal/${poke.name}.png`} alt={pokeName}/>
                                    <li>{`${poke.type}`}</li>
                                    <li key={`${poke._id}`}><a href={`/pokemon/${poke._id}`}>{(i+1) + ' - ' + pokeName}</a></li>
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