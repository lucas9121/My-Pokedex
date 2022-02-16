const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    textAlign: 'center'
    };

class Index extends React.Component {
    render(){
        const pokemon = this.props.pokemon
        return(
            <div style={myStyle}>
                <h1>Check out all the Pokemon!</h1>
                <ul>
                    {
                        pokemon.map((poke, i) => {
                            const capitalize = poke.name.split('')
                            capitalize[0] = capitalize[0].toUpperCase()
                            const pokeName = capitalize.join('')
                            return(
                                <li><a href={`/pokemon/${i}`}>{pokeName}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index