const React = require('react')

//CSS
const pageStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
};
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

class New extends React.Component {
    render(){
        return(
            <div style={pageStyle}>
                <h1>Register A Pokémon</h1>
                <nav style={navStyle}>
                    <a style={linkStyle} href="/pokemon">Pokédex</a>
                </nav>
                <form action="/pokemon" method="POST">
                    Pokémon name: <input name="name" type="text" /><br/>
                    Pokémon type: <input name="type" type="text" /><br/>
                    <input type="submit" value="Register Pokemon" />
                </form>
            </div>
        )
    } 
}

module.exports = New;