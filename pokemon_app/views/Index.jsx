const React = require('react');
    
const myStyle = {
    backgroundColor: "blue",
    color:"black",
    
  };

class Index extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon</h1>
                <ul>
                    {this.props.pokemon.map((pokemon, x) => {
                        return(
                            <a href={`/pokemon/${pokemon.id}`}>
                                <li>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}                                
                                </li>
                            </a>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <a href="/"> back </a>
            </div>
        );
    }
}

module.exports = Index;