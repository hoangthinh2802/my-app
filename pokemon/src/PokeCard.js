import React ,{ Component } from "react";
import './Pokecard.css'

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`; 
        return (
            <div className="PokeCard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
            )
    }
}

export default Pokecard;