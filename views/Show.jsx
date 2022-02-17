const React = require('react')

const myStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center'
    };

class Show extends React.Component {
    render(){
        const poke = this.props.poke
        const capitalize = poke.name.split('')
        capitalize[0] = capitalize[0].toUpperCase()
        const pokeName = capitalize.join('')
        return(
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All!</h1>
                <nav>
                   <a href="/pokemon">Back</a> 
                </nav>
                <h2>{pokeName}</h2>
                <img src={`http://img.pokemondb.net/artwork/${poke.name}` + '.jpg'} alt={poke.name}  />
            </div>
        )
    }
}

module.exports = Show;