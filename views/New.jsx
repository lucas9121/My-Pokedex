const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Register A Pokémon</h1>
                <nav>
                    <a href="/pokemon">Back</a>
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